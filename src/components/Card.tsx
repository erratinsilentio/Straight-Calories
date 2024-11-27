import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const CardComponent = ({ title, description, children }: CardProps) => {
  const bgColor =
    title === "Calories"
      ? "bg-ui-indigo"
      : title === "Protein"
        ? "bg-ui-yellow"
        : title === "Fat"
          ? "bg-ui-violet"
          : title === "Carbs"
            ? "bg-ui-red"
            : "bg-ui-red";

  return (
    <Card
      className={`${bgColor} w-[400px] rounded-lg p-4 shadow-md border-none`}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{children}</p>
      </CardContent>
    </Card>
  );
};
