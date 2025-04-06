import Image from "next/image"

export const metadata = {
  title: "Gallery | Estudio Pilates",
  description: "Explore our studio space and classes through our photo gallery.",
}

export default function GalleryPage() {
  return (
    <div className="pt-16">
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-3xl md:text-4xl font-light mb-4">
              Our <span className="font-medium italic">Gallery</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a visual tour of our studio space, equipment, and classes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 7 === 0 || index % 7 === 3 ? "col-span-2 row-span-2" : ""
                } h-[200px] md:h-[250px]`}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const galleryImages = [
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Studio entrance",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Reformer equipment",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Mat class area",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Group class in session",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Private session",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Studio reception",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Pilates props",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Instructor demonstration",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Studio interior",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Reformer class",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Stretching area",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Workshop event",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Prenatal class",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Advanced class",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Studio equipment",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Relaxation area",
  },
]

