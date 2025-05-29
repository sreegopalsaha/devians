interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
  isClicked: boolean;
  onClicked: () => void;
}

interface StepIndicatorProps {
  step: number;
  currentStep: number;
  isCompleted: boolean;
}

interface ClickedLinks {
  discord: boolean;
  whatsapp: boolean;
  linkedin: boolean;
  instagram: boolean;
  twitter: boolean;
}

interface CompletedSteps {
  step1: boolean;
  step2: boolean;
  step3: boolean;
}

export type {SocialLinkProps,
StepIndicatorProps,
ClickedLinks,
CompletedSteps}