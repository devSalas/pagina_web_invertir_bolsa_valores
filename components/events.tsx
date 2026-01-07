import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Pichange Financiera",
      description:
        "Competencia amigable donde aprendes a invertir mientras compites con otros traders. Premios en efectivo y reconocimiento para los mejores.",
      date: "Próximamente",
      category: "Competencia",
      type: "en-vivo",
      attendees: "150+",
      icon: "🏆",
    },
    {
      id: 2,
      title: "Webinar: Análisis Técnico Avanzado",
      description:
        "Sesión en vivo donde aprenderás técnicas avanzadas de análisis técnico directamente aplicables en tus inversiones.",
      date: "Cada jueves",
      category: "Educación",
      type: "en-vivo",
      attendees: "200+",
      icon: "📊",
    },
    {
      id: 3,
      title: "Mentoría Grupal",
      description:
        "Sesiones de mentoría grupal donde podrás resolver tus dudas directamente con nuestros instructores expertos.",
      date: "Cada martes",
      category: "Mentoría",
      type: "proximo",
      attendees: "50+",
      icon: "🎓",
    },
    {
      id: 4,
      title: "Tour Bolsa de Valores Lima",
      description:
        "Visita guiada a la Bolsa de Valores de Lima para entender en persona cómo funciona el mercado peruano.",
      date: "Trimestral",
      category: "Evento Presencial",
      type: "evento",
      attendees: "100+",
      icon: "🏢",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Eventos y Experiencias</h2>
          <p className="text-lg text-muted-foreground">
            Participa en eventos exclusivos diseñados para acelerar tu aprendizaje financiero
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden border border-slate-200 hover:shadow-lg transition-all hover:border-blue-300 group cursor-pointer"
            >
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 border-b border-slate-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{event.icon}</div>
                  <Badge
                    className={`${
                      event.type === "en-vivo"
                        ? "bg-red-100 text-red-700 animate-pulse"
                        : event.type === "proximo"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {event.type === "en-vivo" ? "EN VIVO" : "Próximamente"}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{event.description}</p>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z"
                      />
                    </svg>
                    {event.attendees} asistentes
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white group-hover:bg-blue-50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">{event.category}</span>
                  <svg
                    className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 md:p-12 text-white">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold mb-4">¿Listo para transformar tu futuro financiero?</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Únete a nuestra comunidad de inversores y comienza tu viaje hacia la libertad financiera hoy mismo. Recibe
              acceso a todos nuestros eventos y sesiones en vivo.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
              Solicitar Acceso
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
