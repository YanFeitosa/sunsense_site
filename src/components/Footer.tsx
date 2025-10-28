import logo from "@/assets/sunsense-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="space-y-4 max-w-xs">
            <img 
              src={logo} 
              alt="SunSense Logo" 
              className="h-16 w-auto"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tecnologia IoT para prevenção inteligente de exposição à radiação UV 
              e combate ao câncer de pele.
            </p>
          </div>

          {/* Recognition */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Reconhecimentos</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-lg">🏆</span>
                <span>Feira Mineira de Ciências</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🥈</span>
                <span>Medalha Prata - IFEST (Tunísia)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📄</span>
                <span>Artigo Publicado (B2)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🗽</span>
                <span>Qualificado para Nova Iorque 2025</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} SunSense. Todos os direitos reservados.
            </p>
            <p>
              Great International School - Teresina/PI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
