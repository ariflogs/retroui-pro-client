import { Text } from "@/components/retroui/Text";
import { Badge } from "@/components/retroui/Badge";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl: string;
  slug: string;
  author: {
    name: string;
    avatar: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    description: "I'm always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn't work...",
    date: "August 20, 2022",
    category: "Technology",
    imageUrl:
      "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/illuminati.png",
    slug: "technology-workplace-impact",
    author: {
      name: "Jason Francisco",
      avatar:
        "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_a.png",
    },
  },
  {
    id: 2,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    description: "I'm always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn't work...",
    date: "August 20, 2022",
    category: "Technology",
    imageUrl:
      "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/illuminati.png",
    slug: "technology-workplace-impact-2",
    author: {
      name: "Tracey Wilson",
      avatar:
        "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_b.png",
    },
  },
  {
    id: 3,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    description: "I'm always trying to think of new and interesting business ideas. I generally try to come up with ideas by thinking of what I would want to do or see in the world. Then, I try to find reasons why it wouldn't work...",
    date: "August 20, 2022",
    category: "Technology",
    imageUrl:
      "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/illustrations/illuminati.png",
    slug: "technology-workplace-impact-3",
    author: {
      name: "Tracey Wilson",
      avatar:
        "https://pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev/people/simple_person_c.png",
    },
  },
];

export default function BlogSectionFour() {
  return (
    <section className="py-24">
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[600px]">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <VerticalArticle post={blogPosts[1]} />
            <VerticalArticle post={blogPosts[2]} />
          </div>

          <div className="lg:col-span-1">
            <HorizontalArticle post={blogPosts[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}


function HorizontalArticle({
  post,
}: {
  post: BlogPost;
}) {
  return (
    <article className="p-6 bg-[#F9F5F2] border-2 border-black group transition-all">
      <div className="flex flex-col justify-between mb-6">
        <div>
          <Text className="text-[#599D77] font-medium text-sm mb-4">Mar 1</Text>
          <Text as="h3" className="mb-4 font-sans font-semibold">
            {post.title}
          </Text>
          <Text className="text-muted-foreground text-sm mb-6 leading-relaxed">
            {post.description}
          </Text>
        </div>
        <div className="flex items-center space-x-2">
          <Badge size="sm" className="bg-[#FFE75A] border px-4">
            Tools
          </Badge>
          <div className="flex items-center">
            <span className="font-medium text-sm">By Mark Tuchel</span>
            <span className="text-[#599D77] text-2xl mx-2">•</span>
            <span className="text-[#599D77] text-sm font-medium">7 min read</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="object-cover w-full h-full"
        />
      </div>
    </article>)
}

function VerticalArticle({
  post,
}: {
  post: BlogPost;
}) {
  return (
    <article className="bg-[#F9F5F2] border-2 group transition-all flex-1">
      <div className="flex flex-col md:flex-row p-6 gap-6">
        <div className="flex flex-col justify-between">
          <div>
            <div className="text-[#599D77] font-medium text-sm mb-3">{post.date}</div>
            <Text as="h3" className="mb-3 font-sans">
              {post.title}
            </Text>
            <Text className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {post.description}
            </Text>
          </div>
          <div className="flex items-center space-x-2">
            <Badge size="sm" className="bg-[#FFE75A] border px-4">
              Tools
            </Badge>
            <div className="flex items-center">
              <span className="font-medium text-sm">By Mark Tuchel</span>
              <span className="text-[#599D77] text-2xl mx-2">•</span>
              <span className="text-[#599D77] text-sm font-medium">7 min read</span>
            </div>
          </div>
        </div>

        <img
          src={blogPosts[0].imageUrl}
          alt={blogPosts[0].title}
          className="object-cover w-full h-auto md:w-60 md:h-64"
        />
      </div>
    </article>
  )
}