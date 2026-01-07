import Header from "@/components/header"
import Hero from "@/components/hero"
import Modules from "@/components/modules"
import Instructors from "@/components/instructors"
import LiveSessions from "@/components/live-sessions"
import Events from "@/components/events"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Modules />
      <Instructors />
      <LiveSessions />
      <Events />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
