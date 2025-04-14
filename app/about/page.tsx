import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Talasofilia Pilates",
  description:
    "Learn about our studio's philosophy, history, and the instructor behind Talasofilia Pilates in Puerto Escondido.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/P4130016.png"
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
              Our story, our philosophy, and the person who makes Talasofilia
              Pilates special.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="P4150046.png"
                alt="Studio founder"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
                Our <span className="font-medium italic">Story</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Talasofilia Pilates was born out of María Laura’s passion for
                Pilates and her dedication to helping others feel their best.
                With over five years of experience, María started her journey in
                Mazatlán before moving to Puerto Escondido with a dream of
                creating a space that blends the timeless principles of Pilates
                with a modern, welcoming approach. What started as a small
                studio with just one reformer has blossomed into a vibrant
                community of clients who truly believe in the power of mindful
                movement.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, Talasofilia Pilates is proud to be one of the top
                boutique Pilates studios in Puerto Escondido, known for its
                expert instruction and warm, inviting atmosphere. Our mission is
                simple: to offer a space where everyone, no matter their age or
                ability, can explore the benefits of Pilates and deepen the
                connection between mind and body. Whether you’re new to Pilates
                or have been practicing for years, we’re here to support you on
                your journey to better health and wellness!
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
              At Talasofilia Pilates, we believe that Pilates is more than just
              exercise—it's a pathway to a balanced, mindful life. Our approach
              is guided by these core principles:
            </p>

            <div className="grid sm:grid-cols-2 gap-8 text-left">
              <div className="space-y-2">
                <h3 className="font-medium text-lg">Mindful Movement</h3>
                <p className="text-sm text-muted-foreground">
                  We emphasize the connection between mind and body, encouraging
                  awareness of every movement and breath.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-lg">Personalized Approach</h3>
                <p className="text-sm text-muted-foreground">
                  We recognize that every body is unique, and we tailor our
                  instruction to meet individual needs and goals.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-lg">Quality Over Quantity</h3>
                <p className="text-sm text-muted-foreground">
                  We focus on precision and proper form rather than repetition,
                  ensuring safe and effective practice.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-lg">Continuous Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Maria is committed to ongoing education, bringing the latest
                  research and techniques to our studio.
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
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate instructor behind Estudio Pilates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div className="relative h-[400px] overflow-hidden">
              <Image
                src="/P4150144.png"
                alt="Maria Rodriguez"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-medium mb-2">
                Maria Laura Osuna
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Founder & Lead Instructor
              </p>
              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground">
                  Maria first experienced Pilates in her hometown of Mazatlán.
                  After dancing throughout her childhood, she stopped at age 16
                  and began searching for a new way to stay active—but nothing
                  resonated with her until she discovered Pilates. She fell in
                  love with the practice when she started noticing real changes
                  in her daily life, such as improved flexibility, strength, and
                  overall well-being. After completing her comprehensive
                  certification, she started her teaching journey at the very
                  studio where she had first discovered Pilates.
                </p>
                <p className="text-muted-foreground">
                  Maria believes that Pilates is for everybody and every body.
                  Her teaching style emphasizes proper alignment, breath, and
                  the mind-body connection, helping clients develop a deeper
                  awareness of their movement patterns and potential.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href="https://www.instagram.com/talasofiliapilates"
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
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
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
                Located in the heart of Puerto Escondido, our studio is a
                peaceful sanctuary inspired by the natural beauty of the coast.
                With abundant natural light, a breathtaking ocean view, and top
                of the line equipment, the space is designed to support focus,
                mindfulness, and a deep connection to movement.
              </p>
              <p className="text-muted-foreground mb-8">
                Our facility includes a main studio with three
                professional-grade reformers. Every detail has been thoughtfully
                curated to create an inviting environment that enhances your
                Pilates experience and reflects the laid-back, vibrant spirit of
                Puerto.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[200px]">
                <Image
                  src="/studio.jpg"
                  alt="Studio interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/studio2.jpg"
                  alt="Reformer equipment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/studio3.jpg"
                  alt="Mat class area"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/studio4.jpg"
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
              We invite you to experience the Talasofilia Pilates difference for
              yourself. Whether you’re new to Pilates or an experienced
              practitioner, our doors are open to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-none px-8">
                <Link href="/booking">Book a Class</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none px-8"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
