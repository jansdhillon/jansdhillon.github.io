import Typewriter from "typewriter-effect";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="grid items-center justify-items-center justify-center h-screen min-w-full ">
        <div className="text-5xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hey, I'm Jan :)")
                .pauseFor(100)
                .changeDelay(25)
                .start();
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
