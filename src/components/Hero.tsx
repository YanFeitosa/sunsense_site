import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Smartphone, Sun } from "lucide-react";
import logo from "@/assets/sunsense-logo.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      {/* Logo decorativa no fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] opacity-[0.02] blur-xl">
          <img src={logo} alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <img 
                src={logo} 
                alt="SunSense Logo" 
                className="h-40 w-auto"
              />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Proteção Solar{" "}
              <span className="bg-gradient-sun bg-clip-text text-transparent">
                Inteligente
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Monitore sua exposição à radiação UV em tempo real com alertas personalizados 
              baseados em IoT para auxiliar na prevenção do câncer de pele.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-sun hover:shadow-sun transition-all duration-300 text-lg px-8 font-bold group"
                onClick={() => document.getElementById('campanha')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🚀 Apoiar Nova Iorque
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 text-lg px-8 hover:border-primary hover:bg-primary/5"
                onClick={() => document.getElementById('validacao')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Validação Científica
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-sun bg-clip-text text-transparent">🏆</div>
                <div className="text-sm text-muted-foreground">FENADANTE/SP</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">B2</div>
                <div className="text-sm text-muted-foreground">Artigo Publicado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-sun bg-clip-text text-transparent">🥈</div>
                <div className="text-sm text-muted-foreground">Prata no IFest</div>
              </div>
            </div>
          </div>

          {/* Right content - Features preview */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main card */}
              <div className="bg-card border-2 border-primary/20 rounded-3xl p-8 shadow-glow backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                    <div className="p-3 rounded-xl bg-gradient-primary">
                      <Sun className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Monitoramento em Tempo Real</h3>
                      <p className="text-sm text-muted-foreground">Leitura contínua de radiação UV com alertas inteligentes</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20">
                    <div className="p-3 rounded-xl bg-gradient-secondary">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Personalizado para Você</h3>
                      <p className="text-sm text-muted-foreground">Adaptado ao seu fototipo e FPS utilizado</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                    <div className="p-3 rounded-xl bg-gradient-primary">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Conectividade IoT</h3>
                      <p className="text-sm text-muted-foreground">WiFi e Bluetooth para monitoramento remoto</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-secondary rounded-full blur-2xl opacity-50 animate-pulse-glow" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-primary rounded-full blur-2xl opacity-40 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gradient-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
