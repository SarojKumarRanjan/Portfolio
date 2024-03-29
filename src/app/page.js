'use client'
import ProjectCard from "@/components/Card";
import { projectData } from "@/components/Constant";

export default function Mainpage() {
  return (
    <main className="">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4 flex flex-col"> <span className="text-4xl">
        👋
          </span> 
        <span>Hello there! <span className="bg-stone-200 p-1 px-3 rounded-md font-semibold"> I'm Saroj </span></span>
        
        </h1>
        <p className="mb-4 text-md">
          I'm a aspiring full-stack developer that loves building products and web apps
          that can create impact.
        </p>
        <p className="mb-4 text-md">
          I'm a software engineer with 1.5 years of experience building
           web apps that are performance optimized and good looking.
        </p>
      </section>
      <section className="pt-8">
        <h2 className="text-xl font-bold  mb-6">What I've been working on</h2>
        
        {
          projectData.map((data)=>(
            <ProjectCard key={data.id} {...data} />
          ))
        }
      </section>
    </main>
  );
}
