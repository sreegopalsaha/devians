import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { ClickedLinks, CompletedSteps } from "@/types/types";

import StepStart from "./step-start";
import Step1Details from "./step-one";
import Step2Communities from "./step-two";
import Step3Social from "./step-three";
import StepCongrats from "./step-cong";

const steps = {
  START: "START",
  STEP1: "STEP1",
  STEP2: "STEP2",
  STEP3: "STEP3",
  CONGRATS: "CONGRATS",
} as const;

export type StepKey = keyof typeof steps;

export default function JoinDevians() {
  const [step, setStep] = useState<StepKey>("START");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clickedLinks, setClickedLinks] = useState<ClickedLinks>({
    discord: false,
    whatsapp: false,
    linkedin: false,
    instagram: false,
    twitter: false,
  });
  const [completedSteps, setCompletedSteps] = useState<CompletedSteps>({
    step1: false,
    step2: false,
    step3: false,
  });

  const next = (s: StepKey) => () => {
    if (step === "STEP1" && s === "STEP2") {
      setCompletedSteps((prev) => ({ ...prev, step1: true }));
    } else if (step === "STEP2" && s === "STEP3") {
      setCompletedSteps((prev) => ({ ...prev, step2: true }));
    } else if (step === "STEP3" && s === "CONGRATS") {
      setCompletedSteps((prev) => ({ ...prev, step3: true }));
    }
    setStep(s);
  };

  const back = (s: StepKey) => () => setStep(s);

  const handleLinkClick = (platform: keyof ClickedLinks) => {
    setClickedLinks((prev) => ({ ...prev, [platform]: true }));
  };

  const handleShareLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/sharing/share-offsite/?url=https://devians.xyz",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const canProceedStep2 = clickedLinks.discord || clickedLinks.whatsapp;
  const canProceedStep3 =
    clickedLinks.linkedin || clickedLinks.instagram || clickedLinks.twitter;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        <AnimatePresence mode="wait">
          {step === "START" && (
            <StepStart next={next} completedSteps={completedSteps} />
          )}
          {step === "STEP1" && (
            <Step1Details
              name={name}
              email={email}
              setName={setName}
              setEmail={setEmail}
              next={next}
              back={back}
              completedSteps={completedSteps}
            />
          )}
          {step === "STEP2" && (
            <Step2Communities
              clickedLinks={clickedLinks}
              handleLinkClick={handleLinkClick}
              next={next}
              back={back}
              completedSteps={completedSteps}
              canProceed={canProceedStep2}
            />
          )}
          {step === "STEP3" && (
            <Step3Social
              clickedLinks={clickedLinks}
              handleLinkClick={handleLinkClick}
              next={next}
              back={back}
              completedSteps={completedSteps}
              canProceed={canProceedStep3}
            />
          )}
          {step === "CONGRATS" && (
            <StepCongrats email={email} onShare={handleShareLinkedIn} />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
