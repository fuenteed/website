import '../../app/globals.css';
import Image from 'next/image';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      {/* Header */}
      <header className="text-center mb-5">
        <h1 className="text-4xl font-bold mb-4">About <span className="text-red-500">Me</span></h1>
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
      <section className="text-center mb-12 w-full max-w-4xl px-4">
        <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-4 gap-4 mx-auto">
          <Image width={80} height={80} className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C/C++"/>
          <Image width={80} height={80} className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker"/>
          <Image width={80} height={80}className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript"/>
          <Image width={80} height={80} className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="Linux"/>
          <Image width={80} height={80} className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg" alt="Pandas"/>
          <Image width={80} height={80} className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python"/>
          <Image width={80} height={80} className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React"/>
          <Image width={80} height={80} className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" alt="SciKit-Learn"/>
          <Image width={80} height={80} className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" alt="Express"/>
          <Image width={80} height={80} className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB"/>
          <Image width={80} height={80} className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MySQL"/>
          <Image width={80} height={80} className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" alt="PostgreSQL"/>
        </div>
      </section>
    </main>
  );
}
