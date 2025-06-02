import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";
import type { SocialLinkProps } from "@/types/types";

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon: Icon,
  label,
  description,
  isClicked,
  onClicked,
}) => {
  const handleClick = () => {
    onClicked();
    window.open(href, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`group w-full p-4 rounded-xl text-left border backdrop-blur-sm transition-all duration-200
        ${
          isClicked
            ? "border-emerald-400/30 bg-emerald-500/10"
            : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-800/60"
        }`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-md flex items-center justify-center transition-colors ${
              isClicked
                ? "bg-emerald-500/20"
                : "bg-zinc-800 group-hover:bg-zinc-700"
            }`}
          >
            <Icon
              className={`w-4 h-4 ${
                isClicked ? "text-emerald-400" : "text-zinc-400"
              }`}
            />
          </div>
          <div className="text-sm">
            <h3 className="font-semibold text-zinc-100">{label}</h3>
            <p className="text-xs text-zinc-400">{description}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {isClicked && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center"
            >
              <Check className="w-3 h-3 text-white" />
            </motion.div>
          )}
          <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-400 transition-colors" />
        </div>
      </div>
    </motion.button>
  );
};

export default SocialLink;
