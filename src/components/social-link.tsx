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
      className={`group w-full p-6 text-left rounded-lg transition-all duration-200 border ${
        isClicked
          ? "border-emerald-500/30 bg-emerald-500/5"
          : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900/80"
      }`}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              isClicked
                ? "bg-emerald-500/20"
                : "bg-zinc-800 group-hover:bg-zinc-700"
            }`}
          >
            <Icon
              className={`w-5 h-5 ${
                isClicked ? "text-emerald-400" : "text-zinc-400"
              }`}
            />
          </div>
          <div>
            <h3 className="font-medium text-zinc-100">{label}</h3>
            <p className="text-sm text-zinc-400 mt-0.5">{description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {isClicked && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center"
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
