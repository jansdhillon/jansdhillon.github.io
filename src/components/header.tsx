import Writer from "./writer";
import { Separator } from "./ui/separator";

export const Header = () => {
  return (
    <div>
      <div className="text-5xl min-w-full font-bold  min-h-[100px] leading-loose bg-gradient-to-r from-indigo-600  to-orange-400 text-transparent bg-clip-text animate-gradient bg-300%">
        <Writer text="Hey, I'm Jan!" />
      </div>
    </div>
  );
};
