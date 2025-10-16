import { createFileRoute } from "@tanstack/react-router";
import AboutUsOne from "@/components/pro/about/about-us-01";
import AboutUsTwo from "@/components/pro/about/about-us-02";
import AboutUsThree from "@/components/pro/about/about-us-03";
import AboutUsFour from "@/components/pro/about/about-us-04";
import AboutUsFive from "@/components/pro/about/about-us-05";

export const Route = createFileRoute("/demo")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container space-y-36 mx-auto">
      <AboutUsOne />
      <AboutUsTwo />
      <AboutUsThree />
      <AboutUsFour />
      <AboutUsFive />
    </div>
  );
}
