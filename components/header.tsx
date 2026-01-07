"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">₹</span>
          </div>
          <span className="font-bold text-xl text-foreground">Invertir para el futuro</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#modulos" className="text-sm font-medium text-foreground hover:text-primary transition">
            Módulos
          </a>
          <a href="#sesiones-vivas" className="text-sm font-medium text-foreground hover:text-primary transition">
            Sesiones en Vivo
          </a>
          <a href="#testimonios" className="text-sm font-medium text-foreground hover:text-primary transition">
            Testimonios
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <a
          href="https://wa.me/51927859435?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20tu%20servicio%20de%20desarrollo%20web."
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <Button className="hidden md:flex gap-2 bg-primary hover:bg-primary/90 cursor-pointer">
            Acceder ahora
          </Button>
        </a>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <a href="#modulos" className="block text-sm font-medium text-foreground hover:text-primary">
              Módulos
            </a>
            <a href="#sesiones-vivas" className="block text-sm font-medium text-foreground hover:text-primary">
              Sesiones en Vivo
            </a>
            <a href="#testimonios" className="block text-sm font-medium text-foreground hover:text-primary">
              Testimonios
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90">Acceder Ahora</Button>
          </div>
        </div>
      )}
    </header>
  )
}
