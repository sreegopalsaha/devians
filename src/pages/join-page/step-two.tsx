import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  MessageSquare,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ClickedLinks, CompletedSteps } from "@/types/types";
import SocialLink from "@/components/social-link";
import type { StepKey } from "./page";

interface Step2CommunitiesProps {
  clickedLinks: ClickedLinks;
  handleLinkClick: (platform: keyof ClickedLinks) => void;
  next: (step: StepKey) => () => void;
  back: (step: StepKey) => () => void;
  completedSteps: CompletedSteps;
  canProceed: boolean;
}

const Step2Communities: React.FC<Step2CommunitiesProps> = ({
  clickedLinks,
  handleLinkClick,
  next,
  back,
  completedSteps,
  canProceed,
}) => {
  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-zinc-500 mb-1">Step 2 of 3</div>
          <h2 className="text-2xl font-semibold text-zinc-100">
            Join Communities
          </h2>
        </div>
        {completedSteps.step2 && (
          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
        )}
      </div>

      <div className="space-y-3">
        <SocialLink
          href="https://discord.gg/"
          icon={MessageSquare}
          label="Discord Server"
          description="Real-time discussions and support"
          isClicked={clickedLinks.discord}
          onClicked={() => handleLinkClick("discord")}
        />

        <SocialLink
          href="https://chat.whatsapp.com/"
          icon={Phone}
          label="WhatsApp Group"
          description="Quick updates and announcements"
          isClicked={clickedLinks.whatsapp}
          onClicked={() => handleLinkClick("whatsapp")}
        />
      </div>

      <div className="text-center">
        <p className="text-xs text-zinc-500 mb-4">
          Join at least one to continue
        </p>
        <div className="flex gap-3">
          <Button
            onClick={back("STEP1")}
            variant="outline"
            className="border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 h-11 rounded-lg font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button
            onClick={next("STEP3")}
            disabled={!canProceed}
            className="flex-1 bg-zinc-100 hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-500 text-zinc-900 h-11 rounded-lg font-medium"
          >
            Continue
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Step2Communities;
