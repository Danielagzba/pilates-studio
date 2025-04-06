import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "About Us | Estudio Pilates",
  description:
    "Learn about our studio's philosophy, history, and the instructor behind Estudio Pilates in Mexico City.",
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Pilates studio"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              About <span className="font-medium italic">Us</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-xl mx-auto">
              Our story, our philosophy, and the person who makes Estudio Pilates special.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div className="relative h-[400px] md:h-[500px]">
              <Image src="/placeholder.svg?height=800&width=600" alt="Studio founder" fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
                Our <span className="font-medium italic">Story</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Estudio Pilates was founded in 2018 by Maria Rodriguez, a certified Pilates instructor with over 15
                years of experience. After training and teaching in New York and London, Maria returned to her native
                Mexico City with a vision to create a studio that combined traditional Pilates principles with a modern
                approach.
              </p>
              <p className="text-muted-foreground mb-6">
                What began as a small studio with just two reformers has grown into a thriving community of clients
                dedicated to the transformative power of mindful movement. Today, Estudio Pilates is recognized as one
                of the leading boutique Pilates studios in Mexico City, known for its expert instruction, welcoming
                atmosphere, and commitment to helping clients achieve their wellness goals.
              </p>
              <p className="text-muted-foreground">
                Our studio continues to evolve, but our core mission remains the same: to provide a space where people
                of all ages and abilities can discover the benefits of Pilates and develop a deeper connection between
                mind and body.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 md:py-32 bg-stone-100">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
              Our <span className="font-medium italic">Philosophy</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              At Estudio Pilates, we believe that Pilates is more than just exercise—it's a pathway to a balanced,
              mindful life. Our approach is guided by these core principles:
            </p>

            <div className="grid sm:grid-cols-2 gap-8 text-left">
              <div className="space-y-2">
                <h3 className="font-medium text-lg">Mindful Movement</h3>
                <p className="text-sm text-muted-foreground">
                  We emphasize the connection between mind and body, encouraging awareness of every movement and breath.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-lg">Personalized Approach</h3>
                <p className="text-sm text-muted-foreground">
                  We recognize that every body is unique, and we tailor our instruction to meet individual needs and
                  goals.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-lg">Quality Over Quantity</h3>
                <p className="text-sm text-muted-foreground">
                  We focus on precision and proper form rather than repetition, ensuring safe and effective practice.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-lg">Continuous Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Maria is committed to ongoing education, bringing the latest research and techniques to our studio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Maria */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
              Meet <span className="font-medium italic">Maria</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The passionate instructor behind Estudio Pilates.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div className="relative h-[400px] overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Maria Rodriguez"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-medium mb-2">Maria Rodriguez</h3>
              <p className="text-sm text-muted-foreground mb-6">Founder & Lead Instructor</p>
              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground">
                  Maria discovered Pilates during her career as a professional dancer and was immediately drawn to its
                  precise, mindful approach to movement. After completing her comprehensive certification in New York,
                  she taught at prestigious studios in the US and UK before returning to Mexico to found Estudio
                  Pilates.
                </p>
                <p className="text-muted-foreground">
                  Maria believes that Pilates is for everybody and every body. Her teaching style emphasizes proper
                  alignment, breath, and the mind-body connection, helping clients develop a deeper awareness of their
                  movement patterns and potential.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Certifications</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    <li>Comprehensive Pilates Certification, The Pilates Center of New York</li>
                    <li>Pre/Postnatal Pilates Specialist</li>
                    <li>Pilates for Injuries and Pathologies</li>
                    <li>Bachelor of Fine Arts in Dance, Universidad Nacional Autónoma de México</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Specialties</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    <li>Athletic conditioning</li>
                    <li>Dance-specific training</li>
                    <li>Postural correction</li>
                    <li>Injury rehabilitation</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  Follow Maria on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Studio */}
      <section className="py-20 md:py-32 bg-stone-100">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
                Our <span className="font-medium italic">Studio</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Located in the heart of Roma Norte, our studio is designed to be a tranquil escape from the bustling
                city. The space features natural light, minimalist design, and state-of-the-art equipment to create an
                environment that promotes focus and mindfulness.
              </p>
              <p className="text-muted-foreground mb-8">
                Our facility includes a main studio for mat classes and four professional-grade reformers. We've
                carefully curated every aspect of our space to enhance your Pilates experience.
              </p>
              <Button asChild className="rounded-none">
                <Link href="/gallery" className="group">
                  View Our Gallery
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[200px]">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Studio interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Reformer equipment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image src="/placeholder.svg?height=400&width=300" alt="Mat class area" fill className="object-cover" />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Studio reception"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
              Join Our <span className="font-medium italic">Community</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              We invite you to experience the Estudio Pilates difference for yourself. Whether you're new to Pilates or
              an experienced practitioner, our doors are open to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-none px-8">
                <Link href="/booking">Book a Class</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-none px-8">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

