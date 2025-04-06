"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  ArrowRight,
  Globe,
} from "lucide-react";

export default function PilatesStudioLanding() {
  const [language, setLanguage] = useState<"en" | "es">("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  const content = language === "en" ? englishContent : spanishContent;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Language Switcher */}
      <div className="fixed right-4 top-4 z-50">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border-pilates-300 text-pilates-950"
          onClick={toggleLanguage}
        >
          <Globe className="h-4 w-4" />
          {language === "en" ? "Español" : "English"}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative w-full bg-white">
        <div className="relative h-[70vh] w-full overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt={content.hero.imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {content.hero.title}
            </h1>
            <p className="mb-8 max-w-2xl text-lg sm:text-xl">
              {content.hero.description}
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-pilates-100 hover:bg-pilates-200">
                {content.hero.primaryButton}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pilates-950 text-pilates-950 hover:bg-pilates-950/10"
              >
                {content.hero.secondaryButton}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-white py-16">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {content.about.title}
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                {content.about.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="px-4 md:px-6">
          <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {content.benefits.title}
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                {content.benefits.description}
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.benefits.items.map((benefit, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pilates-50">
                    {getBenefitIcon(benefit.icon)}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
                  <p className="text-gray-500">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="px-4 md:px-6">
          <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {content.instructor.title}
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                {content.instructor.subtitle}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 h-60 w-60 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt={content.instructor.name}
                width={240}
                height={240}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold">{content.instructor.name}</h3>
            <p className="mb-2 text-pilates-500">{content.instructor.role}</p>
            <p className="max-w-2xl text-gray-500">{content.instructor.bio}</p>
            <div className="mt-6 flex gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> {content.instructor.bookButton}
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Users className="h-4 w-4" /> {content.instructor.joinButton}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="w-full bg-white py-16">
        <div className="px-4 md:px-6">
          <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {content.schedule.title}
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                {content.schedule.description}
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-2xl rounded-lg border bg-card p-6 shadow-sm">
            <div className="grid gap-6">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pilates-50 text-pilates-500">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      {content.schedule.morningClass.title}
                    </h3>
                    <p className="text-gray-500">
                      {content.schedule.morningClass.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">8:30 AM</p>
                  <p className="text-sm text-gray-500">
                    {content.schedule.daily}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pilates-50 text-pilates-500">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      {content.schedule.midMorningClass.title}
                    </h3>
                    <p className="text-gray-500">
                      {content.schedule.midMorningClass.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">9:30 AM</p>
                  <p className="text-sm text-gray-500">
                    {content.schedule.daily}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Button className="bg-pilates-100 hover:bg-pilates-200">
                {content.schedule.bookButton}{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="px-4 md:px-6">
          <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {content.testimonials.title}
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                {content.testimonials.description}
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mb-4 italic text-gray-600">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-pilates-100 py-16 text-pilates-950">
        <div className="px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {content.cta.title}
                </h2>
                <p className="max-w-[600px] md:text-xl">
                  {content.cta.description}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-pilates-500 hover:bg-gray-100"
                >
                  {content.cta.primaryButton}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pilates-950 text-pilates-950 hover:bg-pilates-950/10"
                >
                  {content.cta.secondaryButton}
                </Button>
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-lg bg-white/10 p-6">
              <h3 className="text-xl font-bold">{content.contactForm.title}</h3>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {content.contactForm.nameLabel}
                  </label>
                  <input
                    id="name"
                    className="h-10 rounded-md border-pilates-950/20 bg-white/10 px-3 text-white placeholder:text-white/50"
                    placeholder={content.contactForm.namePlaceholder}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {content.contactForm.emailLabel}
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="h-10 rounded-md border-pilates-950/20 bg-white/10 px-3 text-white placeholder:text-white/50"
                    placeholder={content.contactForm.emailPlaceholder}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {content.contactForm.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    className="min-h-[100px] rounded-md border-pilates-950/20 bg-white/10 p-3 text-white placeholder:text-white/50"
                    placeholder={content.contactForm.messagePlaceholder}
                  />
                </div>
                <Button className="bg-white text-pilates-500 hover:bg-gray-100">
                  {content.contactForm.submitButton}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 py-12 text-white">
        <div className="px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold">
                {content.footer.studioName}
              </h3>
              <p className="text-gray-400">{content.footer.tagline}</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">
                {content.footer.contactTitle}
              </h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" /> {content.footer.address}
                </p>
                <p>info@harmonypilates.com</p>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">
                {content.footer.hoursTitle}
              </h3>
              <div className="space-y-2 text-gray-400">
                <p>{content.footer.weekdayHours}</p>
                <p>{content.footer.saturdayHours}</p>
                <p>{content.footer.sundayHours}</p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">
                {content.footer.followTitle}
              </h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-pilates-400">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-pilates-400">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-pilates-400">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} {content.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper function to get the right icon based on the icon name
function getBenefitIcon(iconName: string) {
  switch (iconName) {
    case "star":
      return <Star className="h-6 w-6 text-pilates-500" />;
    case "users":
      return <Users className="h-6 w-6 text-pilates-500" />;
    case "calendar":
      return <Calendar className="h-6 w-6 text-pilates-500" />;
    case "clock":
      return <Clock className="h-6 w-6 text-pilates-500" />;
    case "map-pin":
      return <MapPin className="h-6 w-6 text-pilates-500" />;
    default:
      return <Star className="h-6 w-6 text-pilates-500" />;
  }
}

// English content
const englishContent = {
  hero: {
    title: "Transform Your Body with Reformer Pilates",
    description:
      "Experience our signature reformer Pilates class in our specialized studio with expert instruction guiding you every step of the way.",
    primaryButton: "Book a Class",
    secondaryButton: "Learn More",
    imageAlt: "Pilates studio with people exercising",
  },
  about: {
    title: "Welcome to Harmony Reformer Pilates Studio",
    description:
      "Our mission is to help you achieve balance, strength, and wellness through the transformative practice of reformer Pilates.",
  },
  benefits: {
    title: "The Benefits of Pilates",
    description:
      "Discover how Pilates can transform your physical and mental wellbeing.",
    items: [
      {
        title: "Improved Core Strength",
        description:
          "Pilates focuses on the core muscles, helping to build a strong foundation for all movement.",
        icon: "star",
      },
      {
        title: "Better Posture",
        description:
          "Regular practice helps align the spine and strengthen the muscles that support good posture.",
        icon: "users",
      },
      {
        title: "Increased Flexibility",
        description:
          "Gentle stretching movements improve range of motion and overall flexibility.",
        icon: "calendar",
      },
      {
        title: "Stress Reduction",
        description:
          "The mindful movement and breathing techniques help reduce stress and promote relaxation.",
        icon: "clock",
      },
      {
        title: "Injury Prevention",
        description:
          "Strengthening the body in a balanced way helps prevent injuries in daily life and other activities.",
        icon: "map-pin",
      },
      {
        title: "Mind-Body Connection",
        description:
          "Pilates encourages awareness of breath and movement, enhancing the mind-body connection.",
        icon: "users",
      },
    ],
  },
  instructor: {
    title: "Meet Your Instructor",
    subtitle:
      "Your journey will be guided by our expert reformer Pilates instructor.",
    name: "Sarah Johnson",
    role: "Certified Reformer Pilates Instructor",
    bio: "With over 10 years of experience, Sarah is a certified reformer Pilates instructor who specializes in personalized training. Her approach combines classical Pilates principles with modern techniques to create effective, transformative workouts for all fitness levels. Sarah's passion for helping clients achieve their fitness goals is evident in her attentive instruction and customized approach to each session.",
    bookButton: "Book a Session",
    joinButton: "Join a Class",
  },
  schedule: {
    title: "Class Schedule",
    description: "Join us for our daily reformer Pilates classes.",
    morningClass: {
      title: "Morning Class",
      description: "Perfect way to start your day",
    },
    midMorningClass: {
      title: "Mid-Morning Class",
      description: "Energize your day",
    },
    daily: "Daily",
    bookButton: "Book a Class",
  },
  testimonials: {
    title: "What Our Clients Say",
    description:
      "Hear from our community about their transformative experiences.",
    items: [
      {
        text: "The reformer Pilates classes at Harmony Studio have completely transformed my posture and eliminated my back pain. Sarah is knowledgeable and attentive.",
        name: "Jessica T.",
        title: "Member since 2020",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        text: "As someone recovering from a knee injury, the rehabilitation reformer sessions have been instrumental in my recovery. I'm stronger than ever!",
        name: "Marcus L.",
        title: "Member since 2021",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        text: "The prenatal reformer Pilates classes helped me stay active throughout my pregnancy. Sarah really understands what pregnant women need.",
        name: "Sophia R.",
        title: "Member since 2022",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  cta: {
    title: "Ready to Start Your Pilates Journey?",
    description:
      "Book your first class today and experience the transformative power of reformer Pilates.",
    primaryButton: "Book a Class",
    secondaryButton: "Contact Us",
  },
  contactForm: {
    title: "Request Information",
    nameLabel: "Name",
    namePlaceholder: "Enter your name",
    emailLabel: "Email",
    emailPlaceholder: "Enter your email",
    messageLabel: "Message",
    messagePlaceholder: "Tell us what you're interested in",
    submitButton: "Submit",
  },
  footer: {
    studioName: "Harmony Reformer Pilates Studio",
    tagline:
      "Transforming bodies and minds through the power of reformer Pilates since 2010.",
    contactTitle: "Contact",
    address: "123 Pilates Way, Fitness City",
    hoursTitle: "Hours",
    weekdayHours: "Monday - Friday: 6am - 9pm",
    saturdayHours: "Saturday: 8am - 6pm",
    sundayHours: "Sunday: 9am - 4pm",
    followTitle: "Follow Us",
    copyright: "Harmony Pilates Studio. All rights reserved.",
  },
};

// Spanish content
const spanishContent = {
  hero: {
    title: "Transforma Tu Cuerpo con Pilates Reformer",
    description:
      "Experimenta nuestra clase exclusiva de Pilates Reformer en nuestro estudio especializado con instrucción experta guiándote en cada paso del camino.",
    primaryButton: "Reservar una Clase",
    secondaryButton: "Saber Más",
    imageAlt: "Estudio de Pilates con personas ejercitándose",
  },
  about: {
    title: "Bienvenido a Harmony Estudio de Pilates Reformer",
    description:
      "Nuestra misión es ayudarte a lograr equilibrio, fuerza y bienestar a través de la práctica transformadora del Pilates Reformer.",
  },
  benefits: {
    title: "Los Beneficios del Pilates",
    description:
      "Descubre cómo el Pilates puede transformar tu bienestar físico y mental.",
    items: [
      {
        title: "Mejora la Fuerza del Core",
        description:
          "El Pilates se enfoca en los músculos centrales, ayudando a construir una base sólida para todo movimiento.",
        icon: "star",
      },
      {
        title: "Mejor Postura",
        description:
          "La práctica regular ayuda a alinear la columna y fortalecer los músculos que apoyan una buena postura.",
        icon: "users",
      },
      {
        title: "Mayor Flexibilidad",
        description:
          "Los movimientos de estiramiento suave mejoran el rango de movimiento y la flexibilidad general.",
        icon: "calendar",
      },
      {
        title: "Reducción del Estrés",
        description:
          "Las técnicas de movimiento consciente y respiración ayudan a reducir el estrés y promover la relajación.",
        icon: "clock",
      },
      {
        title: "Prevención de Lesiones",
        description:
          "Fortalecer el cuerpo de manera equilibrada ayuda a prevenir lesiones en la vida diaria y otras actividades.",
        icon: "map-pin",
      },
      {
        title: "Conexión Mente-Cuerpo",
        description:
          "El Pilates fomenta la conciencia de la respiración y el movimiento, mejorando la conexión mente-cuerpo.",
        icon: "users",
      },
    ],
  },
  instructor: {
    title: "Conoce a Tu Instructora",
    subtitle:
      "Tu viaje será guiado por nuestra experta instructora de Pilates Reformer.",
    name: "Sarah Johnson",
    role: "Instructora Certificada de Pilates Reformer",
    bio: "Con más de 10 años de experiencia, Sarah es una instructora certificada de Pilates Reformer que se especializa en entrenamiento personalizado. Su enfoque combina los principios clásicos del Pilates con técnicas modernas para crear entrenamientos efectivos y transformadores para todos los niveles de condición física. La pasión de Sarah por ayudar a los clientes a alcanzar sus objetivos de fitness es evidente en su instrucción atenta y enfoque personalizado en cada sesión.",
    bookButton: "Reservar una Sesión",
    joinButton: "Unirse a una Clase",
  },
  schedule: {
    title: "Horario de Clases",
    description: "Únete a nuestras clases diarias de Pilates Reformer.",
    morningClass: {
      title: "Clase Matutina",
      description: "La manera perfecta de comenzar tu día",
    },
    midMorningClass: {
      title: "Clase de Media Mañana",
      description: "Energiza tu día",
    },
    daily: "Diario",
    bookButton: "Reservar una Clase",
  },
  testimonials: {
    title: "Lo Que Dicen Nuestros Clientes",
    description:
      "Escucha a nuestra comunidad sobre sus experiencias transformadoras.",
    items: [
      {
        text: "Las clases de Pilates Reformer en Harmony Studio han transformado completamente mi postura y eliminado mi dolor de espalda. Sarah es conocedora y atenta.",
        name: "Jessica T.",
        title: "Miembro desde 2020",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        text: "Como alguien que se recupera de una lesión de rodilla, las sesiones de rehabilitación con reformer han sido fundamentales en mi recuperación. ¡Estoy más fuerte que nunca!",
        name: "Marcus L.",
        title: "Miembro desde 2021",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        text: "Las clases de Pilates Reformer prenatal me ayudaron a mantenerme activa durante todo mi embarazo. Sarah realmente entiende lo que necesitan las mujeres embarazadas.",
        name: "Sophia R.",
        title: "Miembro desde 2022",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  cta: {
    title: "¿Listo para Comenzar tu Viaje de Pilates?",
    description:
      "Reserva tu primera clase hoy y experimenta el poder transformador del Pilates Reformer.",
    primaryButton: "Reservar una Clase",
    secondaryButton: "Contáctanos",
  },
  contactForm: {
    title: "Solicitar Información",
    nameLabel: "Nombre",
    namePlaceholder: "Ingresa tu nombre",
    emailLabel: "Correo Electrónico",
    emailPlaceholder: "Ingresa tu correo electrónico",
    messageLabel: "Mensaje",
    messagePlaceholder: "Cuéntanos qué te interesa",
    submitButton: "Enviar",
  },
  footer: {
    studioName: "Harmony Estudio de Pilates Reformer",
    tagline:
      "Transformando cuerpos y mentes a través del poder del Pilates Reformer desde 2010.",
    contactTitle: "Contacto",
    address: "123 Calle Pilates, Ciudad Fitness",
    hoursTitle: "Horario",
    weekdayHours: "Lunes - Viernes: 6am - 9pm",
    saturdayHours: "Sábado: 8am - 6pm",
    sundayHours: "Domingo: 9am - 4pm",
    followTitle: "Síguenos",
    copyright: "Harmony Pilates Studio. Todos los derechos reservados.",
  },
};
