"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Radio, Calendar, Clock, Users } from "lucide-react"

interface Session {
  id: number
  title: string
  instructor: string
  date: string
  time: string
  participants: number
  isLive: boolean
  nextTime?: string
}

export default function LiveSessions() {
  const [sessions, setSessions] = useState<Session[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulamos obtener datos de sesiones en vivo
    const mockSessions: Session[] = [
      {
        id: 1,
        title: "Análisis Técnico en Tiempo Real - BVL",
        instructor: "Carlos Mendez",
        date: "2024-01-08",
        time: "19:00",
        participants: 245,
        isLive: true,
        nextTime: "",
      },
      {
        id: 2,
        title: "Introducción al Trading de Opciones",
        instructor: "Elena Ruiz",
        date: "2024-01-09",
        time: "20:00",
        participants: 0,
        isLive: false,
        nextTime: "Mañana a las 20:00",
      },
      {
        id: 3,
        title: "Gestión de Portafolio - Estrategias Defensivas",
        instructor: "Roberto Flores",
        date: "2024-01-10",
        time: "18:30",
        participants: 0,
        isLive: false,
        nextTime: "En 2 días a las 18:30",
      },
    ]

    setTimeout(() => {
      setSessions(mockSessions)
      setLoading(false)
    }, 500)
  }, [])

  return (
    <section id="sesiones-vivas" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Sesiones en Vivo</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Aprende directamente de expertos con sesiones interactivas en vivo. Haz preguntas en tiempo real.
          </p>
        </div>

        <div className="grid gap-6">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-foreground/60">Cargando sesiones...</p>
            </div>
          ) : (
            sessions.map((session) => (
              <Card
                key={session.id}
                className={`p-6 border-2 transition-all duration-300 ${
                  session.isLive ? "border-accent bg-accent/5 shadow-lg shadow-accent/20" : "border-border"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-foreground flex-1">{session.title}</h3>
                      {session.isLive && (
                        <Badge className="bg-accent text-accent-foreground animate-pulse flex gap-1 items-center">
                          <Radio size={12} className="fill-current" />
                          EN VIVO
                        </Badge>
                      )}
                    </div>

                    <p className="text-foreground/60 mb-4">
                      Instructor: <span className="font-semibold text-foreground">{session.instructor}</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-foreground/60">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary" />
                        <span>
                          {new Date(session.date).toLocaleDateString("es-ES", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-primary" />
                        <span>{session.time}</span>
                      </div>
                      {session.isLive && (
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-primary" />
                          <span>{session.participants} personas en vivo</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {session.isLive ? (
                      <>
                        <div className="text-right hidden sm:block">
                          <p className="text-sm text-foreground/60">Transmitiendo ahora</p>
                          <p className="text-xs text-accent font-semibold">En directo</p>
                        </div>
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                          Unirme Ahora
                        </Button>
                      </>
                    ) : (
                      <>
                        <div className="text-right hidden sm:block">
                          <p className="text-sm text-foreground/60">Próxima sesión</p>
                          <p className="text-xs text-primary font-semibold">{session.nextTime}</p>
                        </div>
                        <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                          Recordarme
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
