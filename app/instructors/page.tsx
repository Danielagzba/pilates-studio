import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export const metadata = {
  title: "Instructors | Estudio Pilates",
  description: "Meet our team of certified Pilates instructors at Estudio Pilates in Mexico City.",
}

export default function InstructorsPage() {
  return (
    <div className="pt-16">
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-3xl md:text-4xl font-light mb-4">
              Our <span className="font-medium italic">Instructors</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet our team of certified Pilates instructors dedicated to guiding you on your wellness journey.
            </p>
          </div>

          <div className="grid gap-12">
            {instructors.map((instructor, index) => (
              <div
                key={instructor.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                  <Image
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-light mb-2">{instructor.name}</h2>
                  <p className="text-muted-foreground font-medium mb-6">{instructor.role}</p>
                  <div className="space-y-4 mb-6">
                    <p className="text-muted-foreground">{instructor.bio}</p>
                    <p className="text-muted-foreground">{instructor.philosophy}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Certifications</h3>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {instructor.certifications.map((cert, i) => (
                          <li key={i}>{cert}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Specialties</h3>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {instructor.specialties.map((specialty, i) => (
                          <li key={i}>{specialty}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {instructor.instagram && (
                    <div className="mt-6">
                      <a
                        href={instructor.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
                      >
                        <Instagram className="h-4 w-4 mr-2" />
                        Follow {instructor.name.split(" ")[0]} on Instagram
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-light mb-6">
              Join Our <span className="font-medium italic">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We're always looking for passionate, certified Pilates instructors to join our growing team. If you're
              interested in teaching at Estudio Pilates, we'd love to hear from you.
            </p>
            <Button asChild className="rounded-none px-8">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const instructors = [
  {
    id: "maria",
    name: "Maria Rodriguez",
    role: "Founder & Lead Instructor",
    image: "/placeholder.svg?height=800&width=600",
    bio: "Maria discovered Pilates during her career as a professional dancer and was immediately drawn to its precise, mindful approach to movement. After completing her comprehensive certification in New York, she taught at prestigious studios in the US and UK before returning to Mexico to found Estudio Pilates.",
    philosophy:
      "Maria believes that Pilates is for everybody and every body. Her teaching style emphasizes proper alignment, breath, and the mind-body connection, helping clients develop a deeper awareness of their movement patterns and potential.",
    certifications: [
      "Comprehensive Pilates Certification, The Pilates Center of New York",
      "Pre/Postnatal Pilates Specialist",
      "Pilates for Injuries and Pathologies",
      "Bachelor of Fine Arts in Dance, Universidad Nacional Autónoma de México",
    ],
    specialties: ["Athletic conditioning", "Dance-specific training", "Postural correction", "Injury rehabilitation"],
    instagram: "https://instagram.com",
  },
  {
    id: "carlos",
    name: "Carlos Mendez",
    role: "Reformer Specialist",
    image: "/placeholder.svg?height=800&width=600",
    bio: "With a background in physical therapy, Carlos brings a deep understanding of anatomy and rehabilitation to his teaching. He discovered Pilates as part of his own recovery from a sports injury and was so impressed by the results that he decided to become an instructor.",
    philosophy:
      "Carlos approaches Pilates as both an art and a science. He combines his knowledge of biomechanics with creative sequencing to create challenging yet accessible classes that help clients build strength, flexibility, and body awareness.",
    certifications: [
      "Comprehensive Pilates Certification, BASI Pilates",
      "Licensed Physical Therapist",
      "Specialized Training in Orthopedic Rehabilitation",
      "Master's in Sports Medicine, Universidad Iberoamericana",
    ],
    specialties: [
      "Sports rehabilitation",
      "Reformer techniques",
      "Athletic performance enhancement",
      "Spinal conditions",
    ],
    instagram: "https://instagram.com",
  },
  {
    id: "sofia",
    name: "Sofia Alvarez",
    role: "Prenatal Pilates Expert",
    image: "/placeholder.svg?height=800&width=600",
    bio: "Sofia's journey with Pilates began during her first pregnancy when she was looking for a safe and effective way to stay active. The profound impact it had on her pregnancy, birth, and recovery inspired her to specialize in prenatal and postnatal Pilates.",
    philosophy:
      "Sofia believes in empowering women through movement during all stages of life, especially during the transformative journey of pregnancy and motherhood. Her gentle yet effective approach creates a supportive environment where women can connect with their changing bodies.",
    certifications: [
      "Comprehensive Pilates Certification, Polestar Pilates",
      "Specialized Certification in Pre/Postnatal Pilates",
      "Doula Training, DONA International",
      "Bachelor's in Women's Health, Universidad Anáhuac",
    ],
    specialties: ["Prenatal Pilates", "Postnatal recovery", "Pelvic floor health", "Diastasis recti rehabilitation"],
    instagram: "https://instagram.com",
  },
  {
    id: "diego",
    name: "Diego Torres",
    role: "Advanced Pilates Instructor",
    image: "/placeholder.svg?height=800&width=600",
    bio: "Diego comes from a background in contemporary dance and gymnastics, bringing a unique perspective to his Pilates teaching. With over 8 years of teaching experience, he specializes in advanced Pilates techniques and creative sequencing.",
    philosophy:
      "Diego sees Pilates as a journey of continuous discovery. He encourages his clients to explore their boundaries and find joy in movement, while maintaining the precision and control that are hallmarks of the Pilates method.",
    certifications: [
      "Comprehensive Pilates Certification, Balanced Body",
      "Advanced Apparatus Specialist",
      "Bachelor of Arts in Contemporary Dance, Escuela Nacional de Danza Contemporánea",
      "Gymnastics Coach Certification",
    ],
    specialties: [
      "Advanced Pilates techniques",
      "Performance enhancement for dancers and athletes",
      "Creative sequencing",
      "Flexibility training",
    ],
    instagram: "https://instagram.com",
  },
]

