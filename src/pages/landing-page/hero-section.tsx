import { Button } from "@/components/ui/button";
import { Sparkles, ArrowDownCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/join");
  };

  return (
    <>
      <main className="w-full bg-black text-white flex items-center justify-start h-[90vh] px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="flex flex-col h-full justify-center gap-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold">
            We Are <span className="text-blue-500">Devians</span>
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl text-neutral-300 font-light">
            A tech collective for curious minds, code warriors, and future
            builders. We learn. We build. We evolve — together.
          </p>

          <div className="flex gap-4">
            <Button
              onClick={handleJoinClick}
              className="w-max bg-blue-600 hover:bg-blue-700 text-base px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Join the Movement
            </Button>

            <Button className="w-max border-white text-base px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white hover:text-black transition">
              <ArrowDownCircle className="w-5 h-5" />
              Know More
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
