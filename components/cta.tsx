import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 sm:p-12 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
                Comienza tu viaje como inversor
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Únete a cientos de estudiantes que ya están construyendo riqueza de forma inteligente y disciplinada
              </p>
            </div>

            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-accent flex-shrink-0" size={20} />
                <span className="text-foreground">Acceso a todas las sesiones en vivo durante 8 semanas</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-accent flex-shrink-0" size={20} />
                <span className="text-foreground">Material educativo exclusivo y actualizaciones diarias</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-accent flex-shrink-0" size={20} />
                <span className="text-foreground">Soporte directo de mentores experimentos</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-accent flex-shrink-0" size={20} />
                <span className="text-foreground">Certificado al completar el programa</span>
              </div>
            </div>

            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-base w-full sm:w-auto">
              Inscribirse Ahora <ArrowRight size={20} />
            </Button>

            <p className="text-sm text-foreground/60">
              ✓ Sin compromisos adicionales | Acceso inmediato | Garantía de 30 días
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
