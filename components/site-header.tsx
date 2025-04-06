'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useMobile } from '@/hooks/use-mobile'

export function SiteHeader() {
    const isMobile = useMobile()

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link
                    href="/"
                    className="font-serif text-xl md:text-2xl font-light"
                >
                    Talasofilia{' '}
                    <span className="font-medium italic">Pilates</span>
                </Link>

                {isMobile ? (
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="w-[300px] sm:w-[400px] bg-white"
                        >
                            <nav className="flex flex-col gap-6 mt-12">
                                <Link href="/" className="text-lg font-medium">
                                    Home
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-lg font-medium"
                                >
                                    About
                                </Link>
                                <Link
                                    href="/classes"
                                    className="text-lg font-medium"
                                >
                                    Classes
                                </Link>
                                <Link
                                    href="/gallery"
                                    className="text-lg font-medium"
                                >
                                    Gallery
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-lg font-medium"
                                >
                                    Contact
                                </Link>
                                <Button asChild className="mt-4 rounded-none">
                                    <Link href="/booking">Book a Class</Link>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                ) : (
                    <nav className="flex items-center gap-6">
                        <Link
                            href="/about"
                            className="text-sm font-medium hover:underline underline-offset-4"
                        >
                            About
                        </Link>
                        <Link
                            href="/classes"
                            className="text-sm font-medium hover:underline underline-offset-4"
                        >
                            Classes
                        </Link>
                        <Link
                            href="/gallery"
                            className="text-sm font-medium hover:underline underline-offset-4"
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-medium hover:underline underline-offset-4"
                        >
                            Contact
                        </Link>
                        <Button asChild className="rounded-none">
                            <Link href="/booking">Book a Class</Link>
                        </Button>
                    </nav>
                )}
            </div>
        </header>
    )
}
