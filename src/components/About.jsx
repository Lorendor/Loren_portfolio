import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const About = () => {
  return (
    <div className='w-full h-screen  bg-white dark:bg-darkgray flex flex-col items-center justify-center'>
      <div className="code-display items-center justify-center pt-20 pb-20 w-100px">
        <SyntaxHighlighter language="jsx" style={dracula} customStyle={{ fontSize: '1.5rem',margin: '0',padding: '2rem',height: '100%',width: '100%',borderRadius: '20px',
          backgroundColor: 'rgba(30,41,59,0.8)',backdropFilter: 'blur(10px)',border: '1px solid rgba(255,255,255,0.1)',marginBottom: '20px'}}>
          {`
          const aboutMe = {
            name: "Loren Bjelokosić",
            age: 25,
            city: "Dubrovnik",
            role: "Frontend Developer","React Developer",
            degree: "Bachelor of Computer Science and programming",
            stacks: [
              "HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Git", "NPM", "MySQL", "GSAP"
              ],
            hobbies: [
              "Coding","Gaming", "Diving", "Swimming", "Training", "Reading"
            ],
            goals: [
              "To become a full stack developer","To travel the world","To stop drinking coffee",
            ],
            contact: {
              email: "lorenbjelokosic1@gmail.com",
            },
          }
          `}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default About