import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main
      className="
      flex 
      h-full 
      flex-col 
      items-center 
      justify-center 
      bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))]
    from-sky-200 
    to-blue-800
    "
    >
      <div className="space-y-4 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🔥Vegeta🔥
        </h1>
        <p className="text-white text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
