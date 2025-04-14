import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Pricing | Talasofilia Pilates",
  description:
    "Explore our class packages and pricing options at Talasofilia Pilates in Puerto Escondido.",
};

export default function PricingPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/P4130010.png"
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
              Our <span className="font-medium italic">Pricing</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-xl mx-auto">
              Transparent pricing options designed to fit your lifestyle and
              wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Single Classes */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
              Single <span className="font-medium italic">Classes</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join us for individual classes with no long-term commitment.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto">
            {singleClasses.map((item, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl font-light">
                    {item.name}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold">{item.price}</span>
                    <span className="text-muted-foreground ml-1">MXN</span>
                  </div>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full rounded-none">
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Class Packages */}
      <section className="py-20 md:py-32 bg-stone-100">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
              Class <span className="font-medium italic">Packages</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Save with our multi-class packages.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {classPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`border-0 shadow-md ${
                  pkg.popular ? "ring-2 ring-stone-900" : ""
                }`}
              >
                <CardHeader>
                  <CardTitle className="font-serif text-2xl font-light">
                    {pkg.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground ml-1">MXN</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {pkg.pricePerClass} MXN per class
                  </p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-500 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className={`w-full rounded-none ${
                      pkg.popular ? "bg-stone-900 hover:bg-stone-800" : ""
                    }`}
                  >
                    <Link href="/contact">Purchase Package</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Private Sessions */}

      {/* FAQ */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
              Pricing <span className="font-medium italic">FAQ</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions about our pricing, packages, and policies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {pricingFaqs.map((faq, index) => (
              <div key={index} className="border-b border-stone-200 pb-6">
                <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-stone-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
              Ready to <span className="font-medium italic">Begin?</span>
            </h2>
            <p className="text-lg opacity-80 mb-8">
              Take the first step toward a stronger, more balanced you. Join us
              for a class or contact us to learn more about our pricing options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-none px-8">
                <Link href="/booking">Book a Class</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none px-8 bg-transparent text-white border-white hover:bg-white/10"
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

// Sample data
const singleClasses = [
  {
    name: "Drop-In Class",
    description:
      "Single class attendance for either Morning Flow or Evening Restore",
    price: "350",
    features: [
      "Access to any scheduled class",
      "No commitment required",
      "Suitable for first-time visitors",
      "Equipment provided",
    ],
  },
];

const classPackages = [
  {
    name: "4-Class Pack",
    price: "1,000",
    pricePerClass: "250",
    popular: false,
    features: [
      "Access to any scheduled class",
      "Flexible scheduling",
      "Equipment provided",
    ],
  },
  {
    name: "6-Class Pack",
    price: "1,500",
    pricePerClass: "250",
    popular: false,
    features: [
      "Access to any scheduled class",
      "Flexible scheduling",
      "Equipment provided",
    ],
  },
  {
    name: "8-Class Pack",
    price: "2,000",
    pricePerClass: "250",
    popular: false,
    features: [
      "Access to any scheduled class",
      "Flexible scheduling",
      "Equipment provided",
    ],
  },
  {
    name: "12-Class Pack",

    price: "3,000",
    pricePerClass: "250",
    popular: false,
    features: [
      "Access to any scheduled class",
      "Flexible scheduling",
      "Equipment provided",
    ],
  },
];

const privateSessions = [
  {
    name: "Single Private Session",
    description: "One-on-one instruction with Maria",
    price: "800",
    features: [
      "60-minute personalized session",
      "Customized program based on your needs",
      "Detailed form correction",
      "Equipment provided",
    ],
  },
  {
    name: "Private Session Package",
    description: "5 private sessions with Maria",
    price: "3,500",
    features: [
      "5 x 60-minute personalized sessions",
      "Progressive program development",
      "Detailed form correction",
      "Equipment provided",
      "Flexible scheduling",
    ],
  },
];

const pricingFaqs = [
  {
    question: "Do class packages expire?",
    answer:
      "Yes, all class packages (4, 6, 8, and 12 classes) are valid for 3 months from the date of purchase.",
  },
  {
    question: "Can I share my class package with a friend?",
    answer:
      "Class packages are non-transferable and can only be used by the purchaser.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Classes must be cancelled at least 24 hours in advance to avoid being charged.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "No, there is no registration fee to join our studio. You only pay for the classes or packages you purchase.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Class packages are non-refundable. In exceptional circumstances, please contact us to discuss your situation.",
  },
  // {
  //   question: "How do I pay for classes?",
  //   answer:
  //     "We accept cash, credit/debit cards, and bank transfers. Payment is required at the time of booking or before the class begins.",
  // },
];
