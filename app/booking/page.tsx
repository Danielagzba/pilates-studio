import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Book a Class | Estudio Pilates",
  description: "Book your Pilates class at our studio in Mexico City.",
}

export default function BookingPage() {
  return (
    <div className="pt-16">
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-serif text-3xl md:text-4xl font-light mb-4">
                Book a <span className="font-medium italic">Class</span>
              </h1>
              <p className="text-muted-foreground">
                Reserve your spot in one of our classes or request information about private sessions.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Class Booking</CardTitle>
                <CardDescription>
                  Fill out the form below to book your class. We'll confirm your reservation via email.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="class-type">Class Type</Label>
                      <Select>
                        <SelectTrigger id="class-type">
                          <SelectValue placeholder="Select class type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning-flow">Morning Flow (7:30 AM)</SelectItem>
                          <SelectItem value="evening-restore">Evening Restore (6:00 PM)</SelectItem>
                          <SelectItem value="private">Private Session</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input id="date" type="date" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select>
                      <SelectTrigger id="experience">
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      placeholder="Please let us know if you have any injuries, health concerns, or special requirements"
                      rows={4}
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-none">Book Class</Button>
              </CardFooter>
            </Card>

            <div className="mt-12 text-center">
              <h2 className="font-serif text-xl md:text-2xl font-light mb-4">Need More Information?</h2>
              <p className="text-muted-foreground mb-6">
                If you have questions about our classes or would like to discuss private sessions, please don't hesitate
                to contact us.
              </p>
              <Button variant="outline" className="rounded-none">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

