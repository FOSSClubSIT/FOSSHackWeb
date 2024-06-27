import { ModeToggle } from "./mode-toggle"
import foss from "/foss.svg"
import { Button } from "./ui/button"
const Header = () => {
  return (
    <div className="dark:invert  flex flex-col sm:flex-row sm:justify-between items-center">
        <div className="pl-4 pb-2 pt-6">
            <img src={foss} alt="foss-logo" className="h-16" />
        </div>
   
<div className="flex max-w-6xl justify-center items-center sm:mr-5"> 
{/* <Button className="mr-3"><a href={"https://fossunited.org/login?redirect-to=/dashboard/register-for-hackathon?id=lmj5ossbbb#login"}>Register</a> </Button> */}
      <ModeToggle/>
      </div>
     
    </div>
  )
}

export default Header
