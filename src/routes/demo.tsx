import { createFileRoute } from "@tanstack/react-router";
import SignInOne from "../components/pro/auth/signin-01";
import SignInTwo from "../components/pro/auth/signin-02";
import SignInThree from "../components/pro/auth/signin-03";
import SignInFour from "../components/pro/auth/signin-04";
import SignInFive from "../components/pro/auth/signin-05";
import SignInSix from "../components/pro/auth/signin-06";

export const Route = createFileRoute("/demo")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container space-y-36 mx-auto">
      <SignInOne />
      <SignInTwo />
      <SignInThree />
      <SignInFour />
      <SignInFive />
      <SignInSix />
    </div>
  );
}
