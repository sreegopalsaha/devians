import { Button } from "@/components/ui/button";
import { Sparkles, ArrowDownCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/join");
  };

  const handleScroll = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="relative w-full h-[90vh] bg-black overflow-hidden text-white flex items-center px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="absolute inset-1 bg-[url('/hero-pattern.png')] bg-no-repeat bg-cover bg-center blur-md z-0" />

        <div className="relative z-10 flex flex-col h-full justify-center gap-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-mono font-semibold leading-tight tracking-tight">
            We Are <span className="text-blue-500">Devians</span>
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl text-neutral-300 font-light">
            A tech collective for curious minds, code warriors, and future
            builders. We learn. We build. We evolve — together.
          </p>

          <div className="flex gap-4">
            <Button
              onClick={handleJoinClick}
              className="w-max bg-blue-600 hover:bg-blue-700 text-base px-6 py-3 rounded-lg flex items-center gap-2 font-mono"
            >
              <Sparkles className="w-5 h-5" />
              Join the Movement
            </Button>

            <Button
              onClick={handleScroll}
              className="w-max border-white text-base px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white hover:text-black transition font-mono"
            >
              <ArrowDownCircle className="w-5 h-5" />
              Know More
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
