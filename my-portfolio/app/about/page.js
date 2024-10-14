import '../../app/globals.css';
import Image from 'next/image';


export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      {/* Header */}
      <header className="text-center mb-5 text-4xl font-extrabold">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-700">
          Here&apos;s a little bit about who I am and what I&apos;m passionate about.
        </p>
      </header>

      {/* Introduction */}
      <section className="text-center mb-12">
        <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 mx-auto max-w-4xl">
          <p className="text-gray-800 leading-loose">
            I am an ambitious student pursuing a degree in Computer Science and Statistics at Oregon State University.
            My background in software development and hospitality has prepared me to be a team player, problem solver,
            and great communicator who excels in facing challenges. I am seeking full time employment in the field of software development.
            I am interested in machine learning, data science, as well as embedded development.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="text-center  w-full  px-4 flex grid-cols-3 ">

      <div className="relative m-5 pt-1 w-1/3 ">
        <h2 className='text-center mb-10 text-2xl font-extrabold'>Languages</h2>

      <div className='mb-5'>
        <div className="mb-2 flex h-2 overflow-hidden rounded bg-gray-100 text-xs">
          <div style={{width: '80%'}} className="bg-red-700"></div>
        </div>
        <div className="mb-2 flex items-center justify-between text-sm">
          <div className="text-gray-600 font-bold">C/C++</div>
          <div className="text-gray-600">Highly Proficient</div>
        </div>
      </div>


      <div className='mb-5'>
        <div className="mb-2 flex h-2 overflow-hidden rounded bg-gray-100 text-xs">
          <div style={{width: '80%'}} className="bg-red-700"></div>
        </div>
        <div className="mb-2 flex items-center justify-between text-sm">
          <div className="text-gray-600 font-bold">Python</div>
          <div className="text-gray-600">Highly Proficient</div>
        </div>
      </div>

      <div className='mb-5'>
        <div className="mb-2 flex h-2 overflow-hidden rounded bg-gray-100 text-xs">
          <div style={{width: '60%'}} className="bg-red-500"></div>
        </div>
        <div className="mb-2 flex items-center justify-between text-sm">
          <div className="text-gray-600 font-bold">JavaSript</div>
          <div className="text-gray-600">Proficient</div>
        </div>
      </div>

      <div className='mb-5'>
        <div className="mb-2 flex h-2 overflow-hidden rounded bg-gray-100 text-xs">
          <div style={{width: '30%'}} className="bg-red-400"></div>
        </div>
        <div className="mb-2 flex items-center justify-between text-sm">
          <div className="text-gray-600 font-bold">Rust</div>
          <div className="text-gray-600">Learning the Fundamentals</div>
        </div>
      </div>


      </div>

      <div className="relative m-5 pt-1 w-1/3">
          <h2 className='text-center mb-10 text-2xl font-extrabold'>Frameworks/Libraries</h2>



        <div className='mb-5'>
          <div className="mb-2 flex h-2 overflow-hidden rounded bg-gray-100 text-xs">
            <div style={{width: '80%'}} className="bg-red-700"></div>
          </div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <div className="text-gray-600 font-bold">Node.JS</div>
            <div className="text-gray-600">Highly Proficient</div>
          </div>
        </div>

        <div className='mb-5'>
          <div className="mb-2 flex h-2 overflow-hidden rounded bg-gray-100 text-xs">
            <div style={{width: '70%'}} className="bg-red-600"></div>
          </div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <div className="text-gray-600 font-bold">REST Framework</div>
            <div className="text-gray-600">Proficient</div>
          </div>
        </div>

        <div className='mb-5'>
          <div className="mb-2 flex h-2 overflow-hidden rounded bg-gray-100 text-xs">
            <div style={{width: '70%'}} className="bg-red-600"></div>
          </div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <div className="text-gray-600 font-bold">Pandas/Numpy</div>
            <div className="text-gray-600">Proficient</div>
          </div>
        </div>

        <div className='mb-5'>
          <div className="mb-2 flex h-2 overflow-hidden rounded bg-gray-100 text-xs">
            <div style={{width: '80%'}} className="bg-red-600"></div>
          </div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <div className="text-gray-600 font-bold">Git/Github</div>
            <div className="text-gray-600">Highly Proficient</div>
          </div>
        </div>

      </div>


      <div className='relative m-5 pt-1 w-1/3'>
        <h2 className='text-center mb-10 text-2xl font-extrabold'>Concepts</h2>
        

        <div className='mb-5'>
          <div className="mb-2 flex h-2 overflow-hidden rounded bg-gray-100 text-xs">
            <div style={{width: '70%'}} className="bg-red-600"></div>
          </div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <div className="text-gray-600 font-bold">Machine Learning</div>
            <div className="text-gray-600">Proficient</div>
          </div>
        </div>


        <div className='mb-5'>
          <div className="mb-2 flex h-2 overflow-hidden rounded bg-gray-100 text-xs">
            <div style={{width: '90%'}} className="bg-red-800"></div>
          </div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <div className="text-gray-600 font-bold">Object Oriented Design/Programming</div>
            <div className="text-gray-600">Highly Proficient</div>
          </div>
        </div>

        <div className='mb-5'>
          <div className="mb-2 flex h-2 overflow-hidden rounded bg-gray-100 text-xs">
            <div style={{width: '70%'}} className="bg-red-600"></div>
          </div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <div className="text-gray-600 font-bold">Full-Stack development</div>
            <div className="text-gray-600">Proficient</div>
          </div>
        </div>

        <div className='mb-5'>
          <div className="mb-2 flex h-2 overflow-hidden rounded bg-gray-100 text-xs">
            <div style={{width: '70%'}} className="bg-red-600"></div>
          </div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <div className="text-gray-600 font-bold">Linear Algebra + Mathematical Stats</div>
            <div className="text-gray-600">Proficient</div>
          </div>
        </div>

        <div className='mb-5'>
          <div className="mb-2 flex h-2 overflow-hidden rounded bg-gray-100 text-xs">
            <div style={{width: '60%'}} className="bg-red-500"></div>
          </div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <div className="text-gray-600 font-bold">Parallel Computing/ GPU Computing</div>
            <div className="text-gray-600">Proficient</div>
          </div>
        </div>
              
      </div>

      </section>
    </main>
  );
}