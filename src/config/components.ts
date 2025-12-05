import { type JSX, lazy } from "react";

export const componentRegistry: {
  [key: string]: {
    dependencies?: string[];
    preview: React.LazyExoticComponent<() => JSX.Element>;
  };
} = {
  "about-us-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/about/about-us-01")),
  },
  "about-us-02": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/about/about-us-02")),
  },
  "about-us-03": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/about/about-us-03")),
  },
  "about-us-04": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/about/about-us-04")),
  },
  "about-us-05": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/about/about-us-05")),
  },
  "ai-chat-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/ai/ai-chat-01")),
  },
  "blog-list-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/content/blog-list-01")),
  },
  "blog-list-02": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/content/blog-list-02")),
  },
  "blog-list-03": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/content/blog-list-03")),
  },
  "blog-list-04": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/content/blog-list-04")),
  },
  "blog-list-05": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/content/blog-list-05")),
  },
  "blog-list-06": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/content/blog-list-06")),
  },
  "blog-list-07": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/content/blog-list-07")),
  },
  "blog-list-08": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/content/blog-list-08")),
  },
  "bento-grid-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/bento-grid/bento-grid-01")),
  },
  "bento-grid-02": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/bento-grid/bento-grid-02")),
  },
  "business-onboarding-survey-01": {
    dependencies: ["lucide-react"],
    preview: lazy(
      () => import("@/components/pro/onboarding/business-onboarding-survey-01")
    ),
  },
  "business-onboarding-survey-02": {
    dependencies: ["lucide-react"],
    preview: lazy(
      () => import("@/components/pro/onboarding/business-onboarding-survey-02")
    ),
  },
  "company-career-page-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/career/career-page-01")),
  },
  "company-career-page-02": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/career/career-page-02")),
  },
  "contact-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/contact/contact-01")),
  },
  "contact-02": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/contact/contact-02")),
  },
  "contact-03": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/contact/contact-03")),
  },
  "contact-04": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/contact/contact-04")),
  },
  "contact-05": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/contact/contact-05")),
  },
  "contact-06": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/contact/contact-06")),
  },
  "contact-07": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/contact/contact-07")),
  },
  "course-card-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/cards/course-card-01")),
  },
  "course-card-02": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/cards/course-card-02")),
  },
  "contact-form-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/forms/contact-form-01")),
  },
  "cta-newsletter-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/cta/cta-newsletter-01")),
  },
  "cta-download-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/cta/cta-download-01")),
  },
  "cta-signup-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/cta/cta-signup-01")),
  },
  "stats-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/stats/stats-01")),
  },
  "stats-02": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/stats/stats-02")),
  },
  "stats-03": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/stats/stats-03")),
  },
  "stats-04": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/stats/stats-04")),
  },
  "stats-05": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/stats/stats-05")),
  },
  "stats-06": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/stats/stats-06")),
  },
  "stats-07": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/stats/stats-07")),
  },
  "stats-08": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/stats/stats-08")),
  },
  "stats-09": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/stats/stats-09")),
  },
  "faq-section-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/faq/faq-section-01")),
  },
  "faq-section-02": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/faq/faq-section-02")),
  },
  "faq-section-03": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/faq/faq-section-03")),
  },
  "footer-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/footer/footer-01")),
  },
  "footer-02": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/footer/footer-02")),
  },
  "footer-03": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/footer/footer-03")),
  },
  "footer-04": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/footer/footer-04")),
  },
  "footer-05": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/footer/footer-05")),
  },
  "footer-06": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/footer/footer-06")),
  },
  "hero-section-01": {
    dependencies: ["lucide-react"],
    preview: lazy(
      () => import("@/components/pro/hero-sections/hero-section-01")
    ),
  },
  "hero-section-02": {
    dependencies: ["lucide-react"],
    // filePath: "src/blocks/payment/status/payment-success.tsx",
    preview: lazy(
      () => import("@/components/pro/hero-sections/hero-section-02")
    ),
  },
  "hero-section-03": {
    dependencies: ["lucide-react"],
    preview: lazy(
      () => import("@/components/pro/hero-sections/hero-section-03")
    ),
  },
  "hero-section-04": {
    dependencies: ["lucide-react"],
    preview: lazy(
      () => import("@/components/pro/hero-sections/hero-section-04")
    ),
  },
  "hero-section-05": {
    dependencies: ["lucide-react"],
    preview: lazy(
      () => import("@/components/pro/hero-sections/hero-section-05")
    ),
  },
  "hero-section-06": {
    dependencies: ["lucide-react"],
    preview: lazy(
      () => import("@/components/pro/hero-sections/hero-section-06")
    ),
  },
  "hero-section-07": {
    dependencies: ["lucide-react"],
    preview: lazy(
      () => import("@/components/pro/hero-sections/hero-section-07")
    ),
  },
  "hero-section-08": {
    dependencies: ["lucide-react"],
    preview: lazy(
      () => import("@/components/pro/hero-sections/hero-section-08")
    ),
  },
  "job-description-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/career/job-description-01")),
  },
  "newsletter-form-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/forms/newsletter-form-01")),
  },
  "newsletter-form-02": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/forms/newsletter-form-02")),
  },
  "onboarding-steps-01": {
    dependencies: ["lucide-react"],
    preview: lazy(
      () => import("@/components/pro/onboarding/onboarding-steps-01")
    ),
  },
  "onboarding-steps-02": {
    dependencies: ["lucide-react"],
    preview: lazy(
      () => import("@/components/pro/onboarding/onboarding-steps-02")
    ),
  },
  "onboarding-integrations-01": {
    dependencies: ["lucide-react"],
    preview: lazy(
      () => import("@/components/pro/onboarding/onboarding-integrations-01")
    ),
  },
  "pricing-table-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/pricing/pricing-table-01")),
  },
  "pricing-table-02": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/pricing/pricing-table-02")),
  },
  "pricing-table-03": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/pricing/pricing-table-03")),
  },
  "pricing-table-04": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/pricing/pricing-table-04")),
  },
  "pricing-table-05": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/pricing/pricing-table-05")),
  },
  "pricing-table-06": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/pricing/pricing-table-06")),
  },
  "pricing-table-07": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/pricing/pricing-table-07")),
  },
  "pricing-table-08": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/pricing/pricing-table-08")),
  },
  "pricing-table-09": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/pricing/pricing-table-09")),
  },
  "pricing-table-10": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/pricing/pricing-table-10")),
  },
  "pricing-table-11": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/pricing/pricing-table-11")),
  },
  "profile-card-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/cards/profile-card-01")),
  },
  "profile-card-02": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/cards/profile-card-02")),
  },
  "product-card-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/cards/product-card-01")),
  },
  "retroui-hero-section": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/retroui/hero-section")),
  },
  "retroui-cta": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/retroui/cta")),
  },
  "retroui-testimonials": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/retroui/testimonials")),
  },
  "neo-brutalism-examples": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/retroui/neo-brutalism-examples")),
  },
  "retroui-how-it-works": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/retroui/how-it-works")),
  },
  "sidebar-01": {
    dependencies: ["lucide-react"],
    preview: lazy(() => import("@/components/pro/sidebar/sidebar-01")),
  },
  "signup-01": {
    dependencies: [],
    preview: lazy(() => import("@/components/pro/auth/signup-01")),
  },
  "signin-01": {
    dependencies: [],
    preview: lazy(() => import("@/components/pro/auth/signin-01")),
  },
  "sign-in-form-02": {
    dependencies: [],
    preview: lazy(() => import("@/components/pro/auth/signin-02")),
  },
  "sign-in-form-03": {
    dependencies: [],
    preview: lazy(() => import("@/components/pro/auth/signin-03")),
  },
  "sign-in-form-04": {
    dependencies: [],
    preview: lazy(() => import("@/components/pro/auth/signin-04")),
  },
  "sign-in-form-05": {
    dependencies: [],
    preview: lazy(() => import("@/components/pro/auth/signin-05")),
  },
  "sign-in-form-06": {
    dependencies: [],
    preview: lazy(() => import("@/components/pro/auth/signin-06")),
  },

  "top-nav-01": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/navbar/topnav-01")),
  },
  "top-nav-02": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/navbar/topnav-02")),
  },
  "top-nav-03": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/navbar/topnav-03")),
  },
  "top-nav-04": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/navbar/topnav-04")),
  },
  "top-nav-05": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/navbar/topnav-05")),
  },
  "top-nav-06": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/navbar/topnav-06")),
  },
  "top-nav-07": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/navbar/topnav-07")),
  },
  "top-nav-08": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/navbar/topnav-08")),
  },
  "testimonials-section-01": {
    dependencies: [""],
    preview: lazy(
      () => import("@/components/pro/testimonials/testimonials-section-01")
    ),
  },
  "team-invitation-01": {
    dependencies: [""],
    preview: lazy(
      () => import("@/components/pro/onboarding/team-invitation-01")
    ),
  },
  
  "features-section-01": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/features/feature-section-01")),
  },
  "features-section-02": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/features/feature-section-02")),
  },
  "features-section-03": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/features/feature-section-03")),
  },
  "features-section-04": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/features/feature-section-04")),
  },
  "features-section-05": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/features/feature-section-05")),
  },
  "features-section-06": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/features/feature-section-06")),
  },
  "features-section-07": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/features/feature-section-07")),
  },
  "features-section-08": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/features/feature-section-08")),
  },
  "features-section-09": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/features/feature-section-09")),
  },
  "features-section-10": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/features/feature-section-10")),
  },
  "features-section-11": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/features/feature-section-11")),
  },
  "profile-page-01": {
    dependencies: [""],
    preview: lazy(() => import("@/components/pro/profile/profile-page-01")),
  },
  "user-profile-onboarding-01": {
    dependencies: [""],
    preview: lazy(
      () => import("@/components/pro/onboarding/user-profile-onboarding-01")
    ),
  },
};
