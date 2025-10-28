import { Badge } from "@/components/ui/badge";
import { Clock, Bell, Wifi, Watch, HardHat, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Cálculo de Tempo Seguro",
      description: "Determina automaticamente quanto tempo você pode ficar ao sol com segurança baseado no seu fototipo e FPS aplicado",
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: Bell,
      title: "Alertas Inteligentes",
      description: "Notificações personalizadas para reaplicação de protetor solar ou necessidade de sair do sol",
      gradient: "from-secondary to-secondary-dark",
    },
    {
      icon: Wifi,
      title: "Conectividade IoT",
      description: "WiFi e Bluetooth integrados permitem monitoramento remoto e sincronização com dispositivos móveis",
      gradient: "from-primary-light to-primary",
    },
    {
      icon: Watch,
      title: "Versão Bracelete",
      description: "Design portátil e confortável para uso no dia a dia, academias e atividades ao ar livre",
      gradient: "from-secondary-light to-secondary",
    },
    {
      icon: HardHat,
      title: "Versão EPI",
      description: "Integrado em capacetes para proteção de trabalhadores em ambientes expostos ao sol",
      gradient: "from-primary to-secondary",
    },
    {
      icon: BarChart3,
      title: "Registro de Exposição",
      description: "Documentação completa da exposição acumulada para compliance e mitigação de riscos jurídicos",
      gradient: "from-secondary to-primary",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-gradient-primary text-white border-0 text-sm px-4 py-1.5">
            Tecnologia
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Recursos{" "}
            <span className="bg-gradient-sun bg-clip-text text-transparent">
              Inovadores
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tecnologia de ponta para proteção solar inteligente e personalizada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card border-2 border-border hover:border-primary/50 rounded-2xl p-8 hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Technical specs */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-muted/50 to-background rounded-3xl p-8 md:p-12 border-2 border-border">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Especificações Técnicas
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2" />
                  <div>
                    <div className="font-semibold mb-1">Sensor UV de Alta Precisão</div>
                    <div className="text-sm text-muted-foreground">Leitura contínua do índice UV em tempo real</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-secondary mt-2" />
                  <div>
                    <div className="font-semibold mb-1">Plataforma Open Source</div>
                    <div className="text-sm text-muted-foreground">Baseado em Arduino para fácil customização</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2" />
                  <div>
                    <div className="font-semibold mb-1">Bateria de Longa Duração</div>
                    <div className="text-sm text-muted-foreground">Autonomia para uso durante todo o dia de trabalho</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-secondary mt-2" />
                  <div>
                    <div className="font-semibold mb-1">Conectividade Dual</div>
                    <div className="text-sm text-muted-foreground">WiFi 802.11 b/g/n e Bluetooth 4.2</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2" />
                  <div>
                    <div className="font-semibold mb-1">Resistente à Água e Poeira</div>
                    <div className="text-sm text-muted-foreground">Design robusto para ambientes de trabalho</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-secondary mt-2" />
                  <div>
                    <div className="font-semibold mb-1">Interface Intuitiva</div>
                    <div className="text-sm text-muted-foreground">Display com informações claras e alertas visuais</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
