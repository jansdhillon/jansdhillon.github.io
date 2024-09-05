import BgGlowContainer from "./bg-glow-container";
import { Button } from "./ui/button";

export const Contact: React.FC = () => {
  return (
    <div>
      <BgGlowContainer className="opacity-75">
        <Button
          variant={"home"}
          className=" relative ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start p-6 space-x-6 text-secondary "
        >
          <div className="flex gap-2">
            <p>Send Me a Message</p>
          </div>
        </Button>
      </BgGlowContainer>
    </div>
  );
};
