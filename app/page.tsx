
export default function Home() {
  return (
    <div className="flex flex-row justify-around h-screen bg-green-5 p-20">
      <div className="w-1/2 flex flex-col justify-between">
        <div className="space-y-2">
          <p className="font-extrabold text-4xl">Sadaf Asadollahi</p>
          <p className="font-medium text-lg">Software Developer</p>
          <p className="font-thin text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div>
          <p>About</p>
          <p>Education</p>
          <p>Experience</p>
        </div>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"></link>
        <div className="space-x-5">
          <i className="fab fa-github fa-2x"></i>
          <i className="fa-brands fa-linkedin fa-2x"></i>
          <i className="fa-brands fa-google fa-2x"></i>
        </div>
      </div>
      <div className="w-1/2 flex-col">#2 HALF</div>
    </div>
  )
}
