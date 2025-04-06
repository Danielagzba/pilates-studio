import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata = {
    title: 'Contact Us | Estudio Pilates',
    description:
        'Get in touch with Estudio Pilates in Mexico City. Contact information and inquiry form.',
}

export default function ContactPage() {
    return (
        <div className="pt-16">
            <section className="py-20 md:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div>
                            <h1 className="font-serif text-3xl md:text-4xl font-light mb-6">
                                Contact{' '}
                                <span className="font-medium italic">Us</span>
                            </h1>
                            <p className="text-muted-foreground mb-8">
                                We'd love to hear from you. Whether you have a
                                question about our classes, want to book a
                                private session, or are interested in learning
                                more about Pilates, please don't hesitate to
                                reach out.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                                    <div>
                                        <h3 className="font-medium mb-1">
                                            Visit Us
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Calle Durango 216
                                            <br />
                                            Roma Norte, 06700
                                            <br />
                                            Ciudad de México, CDMX
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                                    <div>
                                        <h3 className="font-medium mb-1">
                                            Call Us
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            +52 55 1234 5678
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                                    <div>
                                        <h3 className="font-medium mb-1">
                                            Email Us
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            info@estudiopilates.mx
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Clock className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                                    <div>
                                        <h3 className="font-medium mb-1">
                                            Studio Hours
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Monday - Friday: 7:00 AM - 8:00 PM
                                            <br />
                                            Saturday: 8:00 AM - 1:00 PM
                                            <br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h3 className="font-serif text-xl font-medium mb-4">
                                    Follow Us
                                </h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://instagram.com"
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5"
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
                                            <line
                                                x1="17.5"
                                                x2="17.51"
                                                y1="6.5"
                                                y2="6.5"
                                            ></line>
                                        </svg>
                                        <span className="sr-only">
                                            Instagram
                                        </span>
                                    </a>
                                    <a
                                        href="https://facebook.com"
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                        <span className="sr-only">
                                            Facebook
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-stone-100 p-8">
                                <h2 className="font-serif text-2xl font-light mb-6">
                                    Send Us a{' '}
                                    <span className="font-medium italic">
                                        Message
                                    </span>
                                </h2>
                                <form className="space-y-6">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="first-name">
                                                First Name
                                            </Label>
                                            <Input
                                                id="first-name"
                                                placeholder="Enter your first name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="last-name">
                                                Last Name
                                            </Label>
                                            <Input
                                                id="last-name"
                                                placeholder="Enter your last name"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input
                                            id="subject"
                                            placeholder="Enter subject"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Enter your message"
                                            rows={5}
                                        />
                                    </div>

                                    <Button className="w-full rounded-none">
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-[400px] relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4647.7149762028175!2d-97.05504632410174!3d15.850650584797629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85b8f82b759736af%3A0x958d4845d01de586!2sBugambilias%203%2C%20Sta%20Maria%2C%2070934%20Puerto%20Escondido%2C%20Oax.!5e1!3m2!1sen!2smx!4v1743951305466!5m2!1sen!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Studio Location"
                ></iframe>
            </section>
        </div>
    )
}
