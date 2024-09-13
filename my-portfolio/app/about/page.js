import '../../app/globals.css';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      {/* Header */}
      <header className="text-center mb-5">
        <h1 className="text-4xl font-bold mb-4">About <span className="text-red-500">Me</span></h1>
        <p className="text-lg text-gray-700">
           Here's a little bit about who I am and what I'm passionate about.
        </p>
      </header>

      {/* Introduction */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 mx-auto max-w-4xl">
          <p className="text-gray-800 leading-loose">
            I am an ambitious student pursuing a degree in Computer Science and Statistics at Oregon State University.
            My background in software development and hospitality has prepared me to be a team player, problem solver,
            and great communicator who excels in facing challenges.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="text-center mb-12 w-full max-w-4xl px-4">
        <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-4 gap-4 mx-auto">
          <img className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C/C++"/>
          <img className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker"/>
          <img className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript"/>
          <img className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="Linux"/>
          <img className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg" alt="Pandas"/>
          <img className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python"/>
          <img className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React"/>
          <img className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" alt="SciKit-Learn"/>
          <img className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" alt="Express"/>
          <img className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB"/>
          <img className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MySQL"/>
          <img className="skills mx-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" alt="PostgreSQL"/>
        </div>
      </section>
    </main>
  );
}
