import type { EventType } from "@/types/event-types";
import { Card, CardContent, CardHeader } from "./ui/card";
import { CalendarDays, Users } from "lucide-react";

interface propsType {
  event: EventType;
}

function EventCard({ event }: propsType) {
  return (
    <Card
      className="
        bg-neutral-900 border border-neutral-800 
        w-full 
        max-w-[16rem] min-w-[14rem] aspect-[3/4] 
        sm:max-w-[20rem] sm:min-w-[16rem] sm:aspect-[4/5] 
        md:max-w-[22rem] md:min-w-[18rem] md:aspect-[4/5]
        flex flex-col justify-between items-center text-center 
        hover:border-white transition-colors
        overflow-hidden
      "
    >
      <CardHeader className="flex-col items-center justify-center pt-8">
        <div className="md:w-44 md:h-44 w-32 h-32 rounded-full border-1 border-white overflow-hidden bg-neutral-800">
          <img
            src={event.image || "/devians.png"}
            alt={event.title}
            onError={(e) => (e.currentTarget.src = "/devians.png")}
            className="w-full h-full object-cover"
          />
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 pb-6 px-4">
        <h3 className="text-white font-semibold text-xl line-clamp-2">
          {event.title}
        </h3>

        <div className="flex items-center justify-center gap-6 text-sm text-neutral-400 flex-wrap">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-sky-400" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4 text-sky-400" />
            <span>{event.date}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default EventCard;
