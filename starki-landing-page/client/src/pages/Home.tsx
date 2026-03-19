import { Button } from "@/components/ui/button";
import { ChevronRight, Star, Users, Zap, Trophy, Mail, Phone } from "lucide-react";
import { useState } from "react";

/**
 * Starki Landing Page - Joyful Craft Design Philosophy
 * 
 * Design System:
 * - Colors: Warm Yellow (#FFD93D), Soft Black (#2C2C2C), Warm Orange (#FF9F43), Soft Purple (#A29BFE)
 * - Typography: Quicksand (display, playful) + Poppins (body, modern)
 * - Layout: Organic asymmetry with curved dividers
 * - Animations: Playful, bouncy, with celebration moments
 * - Tone: Warm, friendly, family-focused, playful yet professional
 */

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = '/auth';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground  font-bold text-lg">★</span>
            </div>
            <span className=" font-bold text-xl text-foreground">Starki</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition">Recursos</a>
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition">Benefícios</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition">Preços</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition">FAQ</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.location.href = '/auth'}>
            Entrar
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold leading-tight text-foreground">
                  O Futuro da Rotina Infantil Chegou
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Transforme tarefas em aventuras. Sincronize sua família. Deixe as crianças competirem (de forma saudável).
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground  font-semibold"
                  onClick={() => window.location.href = '/auth'}
                >
                  Começar Gratuitamente <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5  font-semibold"
                  onClick={() => window.location.href = '/app'}
                >
                  Ver Demo
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold border-2 border-white">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">10.000+</span> famílias já usam Starki
                </p>
              </div>
            </div>

            <div className="relative h-96 md:h-full">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028991001/A7CxWLeNBahkugLipfHLRF/starki-hero-family-4MxptWfUfSE2AFb2WDNx8F.webp"
                alt="Família usando Starki"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl  font-bold text-foreground">
              Por Que Quadros Físicos Não Funcionam Mais?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Crianças digitais precisam de soluções modernas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Falta de Engajamento",
                description: "Quadros de papel são chatos. Crianças perdem interesse rápido, e as tarefas viram uma luta diária."
              },
              {
                title: "Sem Sincronização Familiar",
                description: "Quando ambos os pais trabalham, é impossível acompanhar quem fez o quê. Informações ficam desorganizadas."
              },
              {
                title: "Sem Motivação Real",
                description: "Adesivos e recompensas físicas não funcionam para crianças digitais. Elas precisam de algo mais moderno."
              },
              {
                title: "Sem Comparação Saudável",
                description: "Crianças não têm forma de ver o progresso de amigos ou irmãos. Falta aquele 'algo a mais' para motivar."
              }
            ].map((problem, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <span className="text-destructive text-xl">✕</span>
                </div>
                <h3 className="text-xl  font-bold mb-3 text-foreground">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl  font-bold text-foreground">
              Conheça o Starki: Tarefas Que Crianças Realmente Querem Fazer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transformamos a rotina infantil em um jogo divertido onde tarefas viram missões
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container">
          <div className="space-y-16">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Recurso 1</span>
                </div>
                <h3 className="text-3xl  font-bold text-foreground">
                  Tarefas Viram Missões
                </h3>
                <p className="text-lg text-muted-foreground">
                  Cada tarefa é uma missão. Cada conclusão gera pontos, badges e desbloqueios. As crianças ganham experiência real e veem seu progresso crescer. Não é apenas um quadro — é um jogo que elas querem jogar.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Pontos e badges por conclusão</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Níveis e desbloqueios progressivos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Progresso visual em tempo real</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-96">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028991001/A7CxWLeNBahkugLipfHLRF/starki-gamification-Qd5S5zm8HRrsyzTphEkpYp.webp"
                  alt="Gamificação"
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center md:grid-flow-dense">
              <div className="relative h-96">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028991001/A7CxWLeNBahkugLipfHLRF/starki-sync-4P4Q5Z4NqaDhdCgCjvpqDB.webp"
                  alt="Sincronização Familiar"
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                  <Users className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-semibold text-secondary">Recurso 2</span>
                </div>
                <h3 className="text-3xl  font-bold text-foreground">
                  Toda a Família Conectada
                </h3>
                <p className="text-lg text-muted-foreground">
                  Pais recebem notificações em tempo real. Sincronize múltiplos filhos em um único painel. Veja quem completou tarefas, quando completou e quanto progrediu. Sem confusão, sem esquecimentos.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">Painel único para toda a família</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">Notificações em tempo real</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">Sincronização automática entre dispositivos</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                  <Trophy className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">Recurso 3</span>
                </div>
                <h3 className="text-3xl  font-bold text-foreground">
                  Crianças Competem, Famílias Ganham
                </h3>
                <p className="text-lg text-muted-foreground">
                  Crie grupos com amigos, primos ou irmãos. Crianças veem o ranking, comparam progresso e se motivam mutuamente. É competição saudável que transforma tarefas em diversão.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-accent" />
                    <span className="text-foreground">Grupos de crianças e rankings</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-accent" />
                    <span className="text-foreground">Competição saudável e motivante</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-accent" />
                    <span className="text-foreground">Desafios semanais e mensais</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-96">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028991001/A7CxWLeNBahkugLipfHLRF/starki-groups-FkGPJRgUwHUYA6YXh2LtCe.webp"
                  alt="Grupos e Competição"
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl  font-bold text-foreground">
              Benefícios Para Toda a Família
            </h2>
            <p className="text-lg text-muted-foreground">
              Pais e crianças ganham juntos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl  font-bold text-foreground">Para Pais</h3>
              {[
                { title: "Menos Conflitos", desc: "Tarefas claras, gamificadas e motivantes reduzem discussões diárias." },
                { title: "Organização Total", desc: "Um painel único mostra o status de todos os filhos. Nada fica perdido." },
                { title: "Educação Financeira", desc: "Ensine conceitos de economia e recompensas de forma prática." },
                { title: "Paz Mental", desc: "Saiba que sua família está organizada, motivada e progredindo." }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className=" font-bold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl  font-bold text-foreground">Para Crianças</h3>
              {[
                { title: "Diversão Real", desc: "Tarefas deixam de ser chatas. Viram missões e desafios." },
                { title: "Progresso Visível", desc: "Crianças veem seu progresso crescer em tempo real." },
                { title: "Competição Saudável", desc: "Comparetem com amigos e irmãos de forma motivante." },
                { title: "Autonomia", desc: "Desenvolvem responsabilidade de forma clara e motivante." }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold">★</span>
                  </div>
                  <div>
                    <h4 className=" font-bold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-primary/10">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl  font-bold text-foreground">
              O Que Famílias Dizem Sobre Starki
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria, Mãe de 2 Filhos",
                text: "Antes do Starki, tarefas eram uma guerra. Agora meus filhos acordam perguntando que missões têm para o dia. Mudou tudo em casa.",
                rating: 5
              },
              {
                name: "João, Pai de 3 Filhos",
                text: "Finalmente consigo acompanhar o que cada filho está fazendo. O painel é perfeito. Minha esposa e eu estamos sempre sincronizados.",
                rating: 5
              },
              {
                name: "Sofia, Mãe de 1 Filho",
                text: "Meu filho tem 6 anos e adora o Starki. Ele compete com o primo dele e se motiva sozinho. Nunca pensei que tarefas pudessem ser assim.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className=" font-bold text-foreground">{testimonial.name}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
            {[
              { stat: "10.000+", label: "Famílias" },
              { stat: "87%", label: "Aumento em Tarefas" },
              { stat: "95%", label: "Satisfação" },
              { stat: "150", label: "Pontos/Semana" }
            ].map((item, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl  font-bold text-primary">{item.stat}</p>
                <p className="text-sm text-muted-foreground mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl  font-bold text-foreground">
              Planos Para Sua Família
            </h2>
            <p className="text-lg text-muted-foreground">
              Escolha o plano perfeito para sua família
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "Gratuito",
                features: ["Até 2 filhos", "Até 10 tarefas", "Notificações básicas", "Sem grupos"],
                cta: "Começar Agora",
                highlighted: false
              },
              {
                name: "Family",
                price: "R$ 29,90",
                period: "/mês",
                features: ["Até 5 filhos", "Tarefas ilimitadas", "Notificações avançadas", "Grupos até 10 crianças", "Relatórios de progresso"],
                cta: "Teste Grátis",
                highlighted: true
              },
              {
                name: "Premium",
                price: "R$ 59,90",
                period: "/mês",
                features: ["Filhos ilimitados", "Tarefas ilimitadas", "Notificações avançadas", "Grupos ilimitados", "Relatórios detalhados", "Suporte prioritário"],
                cta: "Teste Grátis",
                highlighted: false
              }
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border transition ${
                  plan.highlighted
                    ? "border-primary bg-gradient-to-br from-primary/10 to-secondary/5 shadow-lg scale-105"
                    : "border-border bg-white hover:shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold mb-4">
                    Mais Popular
                  </div>
                )}
                <h3 className="text-2xl  font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl  font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">✓</span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "border-primary text-primary hover:bg-primary/5"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                  onClick={() => window.location.href = '/auth'}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl  font-bold text-foreground">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Meu filho pode usar o Starki sem smartphone?",
                a: "Sim! Starki funciona em qualquer dispositivo com navegador (tablet, computador). Você também pode gerenciar tudo pelo seu celular."
              },
              {
                q: "É seguro? Meus dados estão protegidos?",
                a: "Sim. Usamos criptografia de nível bancário e conformidade com LGPD. Seus dados familiares são 100% privados."
              },
              {
                q: "Posso usar com múltiplos filhos?",
                a: "Claro! O Starki foi feito para famílias. Gerencie todos os seus filhos em um único painel."
              },
              {
                q: "Quanto tempo leva para configurar?",
                a: "Menos de 5 minutos. Crie conta, adicione filhos, defina tarefas. Pronto!"
              },
              {
                q: "Posso cancelar a assinatura a qualquer momento?",
                a: "Sim, sem compromisso. Cancele quando quiser, sem multa."
              },
              {
                q: "Há limite de idade?",
                a: "Starki é ideal para crianças de 3 a 12 anos, mas pode ser usado em qualquer idade."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-border p-6 cursor-pointer hover:shadow-md transition">
                <summary className="flex items-center justify-between  font-bold text-foreground">
                  {faq.q}
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="signup" className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl  font-bold text-foreground">
              Transforme a Rotina de Sua Família Hoje
            </h2>
            <p className="text-lg text-muted-foreground">
              Junte-se a 10.000+ famílias que já estão usando Starki
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 rounded-lg bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground  font-semibold px-8"
              >
                Começar Agora
              </Button>
            </form>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground  font-bold">★</span>
                </div>
                <span className=" font-bold text-lg">Starki</span>
              </div>
              <p className="text-background/70 text-sm">
                Transformando rotinas infantis em aventuras divertidas.
              </p>
            </div>

            <div>
              <h4 className=" font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#features" className="hover:text-background transition">Recursos</a></li>
                <li><a href="#pricing" className="hover:text-background transition">Preços</a></li>
                <li><a href="#" className="hover:text-background transition">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className=" font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-background transition">Sobre</a></li>
                <li><a href="#" className="hover:text-background transition">Contato</a></li>
                <li><a href="#" className="hover:text-background transition">Privacidade</a></li>
              </ul>
            </div>

            <div>
              <h4 className=" font-bold mb-4">Contato</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:hello@starki.app" className="hover:text-background transition">hello@starki.app</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="https://wa.me/5511999999999" className="hover:text-background transition">WhatsApp</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/70">
            <p>&copy; 2026 Starki. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-background transition">Política de Privacidade</a>
              <a href="#" className="hover:text-background transition">Termos de Serviço</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
