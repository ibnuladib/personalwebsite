// App.js
import React from 'react';
import Button from './components/button';
import Project from './components/project';
import {projectData} from './data/projectData';

function App() {

//   const projectData = {
//     project1: {
//       date: "2023",
//       title: "Project One",
//       tags: ["React", "Node.js", "MongoDB"],
//       description: "A brief description of project one",
//       githubLink: "https://github.com/username/project1",
//     },
//     project2: {
//       date: "2024",
//       title: "Project Two",
//       tags: ["Python", "Django", "PostgreSQL"],
//       description: "A brief description of project two",
//       githubLink: "https://github.com/username/project2",
//     },
//   };

  return (
    <main className="mx-auto px-4 md:w-3/4 lg:w-1/2 max-w-[820px] flex flex-col gap-10">
      <section className="flex flex-col md:flex-row items-center py-12 p-8 rounded-[4rem] shadow-md gap-10 bg-[#2a2a2a]">
        <img 
          src="https://github.com/ibnuladib.png" 
          alt="Profile Picture" 
          className="rounded-full mb-6 md:mb-0 w-[220px] h-[220px]" 
        />
        <div className="text-center items-center md:text-left">
          <div className='items-center'>
            <h2 className="mb-8 text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 text-transparent bg-clip-text">
              Hi, I'm Adib.
            </h2>
            <p className="text-2xl md:text-2xl font-bold text-white-400">computer science student | wannabe dev</p>
            <div className="lg:ml-16 mt-8 md:mt-12 flex justify-center md:justify-start gap-3">
              <Button btnName="GitHub" />
              <Button btnName="LinkedIn" />
            </div> 
          </div>
        </div>
      </section>

      <section className="bottom " style={{width: "100%"}}>
        {/* <h3 className="text-xl font-bold px-8 mb-8">RECENT PROJECTS</h3> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Project {...projectData.project1} />
            <Project {...projectData.project2} />
            <Project {...projectData.project3} />
            <Project {...projectData.project4} />
            <Project {...projectData.project5} />
            <Project {...projectData.project6} />
            <Project {...projectData.project7} />
        </div>
      </section>
    </main>
  );
}

export default App;