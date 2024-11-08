// src/components/Project.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

function Project(props) {
  return (
    <div className='card bg-[#2a2a2a] py-9 p-8 rounded-[4rem] shadow-md mb-6' >
      <h1 className="text-2xl font-bold mb-2">{props.title}</h1>
      <h2 className="text-xl text-gray-300 mb-4">{props.date}</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {Array.isArray(props.tags) && props.tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-sm bg-gray-700 px-3 py-1 rounded-full text-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-300 mb-4">{props.description}</p>
      {props.githubLink && (
        <a 
          href={props.githubLink} 
          className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} size='xl'/>
        </a>
      )}
    </div>
  );
}

export default Project;