import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Trophy, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Validation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="validacao" className="py-24 bg-gradient-to-b from-muted/30 to-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-secondary text-white border-0 text-sm px-4 py-1.5">
            Reconhecimento
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Validação{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Científica
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            SunSense nasceu no ambiente acadêmico e já conquistou reconhecimento 
            nacional e internacional
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {/* Achievement 1 */}
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-300 animate-fade-in">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center mb-4">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Feira Mineira</h3>
            <p className="text-sm text-muted-foreground">
              Destaque em feira científica estadual
            </p>
          </div>

          {/* Achievement 2 */}
          <div className="bg-card border-2 border-secondary/20 rounded-2xl p-6 text-center hover:shadow-sun transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-secondary flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">FENADANTE/SP</h3>
            <p className="text-sm text-muted-foreground">
              Reconhecimento em feira nacional
            </p>
          </div>

          {/* Achievement 3 */}
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">🥈 IFEST</h3>
            <p className="text-sm text-muted-foreground">
              Medalha de prata no IFEST(Tunísia)
            </p>
          </div>

          {/* Achievement 4 */}
          <div className="bg-card border-2 border-secondary/20 rounded-2xl p-6 text-center hover:shadow-sun transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-secondary flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Artigo B2</h3>
            <p className="text-sm text-muted-foreground">
              Publicação científica validada
            </p>
          </div>
        </div>

        {/* Main validation content */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-card to-muted/30 rounded-3xl p-8 md:p-12 border-2 border-primary/20 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary mb-4">
                    Próxima Etapa
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    Qualificado para{" "}
                    <span className="bg-gradient-sun bg-clip-text text-transparent">
                      Nova Iorque
                    </span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    SunSense está qualificado para participar de feira 
                    científica internacional em Nova Iorque em junho do próximo ano, 
                    representando o Brasil em uma das mais prestigiadas competições científicas.
                  </p>
                </div>

                <div className="pt-6 border-t border-border space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Validação Matemática:</span> Pesquisador matemático confirmou a precisão dos algoritmos
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Apoio Médico:</span> Respaldo da comunidade de oncologia e profissionais de saúde
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Origem Acadêmica:</span> Desenvolvido em ambiente escolar com rigor científico
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 border-2 border-primary/20">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-6xl font-bold bg-gradient-sun bg-clip-text text-transparent mb-2">
                        🗽
                      </div>
                      <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Nova Iorque 2026
                      </div>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">Junho 2026</div>
                      <div className="text-sm font-semibold text-muted-foreground">
                        Feira Internacional
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Representando o Brasil
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-secondary rounded-full blur-2xl opacity-40" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-primary rounded-full blur-2xl opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Validation;
