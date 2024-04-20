import { SectionProps } from "@/lib/types";
import { Separator } from "./ui/separator";

export const Section = ({
  title,
  emoji,
  description,
  children,
}: SectionProps) => (
  <>
    <div className="flex flex-row space-x-4 text-2xl font-bold">
      <div>{emoji}</div>
      <div>{title}</div>
    </div>
    <p>{description}</p>
    <Separator />
    <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">{children}</div>
  </>
);
