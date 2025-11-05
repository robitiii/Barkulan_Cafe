import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";
import heroImage from "@/assets/hero-home.jpg";

const Home = () => {
  const navigate = useNavigate();

  const featuredEvents = [
    {
      day: "Monday",
      title: "Morning Networking",
      time: "8:00 AM - 10:00 AM",
      location: "Main Hall",
      description: "Start your week right with coffee and connections. Meet local professionals and entrepreneurs.",
    },
    {
      day: "Wednesday",
      title: "Creative Meetup",
      time: "6:00 PM - 8:00 PM",
      location: "Lounge Area",
      description: "A gathering for designers, artists, and creative minds to share ideas and collaborate.",
    },
    {
      day: "Friday",
      title: "Weekend Social",
      time: "5:00 PM - 7:00 PM",
      location: "Outdoor Patio",
      description: "Kick off the weekend with live music, specialty drinks, and great company.",
    },
  ];

  return (
    <div>
      <HeroSection
        title="Welcome to Barkulan Cafe"
        subtitle="Where Great Coffee Meets Great People"
        backgroundImage={heroImage}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => navigate("/services")}
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
          >
            Explore Events
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open("https://www.instagram.com/barkulan_cafe", "_blank")}
            className="text-lg px-8 py-6 gap-2"
          >
            <Instagram className="w-5 h-5" />
            Follow Us
          </Button>
        </div>
      </HeroSection>

      {/* Featured Events Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Featured Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            More Than Just Coffee
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Barkulan Cafe is your neighborhood hub for connection, creativity, and collaboration.
            Join us for weekly networking events, enjoy our premium coffee, and become part of a
            thriving community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
