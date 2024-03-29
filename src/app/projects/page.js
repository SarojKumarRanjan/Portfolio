import { projectData } from "@/components/Constant";
import ProjectCard from "@/components/Card";

export default function Project() {
  return (
    <main className="">
      <CloudLightningIcon className="h-8 w-8 text-orange-400" />
      <h1 className="text-3xl font-bold ">
        What I've been working on
      </h1>
      {
          projectData.map((data)=>(
            <ProjectCard key={data.id} {...data} />
          ))
        }
    </main>
  );
}

function CloudLightningIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  );
}
