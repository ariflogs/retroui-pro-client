import { createFileRoute } from "@tanstack/react-router";
import BlogSectionOne from "../components/pro/content/blog-list-01";
import BlogSectionTwo from "../components/pro/content/blog-list-02";
import BlogSectionThree from "../components/pro/content/blog-list-03";
import BlogSectionFour from "../components/pro/content/blog-list-04";
import BlogSectionFive from "../components/pro/content/blog-list-05";
import BlogSectionSix from "../components/pro/content/blog-list-06";
import BlogSectionSeven from "../components/pro/content/blog-list-07";
import BlogSectionEight from "../components/pro/content/blog-list-08";

export const Route = createFileRoute("/demo")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container space-y-36 mx-auto">
      <BlogSectionOne />
      <BlogSectionTwo />
      <BlogSectionThree />
      <BlogSectionFour />
      <BlogSectionFive />
      <BlogSectionSix />
      <BlogSectionSeven />
      <BlogSectionEight />
    </div>
  );
}
