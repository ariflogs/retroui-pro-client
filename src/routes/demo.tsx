import { createFileRoute } from "@tanstack/react-router";
import StatsOne from "../components/pro/stats/stats-01";

export const Route = createFileRoute("/demo")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container space-y-36 mx-auto">
      <StatsOne />
    </div>
  );
}
