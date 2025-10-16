import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollTop";
import TopNav from "@/components/TopNav";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/state/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <>
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <TopNav />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Footer />
        <Toaster />
        <TanStackRouterDevtools />
      </QueryClientProvider>
    </>
  ),
});
