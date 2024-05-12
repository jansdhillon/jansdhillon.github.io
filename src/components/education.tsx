import { Separator } from "./ui/separator";

export const Education = () => {
  return (
    <>
      <div className="flex flex-row space-x-4 text-2xl font-bold">
        <div>🎓</div>
        <div>Education</div>
      </div>
      <div className="text-xl font-semibold">
        Bachelor of Science, Computer Science
      </div>
      <div>University of British Columbia, Kelowna - Sept 2020 - April 2024</div>
      <div>CGPA: 87%</div>
      <ul className="list-disc list-inside space-y-2">
        <li>Key Courses: Software Engineering (97%), Human Computer Interaction (94%), Data Analysis (94%), Databases (90%), Directed Studies (95%), Capstone Software Engineering (100%)</li>
        <li>Acknowledgements: Best project in Capstone project option, recognized by UBC CIC in collaboration with AWS</li>
      </ul>
      <Separator />
    </>
  );
};
