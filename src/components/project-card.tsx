import { Project } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

export const ProjectCard = ({
  title,
  imgSrc,
  imgAlt,
  description,
  content,
}: Project) => (
  <Card>
    <CardHeader className="card-header">
      <CardTitle className="flex flex-row w-full justify-between space-x-3">
        {title}
        <Image src={imgSrc} width={30} height={50} alt={imgAlt} />
      </CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="card-content">{content}</CardContent>
  </Card>
);
