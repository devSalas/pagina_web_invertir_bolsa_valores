import { Card } from "@/components/ui/card"
import { Zap, BookOpen, Users, BarChart3, Shield, Rocket } from "lucide-react"

const modules = [
  {
    icon: BookOpen,
    title: "Fundamentos de Inversión",
    description:
      "Aprende los conceptos básicos del mercado de valores, tipos de activos y cómo funcionan las bolsas de Lima y Nueva York.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: BarChart3,
    title: "Análisis Técnico",
    description:
      "Domina las herramientas para analizar gráficos, identificar tendencias y tomar decisiones basadas en datos.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Análisis Fundamental",
    description:
      "Estudia los estados financieros, entiende la salud de las empresas y toma decisiones de inversión informadas.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Shield,
    title: "Gestión de Riesgo",
    description: "Aprende a proteger tu capital, diversificar tu portafolio y minimizar pérdidas potenciales.",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Rocket,
    title: "Estrategias Avanzadas",
    description: "Explora técnicas de trading, opciones, futuros y otras estrategias para maximizar rentabilidad.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Zap,
    title: "Práctica en Tiempo Real",
    description: "Operaciones simuladas y con capital real con mentores experimentados guiándote cada paso.",
    color: "from-amber-500 to-amber-600",
  },
]

export default function Modules() {
  return (
    <section id="modulos" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Programa Completo de 6 días
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Cada módulo está diseñado para llevarte de principiante a inversor competente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon
            return (
              <Card key={index} className="group p-6 hover:shadow-lg transition-all duration-300 border-border">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{module.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{module.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
