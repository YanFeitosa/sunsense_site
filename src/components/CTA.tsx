import { Button } from "@/components/ui/button";
import { MessageSquare, Heart, InstagramIcon } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-16 border-2 border-primary/20 shadow-glow text-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <div className="inline-block mb-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-white text-sm font-semibold">
                    <span className="animate-pulse">🚀</span>
                    <span>Projeto Inovador</span>
                  </div>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Interessado em{" "}
                  <span className="bg-gradient-sun bg-clip-text text-transparent">
                    SunSense?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Seja você um consumidor individual, empresa ou investidor, 
                  queremos conversar sobre como o SunSense pode proteger você 
                  e sua equipe.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-sun hover:shadow-sun transition-all duration-300 text-lg px-8 group"
                  onClick={() => document.getElementById('campanha')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Heart className="mr-2 h-5 w-5 fill-white" />
                  Apoiar Campanha
                </Button>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 group"
                  onClick={() => window.open('https://www.instagram.com/sunsense_uvvis?igsh=MXUweXh1eG02Z2h5Zg==', '_blank')}
                >
                  <InstagramIcon className="mr-2 h-5 w-5" />
                  Entre em Contato
                </Button>

              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Ideal para:
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">
                    Empresas de Construção
                  </div>
                  <div className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-sm font-medium">
                    Agronegócio
                  </div>
                  <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">
                    Escolas
                  </div>
                  <div className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-sm font-medium">
                    Consumidores Finais
                  </div>
                  <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">
                    Investidores
                  </div>
                  <div className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-sm font-medium">
                    Portos e Logística
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">IoT</div>
                  <div className="text-xs text-muted-foreground">Tecnologia Conectada</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-sun bg-clip-text text-transparent mb-2">24/7</div>
                  <div className="text-xs text-muted-foreground">Monitoramento Contínuo</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-xs text-muted-foreground">Personalizado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
