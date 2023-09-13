
export default function Home() {
  return (
    <div className="flex flex-row justify-around h-screen bg-gray-900 p-20">
      {/* Left Side */}
      <div className="w-1/2 flex flex-col justify-between">
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
      <div className="w-1/2 flex-col space-y-20 overflow-auto">

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
                  <p className="text-slate-500">George Brown College · Canada</p>
                </h3>
              </div>
              <p className="text-sm leading-normal font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Eu lobortis elementum nibh tellus molestie nunc. Sagittis orci a scelerisque purus semper eget duis. Malesuada fames ac turpis egestas sed tempus. Et tortor at risus viverra adipiscing at in. Non consectetur a erat nam at lectus urna duis convallis. Ornare lectus sit amet est. Vivamus arcu felis bibendum ut tristique et egestas quis. Cursus in hac habitasse platea dictumst quisque. Tortor posuere ac ut consequat semper.</p>
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
                  <p className="text-slate-500">George Brown College · Canada</p>
                </h3>
              </div>
              <p className="text-sm leading-normal font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Eu lobortis elementum nibh tellus molestie nunc. Sagittis orci a scelerisque purus semper eget duis. Malesuada fames ac turpis egestas sed tempus. Et tortor at risus viverra adipiscing at in. Non consectetur a erat nam at lectus urna duis convallis. Ornare lectus sit amet est. Vivamus arcu felis bibendum ut tristique et egestas quis. Cursus in hac habitasse platea dictumst quisque. Tortor posuere ac ut consequat semper.</p>
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
                  <p className="text-slate-500">Shiraz University · Iran</p>
                </h3>
              </div>
              <p className="text-sm leading-normal font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Eu lobortis elementum nibh tellus molestie nunc. Sagittis orci a scelerisque purus semper eget duis. Malesuada fames ac turpis egestas sed tempus. Et tortor at risus viverra adipiscing at in. Non consectetur a erat nam at lectus urna duis convallis. Ornare lectus sit amet est. Vivamus arcu felis bibendum ut tristique et egestas quis. Cursus in hac habitasse platea dictumst quisque. Tortor posuere ac ut consequat semper.</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-5">
          <div className="flex flex-row text-base font-thin">
              <div className="w-1/4">
                <header className="text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">Dec 2022 –– Present</header>
              </div>
              <div className="w-3/4 flex flex-col">
                <div className="sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <p className="font-medium leading-tight text-slate-200">Project Contoller Assistant</p>
                    <p className="text-slate-500">WEIR Company · Mississauga</p>
                  </h3>
                </div>
                <p className="text-sm leading-normal font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Eu lobortis elementum nibh tellus molestie nunc. Sagittis orci a scelerisque purus semper eget duis. Malesuada fames ac turpis egestas sed tempus. Et tortor at risus viverra adipiscing at in. Non consectetur a erat nam at lectus urna duis convallis. Ornare lectus sit amet est. Vivamus arcu felis bibendum ut tristique et egestas quis. Cursus in hac habitasse platea dictumst quisque. Tortor posuere ac ut consequat semper.</p>
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
                    <p className="text-slate-500">George Brown College · Toronto</p>
                  </h3>
                </div>
                <p className="text-sm leading-normal font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Eu lobortis elementum nibh tellus molestie nunc. Sagittis orci a scelerisque purus semper eget duis. Malesuada fames ac turpis egestas sed tempus. Et tortor at risus viverra adipiscing at in. Non consectetur a erat nam at lectus urna duis convallis. Ornare lectus sit amet est. Vivamus arcu felis bibendum ut tristique et egestas quis. Cursus in hac habitasse platea dictumst quisque. Tortor posuere ac ut consequat semper.</p>
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
                    <p className="text-slate-500">George Brown College · Toronto</p>
                  </h3>
                </div>
                <p className="text-sm leading-normal font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Eu lobortis elementum nibh tellus molestie nunc. Sagittis orci a scelerisque purus semper eget duis. Malesuada fames ac turpis egestas sed tempus. Et tortor at risus viverra adipiscing at in. Non consectetur a erat nam at lectus urna duis convallis. Ornare lectus sit amet est. Vivamus arcu felis bibendum ut tristique et egestas quis. Cursus in hac habitasse platea dictumst quisque. Tortor posuere ac ut consequat semper.</p>
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
                    <p className="text-slate-500">Shiraz University · Iran</p>
                  </h3>
                </div>
                <p className="text-sm leading-normal font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Eu lobortis elementum nibh tellus molestie nunc. Sagittis orci a scelerisque purus semper eget duis. Malesuada fames ac turpis egestas sed tempus. Et tortor at risus viverra adipiscing at in. Non consectetur a erat nam at lectus urna duis convallis. Ornare lectus sit amet est. Vivamus arcu felis bibendum ut tristique et egestas quis. Cursus in hac habitasse platea dictumst quisque. Tortor posuere ac ut consequat semper.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
