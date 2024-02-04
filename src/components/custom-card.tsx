import { PersonIcon, EyeNoneIcon } from "@radix-ui/react-icons";
import { BellIcon, IconNode } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

type Item = {
  header: string;
  sub: string;
  icon: React.ComponentType;
};

type CustomCardProps = { title: string; description: string; items: Item[] };

export const CustomCard = ({ title, description, items }: CustomCardProps) => {
  return (
    <Card className="">
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription >{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-1 items-center">
        {items.map((item) => {
          return (
            <><Separator /><div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
             <item.icon />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{item.header}</p>
                <p className="text-sm text-muted-foreground">
                  {item.sub}
                </p>
              </div>
            </div></>
          );
        })}
      </CardContent>
    </Card>
  );
};
