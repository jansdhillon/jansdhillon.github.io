import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Badge } from "./ui/badge";

export const JobStatusBadge: React.FC = () => {
  return (
    <Badge className="space-x-2 " variant={"secondary"}>
      <div className="h-2 w-2  bg-green-400 rounded-full text-primary animate-pulse ease-in-out repeat-[2]"></div>
      <p>Ready to Join Your Team</p>
    </Badge>
  );
};
