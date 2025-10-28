import { Badge } from "@/components/ui/badge";
import { Users, Building2, Sprout, HardHat, FileCheck, GraduationCap } from "lucide-react";

const Markets = () => {
  const markets = [
    {
      icon: Users,
      title: "Consumidores Finais",
      description: "Praias, piscinas, esportes ao ar livre, caminhadas",
      benefits: ["Prevenção pessoal", "Facilidade de uso", "Alertas em tempo real"],
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: Building2,
      title: "Construção Civil",
      description: "Trabalhadores expostos durante obras e construções",
      benefits: ["Compliance SST", "Redução de afastamentos", "Documentação legal"],
      gradient: "from-secondary to-secondary-dark",
    },
    {
      icon: Sprout,
      title: "Agricultura",
      description: "Agricultores e trabalhadores rurais em plantações",
      benefits: ["Proteção em campo aberto", "Durabilidade robusta", "Monitoramento contínuo"],
      gradient: "from-primary-light to-primary",
    },
    {
      icon: GraduationCap,
      title: "Escolas",
      description: "Educação e proteção solar para crianças e adolescentes",
      benefits: ["Educação preventiva", "Proteção em atividades escolares", "Conscientização"],
      gradient: "from-secondary-light to-secondary",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-primary text-white border-0 text-sm px-4 py-1.5">
            Mercados
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Quem se{" "}
            <span className="bg-gradient-sun bg-clip-text text-transparent">
              Beneficia
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            SunSense atende desde consumidores individuais até grandes empresas 
            com trabalhadores expostos ao sol
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {markets.map((market, index) => {
            const Icon = market.icon;
            return (
              <div
                key={index}
                className="group bg-card border-2 border-border hover:border-primary/50 rounded-3xl p-8 hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${market.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{market.title}</h3>
                    <p className="text-muted-foreground mb-4">{market.description}</p>
                    <div className="space-y-2">
                      {market.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${market.gradient}`} />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SST Focus Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border-2 border-primary/20 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <HardHat className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">Foco em SST</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  SunSense pode se tornar um <span className="font-semibold text-foreground">EPI obrigatório</span> em 
                  ambientes de trabalho expostos ao sol, ajudando empresas a cumprir 
                  normas de segurança e proteger seus colaboradores.
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <FileCheck className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold">Documentação completa para auditoria e compliance</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-card rounded-2xl p-6 border-2 border-primary/20">
                  <div className="text-sm font-semibold text-primary mb-2">Benefícios Empresariais</div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-sm text-muted-foreground">Redução de afastamentos por doenças de pele</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                      <span className="text-sm text-muted-foreground">Proteção contra processos trabalhistas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-sm text-muted-foreground">Compliance com normas de segurança</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                      <span className="text-sm text-muted-foreground">Monitoramento centralizado de equipes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-6 border-2 border-secondary/20">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-muted-foreground mb-2">Potencial de Mercado</div>
                    <div className="text-3xl font-bold bg-gradient-sun bg-clip-text text-transparent">
                      Milhões de Trabalhadores
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      Expostos diariamente à radiação UV
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Diferenciais{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Competitivos
              </span>
            </h3>
            <p className="text-muted-foreground">
              Por que SunSense é diferente de protetor solar, roupas UV e outras soluções
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-bold mb-2">Baseado em Dados</h4>
              <p className="text-sm text-muted-foreground">
                Decisões preventivas baseadas em medições reais, não estimativas
              </p>
            </div>

            <div className="bg-card border-2 border-secondary/20 rounded-2xl p-6 text-center hover:shadow-sun transition-all duration-300">
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-secondary flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-bold mb-2">Monitoramento Contínuo</h4>
              <p className="text-sm text-muted-foreground">
                Acompanhamento em tempo real, 24/7, enquanto você trabalha
              </p>
            </div>

            <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-bold mb-2">Proteção Legal</h4>
              <p className="text-sm text-muted-foreground">
                Documentação completa para empresas e trabalhadores
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markets;
