import { AlertTriangle, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            O Desafio da{" "}
            <span className="bg-gradient-sun bg-clip-text text-transparent">
              Exposição Solar
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A radiação UV é a principal causa de câncer de pele, afetando milhões 
            de pessoas anualmente, especialmente trabalhadores expostos ao sol.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Stat 1 */}
          <div className="bg-card border-2 border-destructive/20 rounded-2xl p-8 hover:shadow-glow transition-all duration-300 animate-fade-in">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/5 flex items-center justify-center mb-4">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-br from-destructive to-destructive/70 bg-clip-text text-transparent">
                1 em 3
              </div>
              <div className="text-sm text-muted-foreground">
                mortes por câncer de pele não-melanoma é causada pela exposição 
                ocupacional ao sol
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Fonte: OMS & OIT
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-card border-2 border-secondary/20 rounded-2xl p-8 hover:shadow-sun transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-secondary flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2 bg-gradient-sun bg-clip-text text-transparent">
                Infância
              </div>
              <div className="text-sm text-muted-foreground">
                Queimaduras solares na infância elevam significativamente 
                o risco de melanoma ao longo da vida
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Risco acumulativo ao longo da vida
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                Trabalho
              </div>
              <div className="text-sm text-muted-foreground">
                Trabalhadores em ambientes abertos são os mais vulneráveis 
                à exposição desprotegida à radiação UV
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Construção, agricultura, portos
              </p>
            </div>
          </div>
        </div>

        {/* Solution preview */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-12 border-2 border-primary/20 backdrop-blur-sm">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold">
                É por isso que o{" "}
                <span className="bg-gradient-sun bg-clip-text text-transparent">
                  SunSense
                </span>
                {" "}existe
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Uma ferramenta de prevenção inteligente que conecta a medição 
                precisa de radiação UV com alertas personalizados, protegendo 
                trabalhadores e indivíduos da exposição excessiva ao sol.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
