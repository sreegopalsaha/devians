import { Check } from "lucide-react";
import type { StepIndicatorProps } from "@/types/types";

const StepIndicator: React.FC<StepIndicatorProps> = ({
  step,
  currentStep,
  isCompleted,
}) => {
  const isActive = step === currentStep;
  const isPast = step < currentStep;

  return (
    <div className="flex items-center">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
          isCompleted || isPast
            ? "bg-emerald-500 text-white"
            : isActive
            ? "bg-zinc-100 text-zinc-900"
            : "bg-zinc-800 text-zinc-500"
        }`}
      >
        {isCompleted || isPast ? <Check className="w-4 h-4" /> : step}
      </div>
    </div>
  );
};

export default StepIndicator;
