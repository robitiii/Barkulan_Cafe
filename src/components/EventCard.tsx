import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface EventCardProps {
  day: string;
  title: string;
  time: string;
  location: string;
  description: string;
}

const EventCard = ({ day, title, time, location, description }: EventCardProps) => {
  const handleJoin = () => {
    toast.success(`You're joining ${title}!`, {
      description: `We'll see you on ${day} at ${time}.`,
    });
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
        <CardDescription className="text-base font-medium">{day}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">
          <span className="font-semibold">Time:</span> {time}
        </p>
        <p className="text-sm text-muted-foreground mb-2">
          <span className="font-semibold">Location:</span> {location}
        </p>
        <p className="text-sm mt-4">{description}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleJoin} className="w-full bg-primary hover:bg-primary/90">
          Join Event
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
