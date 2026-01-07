import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Juan Rodríguez",
    role: "Ingeniero | Lima",
    content:
      "El bootcamp cambió mi perspectiva sobre la inversión. Pasé de ser completo novato a tener mi propio portafolio diversificado en menos de 2 meses.",
    rating: 5,
    avatar: "👨‍💼",
  },
  {
    name: "María García",
    role: "Emprendedora | Miami",
    content:
      "Las sesiones en vivo son increíbles. Puedo hacer preguntas en tiempo real y los instructores responden con ejemplos prácticos de mercados reales.",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    name: "Luis Chen",
    role: "Profesional de TI | Nueva York",
    content:
      "Finalmente entiendo cómo funcionan los mercados americanos. La combinación de teoría y práctica es perfecta para aprender de verdad.",
    rating: 5,
    avatar: "👨‍💻",
  },
  {
    name: "Ana Martínez",
    role: "Contadora | Arequipa",
    content:
      "La gestión de riesgos es mi favorito. Ahora invierto con mucha más confianza sabiendo exactamente cómo proteger mi capital.",
    rating: 5,
    avatar: "👩‍🔬",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Miles de personas ya están transformando su futuro financiero
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-foreground/70 leading-relaxed mb-6 text-sm">{testimonial.content}</p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
