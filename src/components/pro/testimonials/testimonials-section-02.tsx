import { Text } from "@/components/ui/text"

const testimonials = [
    {
        name: "Ziv Reich",
        avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/ziv.jpg",
        position: "Software Developer",
        quote: "Stumbled across your UI kit and grabbed it right away - only later checked your Twitter and was genuinely impressed to see it's new, actively maintained, and getting constant improvements - love it my friend! amazing work! 🤘",
    },
    {
        name: "Manoj Ahirwar",
        avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/manoj.jpg",
        position: "Founder @ UseArticle",
        quote: "retroui looks amazing. going to use it soon"
    },
    {
        name: "Cameron Blackwood",
        avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/cameron.jpg",
        position: "Content Creator",
        quote: "Added a ton of these components to my personal site. Really nice to see a different approach to a UI Lib style wise. Nice work Arif!"
    },
    {
        name: "Zhengyang Hou",
        avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/Zhengyang.jpg",
        position: "Indie Hacker",
        quote: "Two of my favorite retro-style UI component libraries: 1. https://retroui.dev by @ariflogs, 2. https://neobrutalism.dev by @samuelbreznjak"
    },
    {
        name: "Taseen Tanvir",
        avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/tanvir.jpg",
        position: "Founder & Designer",
        quote: "one of my fav ui libraries for the web. great work on this Arif. Hope it goes above and beyond"
    },
    {
        name: "Cameron Blackwood",
        avatar: "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/cameron.jpg",
        position: "Content Creator",
        quote: "Finally rebuilt my personal website - big shoutout to @ariflogs for introducing me to his fun library Retro UI!",
    }
];


export default function TestimonialsSectionTwo() {
    return (
        <div className="max-w-6xl mx-auto max-lg:px-4">
            {/* Header Section */}
            <div className="mb-12">
                <div className="flex items-start justify-between mb-8">
                    <div className="flex items-start gap-4 font-medium">
                        <Text as="h2">Loved By <span className="bg-primary px-2 py-1 inline-block -skew-x-12 transform">Devs</span>, <span className="bg-primary px-2 py-1 inline-block -skew-x-12 transform">Designers</span> & <span className="bg-primary px-2 py-1 inline-block -skew-x-12 transform">Creators</span></Text>
                    </div>
                </div>
            </div>

            {/* Testimonials Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 border-2 rounded-md break-inside-avoid mb-6"
                    >
                        {/* Quote Icon */}
                        <img src="/logos/quote.svg" alt="quote" className="w-12 h-12 mb-2" />

                        {/* Testimonial Text */}
                        <Text className="mb-6 leading-relaxed">{testimonial.quote}</Text>

                        {/* Author Info */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 border-2 border-black rounded-full bg-gray-200 overflow-hidden">
                                <img
                                    src={testimonial.avatar || "/placeholder.svg"}
                                    alt={testimonial.name}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <div>
                                <h3 className="font-medium text-black">{testimonial.name}</h3>
                                <p className="text-sm text-muted-foreground font-medium">{testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}