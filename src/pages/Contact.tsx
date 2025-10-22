import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Get in Touch
          </h1>
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Connect with us today!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Email */}
              <a
                href="mailto:barkulancafe@email.com"
                className="flex items-center justify-center gap-3 p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
              >
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-muted-foreground text-sm">barkulancafe@email.com</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center gap-3 p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
              >
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-muted-foreground text-sm">064 009 2988</p>
                </div>
              </a>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Follow Us</h2>
              <div className="flex justify-center gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                  onClick={() => window.open("https://instagram.com", "_blank")}
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                  onClick={() => window.open("https://facebook.com", "_blank")}
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
                <p className="text-lg opacity-90">
                  123 Coffee Street<br />
                  Downtown District<br />
                  City, State 12345
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">Opening Hours</h3>
                <div className="space-y-2 opacity-90">
                  <p>Monday - Friday: 7:00 AM - 9:00 PM</p>
                  <p>Saturday: 8:00 AM - 10:00 PM</p>
                  <p>Sunday: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
