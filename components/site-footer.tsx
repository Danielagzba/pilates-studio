import Link from "next/link";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-stone-900 text-white py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link
              href="/"
              className="font-serif text-xl md:text-2xl font-light inline-block mb-4"
            >
              Talasofilia <span className="font-medium italic">Pilates</span>
            </Link>
            <p className="text-sm text-stone-300 max-w-xs">
              A modern Pilates studio in Puerto Escondido dedicated to mindful
              movement and personal transformation.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="https://instagram.com"
                className="text-white hover:text-stone-300"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com"
                className="text-white hover:text-stone-300"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="mailto:info@estudiopilates.mx"
                className="text-white hover:text-stone-300"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/about"
                className="text-sm text-stone-300 hover:text-white"
              >
                About Us
              </Link>
              <Link
                href="/classes"
                className="text-sm text-stone-300 hover:text-white"
              >
                Classes
              </Link>
              <Link
                href="/gallery"
                className="text-sm text-stone-300 hover:text-white"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-sm text-stone-300 hover:text-white"
              >
                Contact
              </Link>
              <Link
                href="/booking"
                className="text-sm text-stone-300 hover:text-white"
              >
                Book a Class
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-stone-400" />
                <p className="text-sm text-stone-300">
                  Bugambilias 3, Colonia Santa Maria, Puerto Escondido
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-stone-400" />
                <p className="text-sm text-stone-300">+52 55 1234 5678</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-stone-400" />
                <p className="text-sm text-stone-300">info@estudiopilates.mx</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} Estudio Pilates. All rights
            reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-xs text-stone-400 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-stone-400 hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
