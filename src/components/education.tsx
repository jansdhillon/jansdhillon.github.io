import {
  CardDescription,
} from "./ui/card";
import { Separator } from "./ui/separator";

export const Education: React.FC = () => {
  return (
    <>
      <div className="flex flex-row space-x-4 text-2xl font-bold">
        <div>🎓</div>
        <div>Education</div>
      </div>
      <CardDescription>My academic Journey</CardDescription>
      <Separator />
      <div className="flex space-x-4">
        <div className="space-y-4">
          <div className="text-xl font-semibold">
            Computer Science, UBC (BSc)
          </div>
          <p>
            I will be graduating from UBC Okanagan this spring with a Bachelor
            of Science degree, and a specialization in Computer Science. Looking
            back on my academic career, I'm grateful to have met the people and
            learned the things that I did.
          </p>
        </div>
      </div>
    </>
  );
};
