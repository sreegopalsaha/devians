import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useData } from "@/contexts/DataProvider";

const Footer = () => {
  const { socialLinks } = useData();

  const getCurrentYear = () => new Date().getFullYear();

  const handleSponsorEmail = () => {
    window.location.href = `mailto:${socialLinks.email}?subject=Devians Sponsorship Opportunity`;
  };

  return (
    <footer className="bg-black text-neutral-300 py-20 px-6 md:px-16 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              DEVIANS
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              A future-focused tech collective from West Bengal empowering the
              next generation of developers.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <div className="flex items-center gap-3 text-neutral-400">
              <Mail className="w-4 h-4" />
              <span>{socialLinks.email}</span>
            </div>
            <Button
              onClick={handleSponsorEmail}
              className="bg-white text-black hover:bg-neutral-200 font-medium"
            >
              Become a Sponsor
            </Button>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-500 text-sm">
            © {getCurrentYear()} Devians. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
