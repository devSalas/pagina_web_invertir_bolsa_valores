import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      name: "Pichange Financiera",
      description:
        "Competencia amigable donde participantes aplican estrategias de inversión en tiempo real. ¡Gana premios y experiencia!",
      date: "15 de Febrero 2025",
      time: "6:00 PM - 8:30 PM",
      location: "Online en vivo",
      attendees: 245,
      image: "/pichanga.jpg",
      type: "Competencia",
    },
    {
      id: 2,
      name: "Masterclass: Análisis Técnico Avanzado",
      description:
        "Aprende técnicas avanzadas de análisis técnico con Jorgehandre. Identifica patrones ganadores en gráficos de valores.",
      date: "22 de Febrero 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Online en vivo",
      attendees: 180,
      image: "/analisis-finnaciero.webp",
      type: "Masterclass",
    },
    {
      id: 3,
      name: "Taller: Diversificación de Portafolio",
      description:
        "Con Luis Ccaccya aprenderás a construir un portafolio diversificado en NYSE y BVL. Minimiza riesgos, maximiza ganancias.",
      date: "1 de Marzo 2025",
      time: "6:30 PM - 8:30 PM",
      location: "Online en vivo",
      attendees: 156,
      image: "/diversificacion.jpg",
      type: "Taller",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background via-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-accent">Próximos Eventos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Eventos y Competencias</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Participa en nuestros eventos exclusivos, competencias de inversión y masterclasses con expertos en el
            mercado de valores.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {event.type}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <Users size={16} />
                    <span>{event.attendees} participantes inscritos</span>
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{event.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{event.description}</p>

                {/* Event Details */}
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar size={18} className="text-accent flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock size={18} className="text-accent flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin size={18} className="text-accent flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full px-4 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 group/btn">
                  Inscribirse Ahora
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Event Stats */}
        <div className="grid md:grid-cols-3 gap-6 bg-card border border-border rounded-2xl p-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">12+</div>
            <p className="text-muted-foreground">Eventos anuales</p>
          </div>
          <div className="text-center border-l border-r border-border px-8">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">2,000+</div>
            <p className="text-muted-foreground">Participantes este año</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">S/2K+</div>
            <p className="text-muted-foreground">Premios en competencias</p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Clock } from "lucide-react"
