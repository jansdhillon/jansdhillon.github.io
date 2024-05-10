import Writer from "./writer";
import { Separator } from "./ui/separator";

export const Header = () => {
    return (
      <div className="">
        <div className="text-4xl min-w-full font-bold  text-left min-h-[78px] leading-loose bg-gradient-to-r from-indigo-400  to-orange-400 text-transparent bg-clip-text animate-gradient bg-300%">
          <Writer text="Hey, I'm Jan!" />
        </div>
      </div>
    );
  };
