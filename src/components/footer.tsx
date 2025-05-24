import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-300 py-16 px-6 border-t border-neutral-800">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          DEVIANS COMMUNITY
        </h2>

        <p className="text-neutral-400 text-base md:text-lg">
          A future-focused tech collective from West Bengal — empowering the
          next generation of developers.
        </p>

        <p className="text-sm text-neutral-400">
          <span className="text-white font-medium">
            We’re actively looking for sponsorships
          </span>{" "}
          to support our events, initiatives, and community growth. Let’s
          collaborate.
        </p>

        <div className="flex justify-center items-center gap-2 text-sm text-neutral-400">
          <Mail className="w-4 h-4" />
          <span>sreegopal0101@gmail.com</span>
        </div>

        <Button
          variant="outline"
          className="mt-2 text-sm bg-neutral-700 border-neutral-800 text-white hover:bg-neutral-700 transition"
          onClick={() =>
            (window.location.href =
              "mailto:sreegopal0101@gmail.com?subject=Devians Sponsorship Opportunity")
          }
        >
          Become a Sponsor
        </Button>

        <div className="flex justify-center items-center gap-6 pt-6">
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
            className="hover:text-white transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="hover:text-white transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        <p className="text-xs text-neutral-500 pt-6">
          © {new Date().getFullYear()} Devians. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
