import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import EventCard from "@/components/event-card";
import { useData } from "@/contexts/DataProvider";

export default function EventsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const { events } = useData();
  
  return (
    <section className="w-full bg-neutral-950 py-20 px-4 sm:px-6 md:px-12 lg:px-24 text-white">
      <div className="relative w-full">
        <h2 className="text-4xl sm:text-5xl font-mono font-semibold mb-12">
          We have organized some cool events
        </h2>

        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-900 border border-neutral-700 rounded-full p-3 hover:bg-neutral-800 transition"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-900 border border-neutral-700 rounded-full p-3 hover:bg-neutral-800 transition"
        >
          <ArrowRight className="w-6 h-6 text-white" />
        </button>

        <div className="overflow-hidden px-10" ref={emblaRef}>
          <div className="flex gap-6">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="min-w-[95%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[32%] flex-shrink-0"
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
