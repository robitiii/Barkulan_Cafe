import aboutImage from "@/assets/about-cafe.jpg";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Our Story
          </h1>
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
            A journey of passion, community, and exceptional coffee
          </p>
        </div>
      </section>

      {/* Story Section with Image */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={aboutImage}
                alt="Barkulan Cafe interior"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Where It All Began
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Barkulan Cafe was born from a simple dream: to create a space where people could 
                  connect over exceptional coffee. What started as a small neighborhood cafe has 
                  grown into a vibrant community hub.
                </p>
                <p>
                  We believe that the best conversations happen over a great cup of coffee. That's 
                  why we've dedicated ourselves to sourcing the finest beans, perfecting our craft, 
                  and creating an environment where everyone feels welcome.
                </p>
                <p>
                  Today, Barkulan Cafe is more than just a place to grab your morning brew. It's 
                  a gathering spot for entrepreneurs, creatives, and neighbors. Through our weekly 
                  networking events and community programs, we're building connections that last 
                  beyond the coffee cup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg mb-8">
              To foster meaningful connections within our community through exceptional coffee, 
              warm hospitality, and engaging events that bring people together.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-primary">Community First</h3>
              <p className="text-muted-foreground">
                We're committed to creating a welcoming space where everyone feels at home.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-primary">Quality Craftsmanship</h3>
              <p className="text-muted-foreground">
                Every cup is crafted with care, using only the finest ingredients and techniques.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-primary">Sustainable Practices</h3>
              <p className="text-muted-foreground">
                We source responsibly and work to minimize our environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
