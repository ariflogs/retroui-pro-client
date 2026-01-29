import { createFileRoute } from "@tanstack/react-router";
import TeamOne from "../components/pro/team/team-01";
import TeamTwo from "../components/pro/team/team-02";
import TeamThree from "../components/pro/team/team-03";
import TeamFour from "../components/pro/team/team-04";
import TeamFive from "../components/pro/team/team-05";
import TeamSix from "../components/pro/team/team-06";
import TeamSeven from "../components/pro/team/team-07";

export const Route = createFileRoute("/demo")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container space-y-36 mx-auto">
      <TeamOne />
      <TeamTwo />
      <TeamThree />
      <TeamFour />
      <TeamFive />
      <TeamSix />
      <TeamSeven />
    </div>
  );
}
