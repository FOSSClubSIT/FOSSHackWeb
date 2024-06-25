import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const FAQ = () => {
  return (
    <div>
     <Accordion type="single" collapsible>
     <AccordionItem value="item-1">
  <AccordionTrigger>What is the format of the hackathon?</AccordionTrigger>
    <AccordionContent>
    This will be a hybrid mode hackathon. You can participate in person at one of our local editions or virtually. We will live stream a dashboard of commits, PRs and issues of participants' code repositories. During the course of the event, there will be bite sized talks from people from various organizations.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
  <AccordionTrigger>I am not a student, can I participate?</AccordionTrigger>
    <AccordionContent>
    Yes. The prize pool will be divided among the winners based on the merit of projects at the discretion of the jury.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
  <AccordionTrigger>What can I build?</AccordionTrigger>
    <AccordionContent>
    Anything Free and Open Source. The goal of this hackathon is to engage with developers and encourage them to collaborate and build software for public good.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-4">
  <AccordionTrigger>Can I contribute to existing projects?</AccordionTrigger>
    <AccordionContent>
    Yes. Contributions in true spirit is something we would love to see. Please make sure you adhere to the contribution guidelines of the project you are contributing to.

If you are unsure of what to contribute to, explore our partner projects.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-5">
  <AccordionTrigger>Will FOSS United reimburse my travel expense?</AccordionTrigger>
    <AccordionContent>
    Sorry, the participants have to take care of their travel and stay.

In case you don't have the budget to travel, you can participate virtually!
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-6">
  <AccordionTrigger>What is the size for a participating team?</AccordionTrigger>
    <AccordionContent>
    The team size can vary from 1 to 4.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-7">
  <AccordionTrigger>Are there seperate prizes for each local edition?</AccordionTrigger>
    <AccordionContent>
    No. There is a central prize and mentor poolfor the entire hackathon. All contributions (done virtually or in person at a local edition) are eligible for the prize pool.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-8">
  <AccordionTrigger>I have more questions!</AccordionTrigger>
    <AccordionContent>
    Email us at fosshack@fossunited.org or join our weekly AMAs!
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </div>
  )
}

export default FAQ
