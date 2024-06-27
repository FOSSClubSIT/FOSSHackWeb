import cat from "./assets/cat-typing.gif";
import CountdownTimer from "./components/CountDownTimer";
import { Button } from "./components/ui/button";
import FAQ from "./components/FAQ";
import Why from "./components/Why";
import Rules from "./components/Rules";

const App = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <div className="text-center mt-24">
        <p className="font-black text-3xl sm:text-5xl mb-2">
          <span className="text-green-500">FOSS</span>Hack is Back!!!
        </p>
        <p className="mb-3 px-5">
          Help to develop open source projects, and a{" "}
          <span className="text-indigo-400">chance to win INR 10 lakh</span>
        </p>
        <Button className="bg-green-500">
          <a href={"https://fossunited.org/login?redirect-to=/dashboard/register-for-hackathon?id=lmj5ossbbb#login"}>
            Join Us
          </a>
        </Button>
      </div>

      <div className="flex justify-center">
        <img src={cat} alt="open-source-cat" className="max-w-full h-auto" />
      </div>

      <div className="flex flex-col items-center justify-center">
        <CountdownTimer />
      </div>
      <Rules/>

     
    </div>

    <Why />

    <FAQ />
    </>
  );
};

export default App;
