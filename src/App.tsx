import cat from "./assets/cat-typing.gif"
import CountdownTimer from "./components/CountDownTimer"
import { Button } from "./components/ui/button"
const App = () => {
  return (
    <div>
     <div className="flex flex-col justify-center  items-center min-h-96">
      <p className="font-black text-5xl mb-2"><span className="text-green-500">FOSS</span>Hack is Back!!!</p>
      <p className="mb-3">Help to develop open source projects, and a <span className="text-indigo-400">chance to win INR 10 lakh</span></p>
      <Button className="bg-green-500"><a href={"https://fossunited.org/login?redirect-to=/dashboard/register-for-hackathon?id=lmj5ossbbb#login"}>Join Us</a></Button>
      </div>
     <div className="flex justify-center"><img src={cat} alt="open-source-cat" /></div>

     <div className="flex flex-col items-center justify-center"><h1 className="text-xl pt-5 font-extrabold">Time till hackathon starts:</h1><CountdownTimer/></div>
    </div>
  )
}

export default App