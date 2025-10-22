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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
