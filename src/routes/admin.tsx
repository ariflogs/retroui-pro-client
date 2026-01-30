import { createFileRoute } from '@tanstack/react-router'
import { Text } from "@/components/ui";
import { Button } from "@/components/retroui/Button";
import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { Badge } from "@/components/retroui/Badge";

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="pro-theme">
    <section
      id="hero"
      className="relative overflow-clip"
    >
      <div className="container max-w-6xl mx-auto px-4 flex flex-col justify-center text-center items-center py-36">
        <div className="mb-12">
          <Badge variant="surface" className="rounded-full">
            Introducing RetroUI Admin Kit
          </Badge>
        </div>

        <Text as="h1" className="mb-4">
          <span className="text-outlined italic">Neobrutalism</span> Styled <br />Admin Dashboard
        </Text>
        <Text className="max-w-2xl text-md lg:text-lg mx-auto mb-8">
          Say goodbye to purple gradient AI slop. Get unique and modern React admin dashboard templates inspired by neo-brutalism.
        </Text>

        <div className="flex flex-wrap justify-center gap-4 mb-24">
          <Button asChild><Link to="/pricing">Access Now</Link></Button>
          <Button variant="secondary" asChild><a className="flex items-center" target="_blank" href="https://demo.brutadmin.com"><Play className="w-4 h-4 mr-2" /> Live Demo</a></Button>
        </div>

        <video src="https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/brutadmin/brutadmin-v1-demo.mp4" autoPlay loop muted className="w-full rounded-lg"></video>
      </div>

    </section>
  </div>
}
