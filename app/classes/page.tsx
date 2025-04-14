import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Classes | Talasofilia Pilates",
  description:
    "Explore our Pilates classes for all levels, from beginners to advanced practitioners.",
};

export default function ClassesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pilates.jpg"
            alt="Pilates class"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              Our <span className="font-medium italic">Classes</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-xl mx-auto">
              Discover our specialized Pilates classes designed to transform
              your body and mind.
            </p>
          </div>
        </div>
      </section>

      {/* Classes List */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 max-w-4xl mx-auto">
            {classes.map((cls) => (
              <div
                key={cls.id}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={cls.image || "/placeholder.svg"}
                    alt={cls.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-light mb-4">
                    {cls.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {cls.description}
                  </p>
                  <div className="space-y-4 mb-8">
                    <div>
                      <h3 className="font-medium mb-2">Time</h3>
                      <p className="text-sm text-muted-foreground">
                        {cls.time}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Duration</h3>
                      <p className="text-sm text-muted-foreground">
                        {cls.duration}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Suitable For</h3>
                      <p className="text-sm text-muted-foreground">
                        {cls.suitableFor}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">What to Bring</h3>
                      <p className="text-sm text-muted-foreground">
                        {cls.whatToBring}
                      </p>
                    </div>
                  </div>
                  <Button asChild className="rounded-none">
                    <Link href="/booking" className="group">
                      Book This Class
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 md:py-32 bg-stone-100">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
              Weekly <span className="font-medium italic">Schedule</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find a class that fits your schedule. All classes must be booked
              in advance.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse max-w-3xl mx-auto">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left font-medium">Day</th>
                  <th className="py-4 px-4 text-left font-medium">
                    Morning (8:30 AM)
                  </th>
                  <th className="py-4 px-4 text-left font-medium">
                    Morning (9:30 AM)
                  </th>
                  <th className="py-4 px-4 text-left font-medium">
                    Evening (5:00 PM)
                  </th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((day, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-4 font-medium">{day.name}</td>
                    <td className="py-4 px-4">{day.morning830 ? "✓" : "-"}</td>
                    <td className="py-4 px-4">{day.morning930 ? "✓" : "-"}</td>
                    <td className="py-4 px-4">{day.evening ? "✓" : "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="rounded-none px-8">
              <Link href="/booking">Book a Class</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Private Sessions */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
                Private <span className="font-medium italic">Sessions</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Our private sessions offer personalized attention and customized
                programs tailored to your specific needs and goals. Whether
                you're recovering from an injury, preparing for a specific
                event, or simply prefer one-on-one instruction, María Laura will
                guide you through a transformative Pilates experience.
              </p>
              <p className="text-muted-foreground mb-8">
                Private sessions are available by appointment and can be
                scheduled at your convenience. Contact us to discuss your needs
                and book your first session.
              </p>
              <Button asChild className="rounded-none">
                <Link href="/contact" className="group">
                  Inquire About Private Sessions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/private.jpg"
                alt="Private Pilates session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-stone-100">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
              Frequently Asked{" "}
              <span className="font-medium italic">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our classes and studio
              policies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-stone-200 pb-6">
                <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample data
const classes = [
  {
    id: "morning-flow",
    title: "Morning Flow",
    description:
      "Start your day with energizing Pilates exercises that awaken your body and mind. This class focuses on building core strength, improving posture, and enhancing flexibility through a dynamic sequence of movements that will leave you feeling invigorated and centered.",
    image: "/P4150100.png",
    time: "8:30 AM & 9:30 AM (Monday-Sunday)",
    duration: "60 minutes",
    suitableFor: "All levels",
    whatToBring: "Comfortable clothing, water bottle, socks (optional)",
  },
  {
    id: "evening-restore",
    title: "Evening Restore",
    description:
      "Unwind and release tension with restorative movements that promote relaxation and recovery. This gentle yet effective class combines traditional Pilates principles with mindful breathing techniques to help you decompress from your day and prepare your body and mind for restful sleep.",
    image: "/P4150037.png",
    time: "5:00 PM (Monday-Friday)",
    duration: "60 minutes",
    suitableFor: "All levels",
    whatToBring: "Comfortable clothing, water bottle, socks (optional)",
  },
];

const schedule = [
  { name: "Monday", morning830: true, morning930: true, evening: true },
  { name: "Tuesday", morning830: true, morning930: true, evening: true },
  { name: "Wednesday", morning830: true, morning930: true, evening: true },
  { name: "Thursday", morning830: true, morning930: true, evening: true },
  { name: "Friday", morning830: true, morning930: true, evening: true },
  { name: "Saturday", morning830: true, morning930: true, evening: false },
  { name: "Sunday", morning830: true, morning930: true, evening: false },
];

const faqs = [
  {
    question: "Do I need prior experience to join a class?",
    answer:
      "No prior experience is necessary. Our instructor will guide you through each movement and provide modifications as needed to ensure you get the most out of your practice regardless of your experience level.",
  },
  {
    question: "What should I wear to class?",
    answer:
      "Comfortable, form-fitting clothing that allows you to move freely is recommended. Socks are optional but many clients prefer them for hygiene purposes.",
  },
  {
    question: "How early should I arrive for class?",
    answer:
      "Please arrive 10-15 minutes before your first class. For subsequent classes, we recommend arriving 5 minutes early.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Classes must be cancelled at least 24 hours in advance to avoid being charged.",
  },
  {
    question: "Do you offer package discounts?",
    answer:
      "Yes, we offer class packages of 4, 6, 8, and 12 classes at discounted rates.",
  },
];
