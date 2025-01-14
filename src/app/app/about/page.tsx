import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="container py-8 px-10">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-white">About Me</h1>
        
        <div className="bg-white/75 p-3 rounded-lg shadow-lg transition-transform transform hover:scale-95 hover:shadow-2xl duration-300 h-auto w-full flex flex-col lg:flex-row">
          
          <div className="rounded-t-lg border-4 border-black/45 lg:mr-10 w-full lg:w-1/2">
            <Image src="/images/aboutimg.jpg" alt="Kabuli Pulao" layout="responsive" width={500} height={100} className="rounded-lg object-cover" />
          </div>

          <div className="lg:w-1/2 text-left">
            <h1 className="text-5xl font-extrabold mb-6 text-black/45">Frontend Developer & CIT Professional</h1>
            <p className="text-4xl text-white mb-4">
            My name is Niba Khan, and I am a skilled front-end developer with expertise in HTML, CSS, JavaScript, React, and Next.js. I have hands-on experience creating various projects that highlight my technical abilities and creativity. My background is rooted in being a Certified Information Technology (CIT) professional, which has provided me with a strong foundation in IT and web development. I am passionate about continuously enhancing my skills and contributing to impactful and innovative projects.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
