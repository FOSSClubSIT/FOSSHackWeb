const Rules = () => {
    return (
      <div className="flex max-w-7xl flex-col sm:flex-row w-full justify-around pb-24">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-extrabold mb-3 ">Why Participate?</h1>
          <ol className="list-decimal list-inside space-y-3 max-w-82">
            <li>Win up to ₹10 lakhs in cash</li>
            <li>Build your reputation as a hacker</li>
            <li>Get recognized by recruiters</li>
            <li>Grants for your FOSS project</li>
          </ol>
        </div>
        <div className="mt-10 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-extrabold mb-3">Rules in a nutshell</h1>
          <ol className="list-decimal list-inside space-y-3 max-w-82">
            <li>Evaluation will be done on basis of code commit during the course of the event</li>
            <li>You cannot use external APIs as the core feature</li>
            <li>Your project must have a valid FOSS license</li>
            <li>The cash prize will be split among the winners at the discretion of the jury</li>
            <li>Check out the rules page for more details</li>
          </ol>
        </div>
      </div>
    )
  }
  
  export default Rules
  