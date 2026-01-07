import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function Instructors() {
  const instructors = [
    {
      name: "Jorgehandre",
      specialty: "Créditos y Finanzas",
      image: "/images/jorgeandre.jpg",
      youtube: "Jorgehandre Créditos y Finanzas",
      link_youtube:"https://www.youtube.com/channel/UCQS-pN8ISvJR-xLs8jmcVsA",
      description: "Experto en estrategias de crédito e inversión en mercados financieros",
    },
    {
      name: "Luis Ccaccya",
      specialty: "Inversión y Estrategia",
      image: "/images/image.png",
      youtube: "Invertir para el Futuro",
       link_youtube:"https://www.youtube.com/channel/UCfsJUCIO5UeihiG6075hRBw",
      description: "Especialista en análisis de valores y construcción de portafolios rentables",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Aprende de los Mejores</h2>
          <p className="text-lg text-muted-foreground">
            Instructores con experiencia comprobada en los mercados financieros
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {instructors.map((instructor, index) => (
            <Card key={index} className="overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 p-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={instructor.image || "/placeholder.svg"}
                      alt={instructor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center mb-2">{instructor.name}</h3>
                  <p className="text-blue-100 font-semibold text-center mb-4">{instructor.specialty}</p>
                  <p className="text-white text-center text-sm mb-6">{instructor.description}</p>
                  <a
                    href={instructor.link_youtube}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    {instructor.youtube}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 border border-blue-200">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground">Experiencia Comprobada</h3>
          </div>
          <p className="text-foreground/80">
            Nuestros instructores tienen años de experiencia activa en los mercados de valores de Lima y Estados Unidos,
            con un historial comprobado de rentabilidad y educación financiera.
          </p>
        </div>
      </div>
    </section>
  )
}
