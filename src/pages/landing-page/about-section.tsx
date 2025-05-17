import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const stats = [
    { value: "100+", label: "Active Members" },
    { value: "5+", label: "Colleges in West Bengal" },
    { value: "10+", label: "Projects Built" },
    { value: "5+", label: "Community Events" },
    { value: "5+", label: "Mentors & Core Team" },
    { value: "2025", label: "Founded In" },
  ];
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/join");
  };

  return (
    <section id="about" className="w-full flex flex-col md:flex-row">
      {/* left card */}
      <div className="rounded-none md:w-1/2 w-full text-white bg-gradient-to-r from-purple-800 to-purple-600 p-10 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-between gap-6">
        <h2 className="text-3xl sm:text-4xl font-normal font-mono">
          What is Devians?
        </h2>
        <p className="text-white leading-relaxed text-base font-poppins font-mono">
          Devians is a student-driven tech community built for collaboration,
          learning, and innovation. From beginners exploring their first lines
          of code to hackathon winners shipping real projects — Devians is your
          squad to grow with.
        </p>
        <Button
          onClick={handleJoinClick}
          variant="outline"
          className="text-white border-white bg-transparent hover:bg-white/10 py-2 px-6 rounded-md font-poppins font-normal"
        >
          Join the Movement
        </Button>
      </div>

      {/* right card */}
      <div className="md:w-1/2 w-full flex flex-wrap p-6 sm:p-10 lg:p-14 xl:p-20 bg-gray-900 text-white">
        {stats.map((stat, index) => (
          <div key={index} className="w-1/2 lg:w-1/3 p-3 sm:p-4">
            <p className="text-4xl sm:text-5xl font-normal block">
              {stat.value}
            </p>
            <p className="text-white text-sm sm:text-base mt-1 font-poppins">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
