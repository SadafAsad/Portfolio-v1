
export default function Home() {
  return (
    <div className="flex flex-row justify-around h-screen bg-gray-900 p-20">
      {/* Left Side */}
      <div className="w-1/2 flex flex-col justify-between ml-5 p-5">
        <div className="space-y-3">
          <h1 className="font-bold text-4xl tracking-wide text-slate-200 sm:text-5xl">Sadaf Asadollahi</h1>
          <h2 className="font-medium text-lg text-slate-200 sm:text-xl">Software Developer</h2>
          <p className="font-thin text-base max-w-xs leading-normal">I develop user-friendly, feature-rich mobile applications.</p>
        </div>

        
        <div>
          <p>About</p>
          <p>Education</p>
          <p>Experience</p>
        </div>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"></link>
        <div className="space-x-5">
          <i className="fab fa-github fa-2x hover:text-slate-200"></i>
          <i className="fa-brands fa-linkedin fa-2x hover:text-slate-200"></i>
          <i className="fa-brands fa-google fa-2x hover:text-slate-200"></i>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex-col space-y-20 overflow-auto mr-5 p-5">

        {/* About */}
        <div className="font-thin text-base space-y-4">
          <p>My <a className="font-medium">passion for technology and coding</a> led me to pursue a degree in Computer Science and Engineering, where I honed my computer science expertise and had the privilege of sharing my knowledge as a teaching assistant.</p>
          <p>As a Project Controller Assistant at WEIR Minerals, I've excelled in <a className="font-medium">clear communication and collaboration</a> through regular project meetings and detailed client updates. During my roles at George Brown College, my <a className="font-medium">adaptable</a> approach shone as I tailored workshops and provided feedback to meet evolving student needs.</p>
          <p>Currently, my focus is on cultivating a career in software engineering. My aspiration is to play a pivotal role in crafting high-quality applications within a collaborative work environment that values shared goals and principles.</p>
        </div>

        {/* Education */}
        <div className="space-y-5">
          <div className="flex flex-row text-base font-thin">
            <div className="w-1/4">
              <header className="text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2023 –– 2023</header>
            </div>
            <div className="w-3/4 flex flex-col">
              <div className="sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <p className="font-medium leading-tight text-slate-200">Cyber Security · Postgraduate</p>
                  <p className="text-slate-500 text-sm mt-1">George Brown College · Canada</p>
                </h3>
              </div>
              <p className="text-sm leading-normal font-thin mt-3">Established a solid footing in network security, cryptography, incident response, ethical hacking, and compliance, while possessing technical proficiency and a deep grasp of cybersecurity principles.</p>
            </div>
          </div>

          <div className="flex flex-row text-base font-thin">
            <div className="w-1/4">
              <header className="text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2022 –– 2022</header>
            </div>
            <div className="w-3/4 flex flex-col">
              <div className="sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <p className="font-medium leading-tight text-slate-200">Mobile Application Development and Strategy · Postgraduate</p>
                  <p className="text-slate-500 text-sm mt-1">George Brown College · Canada</p>
                </h3>
              </div>
              <p className="text-sm leading-normal font-thin mt-3">Proficient in both Java and Swift, enabling me to craft applications for iOS and Android platforms. Cultivated expertise in React Native for seamless cross-platform development and possess a solid grasp of architectural design patterns, ensuring the creation of robust and versatile applications.</p>
            </div>
          </div>

          <div className="flex flex-row text-base font-thin">
            <div className="w-1/4">
              <header className="text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2016 –– 2021</header>
            </div>
            <div className="w-3/4 flex flex-col">
              <div className="sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <p className="font-medium leading-tight text-slate-200">Computer Science and Engineering · Bachelor</p>
                  <p className="text-slate-500 text-sm mt-1">Shiraz University · Iran</p>
                </h3>
              </div>
              <p className="text-sm leading-normal font-thin mt-3">Equiped me with Object-Oriented Programming, RDBMS, Data Structures, and Algorithms, allowing me to design and build robust, efficient software solutions. Additionally, honed my skills in a wide array of essential software development areas, including multi-language proficiency and version control.</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-5">
          <div className="flex flex-row text-base font-thin">
              <div className="w-1/4">
                <header className="text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 pr-5">Dec 2022 –– Present</header>
              </div>
              <div className="w-3/4 flex flex-col">
                <div className="sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <p className="font-medium leading-tight text-slate-200">Project Contoller Assistant</p>
                    <p className="text-slate-500 text-sm mt-1">WEIR Company · Mississauga</p>
                  </h3>
                </div>
                <p className="text-sm leading-normal font-thin mt-3">Contributed to project management by attending regular progress meetings, meeting deadlines, and providing detailed weekly client updates. Additionally, utilized analytical skills to create predictive S-curve graphs for project performance assessment.</p>
              </div>
          </div>

          <div className="flex flex-row text-base font-thin">
              <div className="w-1/4">
                <header className="text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">Jul –– Oct 2022</header>
              </div>
              <div className="w-3/4 flex flex-col">
                <div className="sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <p className="font-medium leading-tight text-slate-200">Student Success Program Administrative Coordinator</p>
                    <p className="text-slate-500 text-sm mt-1">George Brown College · Toronto</p>
                  </h3>
                </div>
                <p className="text-sm leading-normal font-thin mt-3">Crafted and led academic workshops, conducted effective meetings, and collaborated with coaches to improve student engagement and success strategies, highlighting my instructional, communication, and teamwork skills.</p>
              </div>
          </div>

          <div className="flex flex-row text-base font-thin">
              <div className="w-1/4">
                <header className="text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">Jan –– Jul 2022</header>
              </div>
              <div className="w-3/4 flex flex-col">
                <div className="sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <p className="font-medium leading-tight text-slate-200">Student Success Coach</p>
                    <p className="text-slate-500 text-sm mt-1">George Brown College · Toronto</p>
                  </h3>
                </div>
                <p className="text-sm leading-normal font-thin mt-3">Utilized problem-solving skills to collaborate with faculty in academic support, fostering interactive learning through workshop proposals and materials, and delivered personalized coaching.</p>
              </div>
          </div>

          <div className="flex flex-row text-base font-thin">
              <div className="w-1/4">
                <header className="text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2017 –– 2019</header>
              </div>
              <div className="w-3/4 flex flex-col">
                <div className="sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <p className="font-medium leading-tight text-slate-200">Teaching Assistant</p>
                    <p className="text-slate-500 text-sm mt-1">Shiraz University · Iran</p>
                  </h3>
                </div>
                <p className="text-sm leading-normal font-thin mt-3">Assisted students in mastering programming fundamentals, reinforcing problem-solving skills through tests and exercises. Also, provided timely and professional responses to student inquiries, demonstrating communication and technical proficiency in programming concepts.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
