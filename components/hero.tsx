import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <TrendingUp size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Invierte en tu futuro financiero</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight text-balance">
              Bootcamp:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Libera tu poder en la bolsa de valores
              </span>
            </h1>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl text-balance">
              Nuestro bootcamp intensivo te enseña todo lo necesario para comenzar a invertir en los mercados de Lima y
              Estados Unidos. Desde conceptos básicos hasta estrategias avanzadas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/*  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-base">
                Comienza Hoy <ArrowRight size={20} />
              </Button> */}
              <a
                href="https://wa.me/51927859435?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20tu%20servicio%20de%20desarrollo%20web."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-base">
                  Comienza Hoy <ArrowRight size={20} />
                </Button>
              </a>

              <Button size="lg" variant="outline" className="text-base bg-transparent">
                Ver Programa
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <p className="text-sm text-foreground/60">Estudiantes activos</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">8 sesiónes</div>
                <p className="text-sm text-foreground/60">Programa intensivo</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">95%</div>
                <p className="text-sm text-foreground/60">Tasa de éxito</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative  ">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl"></div>
            <div className="absolute top-8 right-8 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="relative h-full flex items-center justify-center overflow-hidden rounded-2xl border border-border shadow-lg ">
              {/*  <div className="text-center">
                <div className="inline-block p-8 bg-card rounded-2xl border border-border shadow-lg">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    📈
                  </div>
                  <p className="text-sm text-foreground/60 mt-2">
                    Empieza a invertir <br /> con confianza
                  </p>
                </div>
              </div> */}
              <img src="/hero-img.webp" className="object-fill" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
