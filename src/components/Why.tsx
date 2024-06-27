import { useState } from "react"



const Why = () => {
const [toggle,settoggle] = useState(true)
console.log(toggle)
  return (
    <div className="max-w-md sm:max-w-[600px] lg:max-w-[900px] mx-auto sm:ml-20 sm:justify-start text-wrap mb-44">
        <div className="title mb-20 ">
            <h1 className="text-5xl font-bold">Partners Project Programme</h1>
            <p className="text-gray-600">An effort to provide FOSS Hack participants with time and mentorship to be able to contribute to curated open-source projects.</p>
        </div>

        <div className="toggle flex gap-5">
            <div onClick={()=>settoggle(true)} className={`p-5 dark:border-inherit border-white hover:border-b-gray-100 box-border border-b-4 ${toggle ? "border-b-black dark:border-b-white" : ""}`}>🟢 About</div>
            <div onClick={()=>settoggle(false)} className={`p-5 dark:border-inherit border-white hover:border-b-gray-100 box-border border-b-4 ${!toggle ? "border-b-black dark:border-b-white" : ""}`}>🟢 Timeline</div>
          
        </div>
        <hr />
        {toggle ? (
            <>
            <ul>
                <li>The partner projects programme offers a curated list of open source projects with issues, for FOSS Hack participants to work on.</li>
                <li>The participants can look-up issues in a curated list of projects, and propose to contribute to them.</li>
                <li>Once assigned, these issues can be worked on, and PRs generated.</li>
                <li>The participants will have access to forum with the maintainers to get onboarding to the project, codebase and other related queries and support.</li>
            </ul>
            <button className="box-border ">
                Explore projects
            </button>
            </>
        ):(
            <>

            <table className="table-fixed w-full">
            <caption className="caption-top">
            Subject to Change.
  </caption>
                <thead className="bg-gray-300">
                    <tr>
                    <th>Title</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>Finalising partner projects</td>
                        <td>10 June 2024</td>
                    </tr>
                    <tr>
                        <td>Open issue list to participants</td>
                        <td>15 June - 5th July</td>
                    </tr>
                    <tr>
                        <td>Coordination, issue assignment, onboarding</td>
                        <td>6th July - 11 July</td>
                    </tr>
                    <tr>
                        <td>Prep phase</td>
                        <td>12 July - 26 July</td>
                    </tr>
                    <tr>
                        <td>Hacking</td>
                        <td>27 July - 28 July</td>
                    </tr>
                    <tr>
                        <td>Evaluation</td>
                        <td>29 July - 19 August</td>
                    </tr>
                </tbody>
            </table>
            </>
        ) }

    </div>
  )
}

export default Why
