import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Users, Plane, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Campaign = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  return (
    <section id="campanha" className="py-24 bg-gradient-to-br from-secondary/5 via-primary/5 to-background relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 right-20 text-9xl">🗽</div>
        <div className="absolute bottom-20 left-20 text-9xl">🚀</div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-sun text-white border-0 text-sm px-6 py-2 font-bold">
              🌟 Campanha Ativa
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Ajude o SunSense a{" "}
              <span className="bg-gradient-sun bg-clip-text text-transparent">
                Brilhar em Nova Iorque
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Fomos qualificados para representar o Brasil na feira científica 
              internacional em Nova Iorque. Sua contribuição torna esse sonho realidade!
            </p>
          </div>

          {/* Card principal de campanha */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-12 shadow-glow backdrop-blur-sm mb-12"
          >
            

            {/* Informações da viagem */}
            <div className="grid md:grid-cols-3 gap-6 mb-8 p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-background border border-border">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Quando</div>
                  <div className="text-muted-foreground text-sm">Junho 2026</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Onde</div>
                  <div className="text-muted-foreground text-sm">Nova Iorque, EUA</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Objetivo</div>
                  <div className="text-muted-foreground text-sm">Feira Internacional</div>
                </div>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="text-center space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-sun hover:shadow-sun transition-all duration-300 text-xl px-12 py-6 h-auto font-bold w-full md:w-auto group"
                onClick={() => window.open('https://www.vakinha.com.br/vaquinha/sunsense?utm_source=pos-checkout&utm_medium=sharing', '_blank')}
              >
                <Heart className="mr-3 h-6 w-6 fill-white" />
                Fazer uma Contribuição
                <Plane className="ml-3 h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Qualquer valor faz a diferença • 100% transparente
              </p>
            </div>
          </motion.div>

          {/* Por que apoiar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-bold mb-2">Representar o Brasil</h3>
              <p className="text-sm text-muted-foreground">
                Levar inovação brasileira para o cenário mundial
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-secondary flex items-center justify-center mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="font-bold mb-2">Ciência & Saúde</h3>
              <p className="text-sm text-muted-foreground">
                Apoiar pesquisa que salva vidas
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="font-bold mb-2">Jovem Cientista</h3>
              <p className="text-sm text-muted-foreground">
                Incentivar a próxima geração
              </p>
            </div>
          </motion.div>

          {/* Transparência */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-block px-6 py-3 rounded-full bg-muted/50 border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">100% Transparente:</span> Todos os recursos 
                serão usados para passagens, hospedagem e taxas da feira
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Campaign;
