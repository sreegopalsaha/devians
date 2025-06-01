import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, User, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { CompletedSteps } from "@/types/types";
import type { StepKey } from "./page";

interface Step1DetailsProps {
  name: string;
  email: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  next: (step: StepKey) => () => void;
  back: (step: StepKey) => () => void;
  completedSteps: CompletedSteps;
}

const Step1Details: React.FC<Step1DetailsProps> = ({
  name,
  email,
  setName,
  setEmail,
  next,
  back,
  completedSteps,
}) => {
  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-zinc-500 mb-1">Step 1 of 3</div>
          <h2 className="text-2xl font-semibold text-zinc-100">Your Details</h2>
        </div>
        {completedSteps.step1 && (
          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
        )}
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10 h-10 bg-zinc-800/50 border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:border-zinc-600 focus:ring-0"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
            <Input
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 h-10 bg-zinc-800/50 border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:border-zinc-600 focus:ring-0"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          onClick={back("START")}
          variant="outline"
          className="border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 h-11 rounded-lg font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={next("STEP2")}
          disabled={!name.trim() || !email.trim()}
          className="flex-1 bg-zinc-100 hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-500 text-zinc-900 h-11 rounded-lg font-medium"
        >
          Continue
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </motion.div>
  );
};

export default Step1Details;
