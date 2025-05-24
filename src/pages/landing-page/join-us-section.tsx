import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function JoinUsSection() {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/join");
  };

  return (
    <section className="w-full bg-neutral-950 text-white py-20 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-neutral-800">
      <div className="w-full flex flex-col items-start gap-16">
        <div className="w-full max-w-4xl flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Become a community member
          </h2>

          <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
            From North Bengal to South Bengal — Devians are everywhere. Get
            access to real projects, mentorship, and community-led collabs. No
            fluff, just action. Join the movement that actually ships.
          </p>

          <Button
            onClick={handleJoinClick}
            className="bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full px-6 py-2 text-sm w-fit mt-4"
          >
            Join Devians Now
          </Button>
        </div>
      </div>
    </section>
  );
}
