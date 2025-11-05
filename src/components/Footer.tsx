import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Barkulan Cafe. All rights reserved.
          </p>
          <p className="text-sm mt-2 opacity-80">
            Where Great Coffee Meets Great People
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://www.instagram.com/barkulan_cafe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Follow us on Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
