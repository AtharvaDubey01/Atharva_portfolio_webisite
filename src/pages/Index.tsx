
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Briefcase, GraduationCap, Code, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="bento-grid">
        {/* Welcome Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-sm text-gray-400 mb-2">welcome</h2>
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Atharva Umeshkumar Dubey</span>
          </h1>
          <p className="text-gray-300 text-lg">
            A BCA student at Thakur College of Engineering and Technology, Mumbai with a passion for creating beautiful and functional web experiences
          </p>
          <p className="text-gray-400 mt-2">
            D/201, Arjun CHS, NL Complex, Anand Nagar, Dahisar (East), Mumbai-400068
          </p>
        </div>

        {/* Profile Picture Card */}
        <div className="bento-card row-span-2 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
            <img 
              src="/lovable-uploads/3e01747c-2060-4be0-a886-cd1be08e08bd.png" 
              alt="Atharva Dubey" 
              className="object-cover max-w-full max-h-full"
            />
          </div>
        </div>

        {/* Time Card */}
        <div className="bento-card">
          <h2 className="text-lg text-gray-400 mb-4">Current Time</h2>
          <p className="text-3xl font-bold font-mono">
            {time.toLocaleTimeString()}
          </p>
        </div>

        {/* Contact Card */}
        <div className="bento-card">
          <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
          <div className="flex space-x-6">
            <a href="https://github.com/AtharvaDubey01" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/atharvadubey/" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:atharvadubey01@gmail.com"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <p className="mt-4 text-gray-300">Phone: 9137930743</p>
        </div>

        {/* Summary Card */}
        <div className="bento-card col-span-3">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold">Summary</h2>
          </div>
          <p className="text-gray-300 text-lg">
            An ambitious and dedicated BCA student at Thakur College of Engineering and Technology with a first semester
            GPA of 8.64, proficient in C, C++, Python, HTML and CSS - and JavaScript while actively expanding my skills.
            I continuously up-skill through courses like Harvard's CS50x (ongoing) and practical experiences such as an
            Investment Banking job simulation by Citi Bank, with my GitHub showcasing coding exercises like a C++
            banking simulation.
          </p>
          <p className="text-gray-300 text-lg mt-4">
            Backed by strong analytical skills and competitive academic credentials (MAH-CET AIR
            382 and NPAT Rank 2228 in 2024), I'm excited to bring my technical skills and a commitment to lifelong learning
            to a collaborative tech team, where I can drive innovation and contribute to meaningful projects.
          </p>
        </div>

        {/* Technical Skills Card */}
        <div className="bento-card col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Code className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold">Technical Skills</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Programming Languages:</h3>
              <p className="text-gray-300">C, C++, Python, HTML, CSS, JavaScript (learning)</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Tools & Software:</h3>
              <p className="text-gray-300">Git, VS Code, LaTeX, MS Office Suite, Davinci Resolve, GIMP, Adobe Photoshop, Canva, Github</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">Courses & Certifications:</h3>
              <p className="text-gray-300">Harvard CS50x (ongoing), Investment Banking Job Simulation by Citi Bank (completed)</p>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="bento-card">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-200">Thakur College of Engineering and Technology</h3>
              <p className="text-gray-300">Bachelor of Computer Applications (BCA)</p>
              <p className="text-gray-400">GPA (Sem 1): 8.64</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-200">Thakur College Of Science And Commerce (HSC)</h3>
              <p className="text-gray-300">Class XII Commerce Stream</p>
              <p className="text-gray-400">Percentage: 75.67%</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-200">Thakur Public School (ICSE)</h3>
              <p className="text-gray-300">Class X Science Stream</p>
              <p className="text-gray-400">Percentage: 74.60%</p>
            </div>
          </div>
        </div>

        {/* Projects Card */}
        <div className="bento-card col-span-3">
          <div className="flex items-center gap-2 mb-6">
            <Code className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold">Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-card-hover rounded-lg">
              <h3 className="text-xl font-bold mb-3">Portfolio Website</h3>
              <p className="text-gray-300">
                Developed a personal portfolio website to showcase my skills, resume, and background.
                Built using HTML, CSS, and JavaScript, with a clean, responsive design.
              </p>
            </div>
            
            <div className="p-6 bg-card-hover rounded-lg">
              <h3 className="text-xl font-bold mb-3">C++ Banking Simulation</h3>
              <p className="text-gray-300">
                Created a banking simulation program in C++ demonstrating account management, 
                transaction processing, and error handling.
              </p>
            </div>
            
            <div className="p-6 bg-card-hover rounded-lg">
              <h3 className="text-xl font-bold mb-3">Coursework Projects</h3>
              <p className="text-gray-300">
                Completed several coding exercises and mini-projects as part of Harvard's CS50x, 
                enhancing technical and problem-solving skills.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Card */}
        <div className="bento-card col-span-3">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex">
              <div className="w-32 flex-shrink-0">
                <p className="text-gray-400">Freelance</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200">Video Editor</h3>
                <p className="text-gray-300">
                  Edited promotional and content videos for clients, enhancing visual appeal and storytelling.
                </p>
              </div>
            </div>
            
            <Separator className="bg-gray-700" />
            
            <div className="flex">
              <div className="w-32 flex-shrink-0">
                <p className="text-gray-400">2022-2024</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200">Founder | Adscup</h3>
                <p className="text-gray-300">
                  Established a startup focused on creating short-form videos and digital content for local businesses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Card */}
        <div className="bento-card col-span-3">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold">Additional Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-card-hover rounded-lg">
              <h3 className="text-xl font-bold mb-3">Achievements</h3>
              <p className="text-gray-300">
                MAH-CET AIR 382<br />
                NPAT Rank 2228 (2024)
              </p>
            </div>
            
            <div className="p-6 bg-card-hover rounded-lg">
              <h3 className="text-xl font-bold mb-3">Interests</h3>
              <p className="text-gray-300">
                Passion for AI: Regularly follow AI news and emerging trends.
              </p>
            </div>
            
            <div className="p-6 bg-card-hover rounded-lg">
              <h3 className="text-xl font-bold mb-3">Soft Skills</h3>
              <p className="text-gray-300">
                Strong analytical abilities<br />
                Effective communication<br />
                Multi-tasking capabilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
