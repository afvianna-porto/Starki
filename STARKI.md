# Starki — Documentação do Projeto

## Visão Geral

Starki é um app de quadro de tarefas familiar com sistema de pontos e recompensas. Pais cadastram tarefas semanais para os filhos, aprovam conclusões e as crianças resgatam recompensas com os pontos acumulados.

**URL em produção:** https://starki.app  
**Stack:** HTML/CSS/JS vanilla + Supabase (auth + PostgreSQL) + Netlify (hospedagem)

---

## Credenciais e Serviços

### Supabase
- **URL:** `https://qoxnkpmkwwiecrtvghgh.supabase.co`
- **Anon Key:** `sb_publishable_Zvl6LZdm6yrYDlP_3JGXiA_WS67O3xG`
- **Dashboard:** https://supabase.com/dashboard/project/qoxnkpmkwwiecrtvghgh

### Netlify
- **Site:** `storied-druid-dcba73.netlify.app`
- **Dashboard:** https://app.netlify.com

### Domínio
- **Registrador:** GoDaddy
- **Domínio:** starki.app

### E-mail (SMTP)
- **Provedor:** Resend (resend.com)
- **Host:** smtp.resend.com / Porta 465
- **Remetente:** noreply@starki.app

---

## Estrutura de Arquivos

```
starki/
  auth.html        # Telas de autenticação (login, cadastro, convite, recuperar senha)
  app.html         # App principal (quadro semanal, recompensas, gerenciar)
  netlify.toml     # Configuração de deploy e redirects
  schema.sql       # Schema completo do banco (referência)
  task_templates.sql  # Seed das 43 tarefas globais
```

---

## Banco de Dados (PostgreSQL / Supabase)

### Tabelas

| Tabela | Descrição |
|--------|-----------|
| `families` | Grupo familiar. Tem `invite_code` de 8 chars para convidar responsáveis |
| `profiles` | Estende `auth.users`. Um perfil por responsável, vinculado a uma família |
| `children` | Crianças sem login, gerenciadas pelos responsáveis |
| `tasks` | Tarefas da família. `child_id null` = válida para todos |
| `task_completions` | Registro de conclusão por dia. Tem `approved_by` para aprovação |
| `rewards` | Recompensas cadastradas pela família |
| `redemptions` | Resgates de recompensas |
| `point_transactions` | Histórico completo de movimentação de pontos |
| `task_templates` | Templates globais de tarefas (43 itens, 7 categorias) |

### Row Level Security (RLS)
Todas as tabelas têm RLS ativo. A função `get_family_id()` isola os dados por família. Políticas relevantes aplicadas:

```sql
-- families: insert liberado para signup funcionar antes da sessão
create policy "family_insert" on public.families
  for insert with check (true);

-- task_templates: leitura pública para usuários autenticados
create policy "templates_select" on public.task_templates
  for select using (auth.uid() is not null);
```

### Trigger de Signup
Ao criar usuário no `auth.users`, o trigger `on_auth_user_created` cria automaticamente o `profile` com o nome vindo de `raw_user_meta_data`.

---

## Fluxo de Autenticação

### Novo usuário (primeiro responsável)
1. `signUp` com email/senha e `{ data: { name } }`
2. Trigger cria o `profile` automaticamente
3. Frontend cria a `family` e atualiza `profile.family_id`

### Segundo responsável
1. Recebe link de convite por e-mail com o `invite_code`
2. Faz `signUp` ou `signIn`
3. Frontend busca a família pelo código e atualiza `profile.family_id`

### Configurações Auth no Supabase
- Confirm email: **desativado** (MVP)
- SMTP customizado: Resend configurado
- Site URL: `https://starki.app`
- Redirect URLs: `https://starki.app/app.html`, `https://starki.app/auth.html`

---

## Lógica de Negócio

### Pontos
- Cada tarefa tem `points_per_day`
- Pontos só contam após **aprovação** do responsável (`approved_by` preenchido)
- Ao clicar "Adicionar ao banco", os pontos da semana somam ao `children.point_balance`
- `point_transactions` registra todo crédito e débito

### Semana
- Grade de 7 dias (Seg–Dom) por tarefa
- Semana calculada pelo `weekStart()` — segunda-feira da semana atual
- Cada célula = 1 `task_completion` com `completion_date`

### Recompensas
- Custo em pontos definido pelo responsável
- Resgate desconta de `children.point_balance` e registra em `redemptions`

---

## Identidade Visual (Starki)

### Paleta
| Nome | Hex | Uso |
|------|-----|-----|
| Estrela | `#F59E0B` | Cor principal, brand |
| Noite | `#0F0E1A` | Fundo dark, texto |
| Mel | `#D97706` | Hover, acento |
| Creme | `#FFFBF0` | Fundo claro |
| Verde | `#10B981` | Aprovado, sucesso |
| Vermelho | `#EF4444` | Erro |

### Tipografia
- **Títulos/Logo:** Nunito Black (900)
- **Interface:** Nunito Sans (400/600)

---

## Próximos Passos (Backlog)

- [ ] PWA — `manifest.json` + service worker para instalar no celular
- [ ] Tela `reset-password.html` — link de redirecionamento do Supabase após recuperação
- [ ] Modal de tarefas — filtro por categoria e faixa etária (`age_min`/`age_max`)
- [ ] Relatório familiar — comparativo de desempenho entre crianças
- [ ] Notificações — lembrete diário de tarefas pendentes
- [ ] Modo criança — painel simplificado sem acesso ao gerenciar
- [ ] Histórico de resgates por criança
- [ ] App nativo (React Native / Capacitor)

---

## Comandos Úteis

### Deploy (Netlify)
Arrastar a pasta do projeto para a área de deploy em:
https://app.netlify.com/sites/storied-druid-dcba73/deploys

### Banco de dados (SQL Editor)
https://supabase.com/dashboard/project/qoxnkpmkwwiecrtvghgh/sql/new

### Regenerar invite_code de uma família
```sql
update families
set invite_code = substr(md5(random()::text), 1, 8)
where id = 'FAMILY_ID_AQUI';
```

### Ver usuários cadastrados
```sql
select u.email, p.name, f.name as familia, p.created_at
from auth.users u
join profiles p on p.id = u.id
left join families f on f.id = p.family_id
order by p.created_at desc;
```

### Ver pontos por criança
```sql
select c.name, c.point_balance, count(tc.id) as tarefas_aprovadas
from children c
left join task_completions tc on tc.child_id = c.id and tc.approved_by is not null
group by c.id, c.name, c.point_balance
order by c.point_balance desc;
```
