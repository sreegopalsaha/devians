import { motion } from "framer-motion";
import { Check, Sparkles, CreditCard, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StepCongratsProps {
  email: string;
  onShare: () => void;
}

const StepCongrats: React.FC<StepCongratsProps> = ({ email, onShare }) => {
  return (
    <motion.div
      key="congrats"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8 text-center"
    >
      {/* Main Success Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="relative mx-auto w-24 h-24"
      >
        <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
          <Check className="w-12 h-12 text-white" />
        </div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="absolute -top-2 -right-2"
        >
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="text-4xl font-bold">Congratulations! 🎉</h2>
        <div className="space-y-3">
          <p className="text-xl text-zinc-300 font-medium">
            You're now a member of West Bengal's
          </p>
          <p className="text-2xl font-bold text-blue-500">
            fastest-growing tech community
          </p>
        </div>
      </motion.div>

      {/* Simple Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        {/* ID Card Info */}
        <div className="bg-gradient-to-r from-zinc-900/80 to-zinc-800/80 border border-zinc-700/50 rounded-xl p-6 backdrop-blur-sm">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <CreditCard className="w-6 h-6 text-emerald-400" />
            <h3 className="font-semibold text-zinc-100 text-lg">
              Digital ID Card
            </h3>
          </div>
          <p className="text-zinc-300">
            Check your email at{" "}
            <span className="text-emerald-400 font-medium">{email}</span>
          </p>
          <p className="text-sm text-zinc-400 mt-2">
            If you don't receive it, let us know on Discord!
          </p>
        </div>

        {/* Stay Active */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-6">
          <h3 className="font-semibold text-zinc-100 text-lg mb-2">
            Stay Active & Grow
          </h3>
          <p className="text-zinc-300">
            Be visible, participate, and opportunities will find you! 🚀
          </p>
        </div>
      </motion.div>

      {/* Share Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Button
          onClick={onShare}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-12 rounded-xl font-semibold shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
        >
          <Share2 className="w-5 h-5 mr-2" />
          Share on LinkedIn
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default StepCongrats;
