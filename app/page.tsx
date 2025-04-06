"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Globe } from "lucide-react";

export default function PilatesStudioLanding() {
  const [language, setLanguage] = useState<"en" | "es">("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  const content = language === "en" ? englishContent : spanishContent;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Language Switcher */}
      <div className="fixed right-4 top-4 z-50">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border-pilates-100 text-pilates-950"
          onClick={toggleLanguage}
        >
          <Globe className="h-4 w-4" />
          {language === "en" ? "Español" : "English"}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative h-screen w-full overflow-hidden">
          <Image
            src="/pilatesgirl.jpg"
            alt={content.hero.imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="mb-6 text-4xl font-light tracking-wide sm:text-5xl md:text-6xl">
              {content.hero.title}
            </h1>
            <p className="mb-10 max-w-xl text-lg font-light">
              {content.hero.description}
            </p>
            <Button
              size="lg"
              className="bg-pilates-100 hover:bg-pilates-200 text-pilates-950 px-8 py-6 text-lg"
            >
              {content.hero.primaryButton}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-24">
        <div className="px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 text-3xl font-light tracking-wide">
              {content.about.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {content.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section - Simplified */}
      <section className="w-full bg-gray-50 py-24">
        <div className="px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-light tracking-wide">
              {content.benefits.title}
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3 max-w-4xl mx-auto">
            {content.benefits.items.slice(0, 3).map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="mb-3 text-xl font-medium">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section - Simplified */}
      <section className="w-full py-24">
        <div className="px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-light tracking-wide">
              {content.schedule.title}
            </h2>
          </div>
          <div className="mx-auto max-w-md">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      <Clock className="h-5 w-5 text-pilates-500" />
                      <div>
                        <h3 className="font-medium">
                          {content.schedule.morningClass.title}
                        </h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">8:30 AM</p>
                      <p className="text-sm text-gray-500">
                        {content.schedule.daily}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Clock className="h-5 w-5 text-pilates-500" />
                      <div>
                        <h3 className="font-medium">
                          {content.schedule.midMorningClass.title}
                        </h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">9:30 AM</p>
                      <p className="text-sm text-gray-500">
                        {content.schedule.daily}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-8 text-center">
              <Button className="bg-pilates-100 hover:bg-pilates-200 text-pilates-950">
                {content.schedule.bookButton}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section - Simplified */}
      <section className="w-full bg-gray-50 py-24">
        <div className="px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto gap-12">
            <div className="md:w-1/3">
              <div className="aspect-square overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt={content.instructor.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 text-left">
              <h2 className="mb-4 text-3xl font-light tracking-wide">
                {content.instructor.name}
              </h2>
              <p className="mb-4 text-pilates-500 font-medium">
                {content.instructor.role}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {content.instructor.bioShort}
              </p>
              <Button className="bg-pilates-100 hover:bg-pilates-200 text-pilates-950">
                {content.instructor.bookButton}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simplified */}
      <section className="w-full bg-pilates-100 py-24">
        <div className="px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-light tracking-wide text-pilates-950">
              {content.cta.title}
            </h2>
            <p className="mb-8 text-pilates-900 leading-relaxed">
              {content.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-pilates-950 hover:bg-gray-100 px-8"
              >
                {content.cta.primaryButton}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-pilates-950 hover:bg-white/20 px-8"
              >
                {content.cta.secondaryButton}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Simplified */}
      <footer className="w-full bg-white py-12 border-t border-gray-100">
        <div className="px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-medium">
                {content.footer.studioName}
              </h3>
              <p className="text-gray-500 text-sm">{content.footer.tagline}</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">
                {content.footer.contactTitle}
              </h3>
              <div className="space-y-2 text-gray-500 text-sm">
                <p className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" /> {content.footer.address}
                </p>
                <p>info@harmonypilates.com</p>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">
                {content.footer.hoursTitle}
              </h3>
              <div className="space-y-2 text-gray-500 text-sm">
                <p>{content.footer.weekdayHours}</p>
                <p>{content.footer.weekendHours}</p>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-100 pt-8 text-center text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} {content.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// English content - Simplified
const englishContent = {
  hero: {
    title: "Welcome to Talasofilia Pilates",
    description:
      "Experience our signature reformer Pilates class with expert instruction guiding you every step of the way.",
    primaryButton: "Book a Class",
    imageAlt: "Pilates studio with reformer equipment",
  },
  about: {
    title: "Talasofilia Reformer Pilates Studio",
    description:
      "Our mission is to help you achieve balance, strength, and wellness through the transformative practice of reformer Pilates. With personalized attention and expert guidance, we create a supportive environment for your fitness journey.",
  },
  benefits: {
    title: "The Benefits of Pilates",
    items: [
      {
        title: "Improved Core Strength",
        description:
          "Build a strong foundation for all movement with focused core exercises.",
      },
      {
        title: "Better Posture",
        description:
          "Align your spine and strengthen the muscles that support good posture.",
      },
      {
        title: "Increased Flexibility",
        description:
          "Improve your range of motion and overall flexibility with gentle stretching movements.",
      },
    ],
  },
  instructor: {
    name: "Sarah Johnson",
    role: "Certified Reformer Pilates Instructor",
    bioShort:
      "With over 10 years of experience, Sarah specializes in personalized training that combines classical Pilates principles with modern techniques for all fitness levels.",
    bookButton: "Book a Session",
  },
  schedule: {
    title: "Class Schedule",
    morningClass: {
      title: "Morning Class",
    },
    midMorningClass: {
      title: "Mid-Morning Class",
    },
    daily: "Daily",
    bookButton: "Book a Class",
  },
  cta: {
    title: "Ready to Start Your Pilates Journey?",
    description:
      "Book your first class today and experience the transformative power of reformer Pilates.",
    primaryButton: "Book a Class",
    secondaryButton: "Contact Us",
  },
  footer: {
    studioName: "Talasofilia Reformer Pilates",
    tagline:
      "Transforming bodies and minds through the power of reformer Pilates since 2010.",
    contactTitle: "Contact",
    address:
      "Bugambilias 3, Colonia Santa Maria, Puerto Escondido, Oaxaca 70934",

    copyright: "Talasofilia Pilates Studio. All rights reserved.",
  },
};

// Spanish content - Simplified
const spanishContent = {
  hero: {
    title: "Transforma Tu Cuerpo con Pilates Reformer",
    description:
      "Experimenta nuestra clase exclusiva de Pilates Reformer con instrucción experta guiándote en cada paso del camino.",
    primaryButton: "Reservar una Clase",
    imageAlt: "Estudio de Pilates con equipos reformer",
  },
  about: {
    title: "Estudio de Pilates Reformer Harmony",
    description:
      "Nuestra misión es ayudarte a lograr equilibrio, fuerza y bienestar a través de la práctica transformadora del Pilates Reformer. Con atención personalizada y guía experta, creamos un ambiente de apoyo para tu viaje de fitness.",
  },
  benefits: {
    title: "Los Beneficios del Pilates",
    items: [
      {
        title: "Mejora la Fuerza del Core",
        description:
          "Construye una base sólida para todo movimiento con ejercicios enfocados en el core.",
      },
      {
        title: "Mejor Postura",
        description:
          "Alinea tu columna y fortalece los músculos que apoyan una buena postura.",
      },
      {
        title: "Mayor Flexibilidad",
        description:
          "Mejora tu rango de movimiento y flexibilidad general con movimientos de estiramiento suave.",
      },
    ],
  },
  instructor: {
    name: "Sarah Johnson",
    role: "Instructora Certificada de Pilates Reformer",
    bioShort:
      "Con más de 10 años de experiencia, Sarah se especializa en entrenamiento personalizado que combina los principios clásicos del Pilates con técnicas modernas para todos los niveles de condición física.",
    bookButton: "Reservar una Sesión",
  },
  schedule: {
    title: "Horario de Clases",
    morningClass: {
      title: "Clase Matutina",
    },
    midMorningClass: {
      title: "Clase de Media Mañana",
    },
    daily: "Diario",
    bookButton: "Reservar una Clase",
  },
  cta: {
    title: "¿Listo para Comenzar tu Viaje de Pilates?",
    description:
      "Reserva tu primera clase hoy y experimenta el poder transformador del Pilates Reformer.",
    primaryButton: "Reservar una Clase",
    secondaryButton: "Contáctanos",
  },
  footer: {
    studioName: "Pilates Reformer Harmony",
    tagline:
      "Transformando cuerpos y mentes a través del poder del Pilates Reformer desde 2010.",
    contactTitle: "Contacto",
    address: "123 Calle Pilates, Ciudad Fitness",
    hoursTitle: "Horario",
    weekdayHours: "Lunes - Viernes: 6am - 9pm",
    weekendHours: "Sábado y Domingo: 8am - 6pm",
    copyright: "Harmony Pilates Studio. Todos los derechos reservados.",
  },
};
