import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CompletedSteps } from "@/types/types";
import StepIndicator from "@/components/step-indicator";
import type { StepKey } from "./page";

interface StepStartProps {
  next: (step: StepKey) => () => void;
  completedSteps: CompletedSteps;
}

const StepStart: React.FC<StepStartProps> = ({ next, completedSteps }) => {
  return (
    <motion.div
      key="start"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-semibold text-zinc-100">
          Join Devians Community
        </h1>
        <p className="text-zinc-400 text-lg">
          Become a member in 3 simple steps
        </p>
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <StepIndicator
            step={1}
            currentStep={0}
            isCompleted={completedSteps.step1}
          />
          <div className="flex-1 h-px bg-zinc-800 mx-3"></div>
          <StepIndicator
            step={2}
            currentStep={0}
            isCompleted={completedSteps.step2}
          />
          <div className="flex-1 h-px bg-zinc-800 mx-3"></div>
          <StepIndicator
            step={3}
            currentStep={0}
            isCompleted={completedSteps.step3}
          />
        </div>

        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <p className="text-zinc-300 font-medium">Details</p>
            <p className="text-zinc-500 text-xs mt-1">Name & Email</p>
          </div>
          <div>
            <p className="text-zinc-300 font-medium">Communities</p>
            <p className="text-zinc-500 text-xs mt-1">Discord & WhatsApp</p>
          </div>
          <div>
            <p className="text-zinc-300 font-medium">Social</p>
            <p className="text-zinc-500 text-xs mt-1">Follow Accounts</p>
          </div>
        </div>
      </div>

      <Button
        onClick={next("STEP1")}
        className="w-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 h-11 rounded-lg font-medium"
      >
        Get Started
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </motion.div>
  );
};

export default StepStart;
