import { Mail, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">₹</span>
              </div>
              <span className="font-bold text-foreground">Investor Hub</span>
            </div>
            <p className="text-sm text-foreground/60">Transformando inversores desde 2024</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Programa</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Módulos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Sesiones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Mentores
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Empresa</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>&copy; 2026 Investor Hub. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-primary transition">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
