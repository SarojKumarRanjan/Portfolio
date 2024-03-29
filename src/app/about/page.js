

export default function About() {
  return (
    
      
      <main className="flex-1 pt-8">
        <h1 className="text-3xl font-[600] mb-6">
          
          About Me</h1>
        <div className="grid grid-cols-3 gap-6 mb-8">
          <img
            alt="City"
            className="rounded-lg shadow-lg"
            height="300"
            src="https://iili.io/JhfDSdF.jpg"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
          <img
            alt="Balloons"
            className="rounded-lg shadow-lg"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
          <img
            alt="Night Town"
            className="rounded-lg shadow-lg"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
        <p className="text-gray-500 mb-4">
          Hey there, I'm <span className="bg-stone-200 p-1 rounded-md">Saroj Kumar Ranajn</span> - a passionate developer. Welcome to
          my corner of the digital world!
        </p>
        <p className="text-gray-500 mb-4">
          Since the early days of my journey, I've been captivated by the art of crafting exceptional digital
          experiences. As a developer, I thrive on turning lines of code into functional and elegant solutions. My goal
          is to not just create software, but to build digital marvels that seamlessly merge form and function.
        </p>
        <p className="text-gray-500">
          But my journey doesn't stop at coding. With a heart full of words and a mind brimming with ideas, I've
          ventured into the realm of writing. From tech articles that unravel complex concepts to creative tales that
          ignite the imagination, I weave words to inform, entertain, and inspire.
        </p>
      </main>
    
  )
}









