import { Coffee, Croissant, Wifi, Users } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import EventCard from "@/components/EventCard";

const Services = () => {
  const services = [
    {
      icon: Coffee,
      title: "Premium Coffee",
      description: "Expertly crafted beverages using sustainably sourced beans from around the world.",
    },
    {
      icon: Croissant,
      title: "Fresh Pastries",
      description: "Delicious baked goods and light snacks, made fresh daily by local artisans.",
    },
    {
      icon: Wifi,
      title: "Free Wi-Fi",
      description: "High-speed internet access throughout the cafe for work or leisure.",
    },
    {
      icon: Users,
      title: "Co-working Space",
      description: "Comfortable seating and a productive atmosphere for remote workers and students.",
    },
  ];

  const weeklyEvents = [
    {
      day: "Monday",
      title: "Morning Networking",
      time: "8:00 AM - 10:00 AM",
      location: "Main Hall",
      description: "Start your week right with coffee and connections. Meet local professionals and entrepreneurs in a casual setting.",
    },
    {
      day: "Tuesday",
      title: "Book Club",
      time: "7:00 PM - 9:00 PM",
      location: "Reading Corner",
      description: "Join fellow book lovers for lively discussions about our monthly pick. All reading levels welcome!",
    },
    {
      day: "Wednesday",
      title: "Creative Meetup",
      time: "6:00 PM - 8:00 PM",
      location: "Lounge Area",
      description: "A gathering for designers, artists, and creative minds to share ideas, get feedback, and collaborate on projects.",
    },
    {
      day: "Thursday",
      title: "Startup Pitch Night",
      time: "6:30 PM - 8:30 PM",
      location: "Main Hall",
      description: "Present your startup idea, get valuable feedback from mentors, and connect with potential co-founders and investors.",
    },
    {
      day: "Friday",
      title: "Weekend Social",
      time: "5:00 PM - 7:00 PM",
      location: "Outdoor Patio",
      description: "Kick off the weekend with live acoustic music, specialty drinks, and great company. Perfect for unwinding after a long week.",
    },
    {
      day: "Saturday",
      title: "Coffee Tasting Workshop",
      time: "11:00 AM - 1:00 PM",
      location: "Tasting Room",
      description: "Learn about different coffee origins, roasting techniques, and brewing methods. Discover your perfect cup!",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Our Services
          </h1>
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
            Everything you need for a productive day or a relaxing break
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Events Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Weekly Networking Events
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join us for engaging events designed to bring our community together
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weeklyEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
