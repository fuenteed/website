import Image from 'next/image';

const EducationTimeline = () => {
  const educationData = [
    {
      school: 'Taft High School',
      location: 'Lincoln City, Oregon',
      period: '2016 - 2020',
      degree: 'High School Diploma',
      image: '/images/Taft_High_School_Seal.png',
    },
    {
      school: 'Chemeketa Community College',
      location: 'Salem, Oregon',
      period: '2020 - 2022',
      degree: 'Associates Transfer Degree in Computer Science',
      coursework: [
        'Computer Architecture & Assembly',
        'Object-Oriented Design',
        'Data Structures & Algorithms',
        'Web Development',
      ],
      image: '/images/chemeketa-college.png',
    },
    {
      school: 'Oregon State University',
      location: 'Corvallis, Oregon',
      period: '2022 - Present',
      degree: 'Bachelors in Computer Science (Minor: Statistics)',
      graduation: 'Expected June 2025',
      coursework: [
        'Operating Systems 1 and 2',
        'Machine Learning & Data Mining',
        'Software Engineering Practices',
        'Cloud Application Development',
        'Analysis of Algorithms',
        'Mathematical Statistics',
        'Parallel Programming',
      ],
      image: '/images/ScErYmP0_400x400.jpg',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Education</h1>
      <div className="space-y-16">
        {educationData.map((edu, index) => (
          <div key={index} className="relative">
            {/* Timeline connector */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-gray-300">
                <Image
                  src={edu.image}
                  alt={`${edu.school} image`}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-semibold">{edu.school}</h2>
                <p className="text-gray-500">{edu.location}</p>
                <p className="text-gray-400 italic">{edu.period}</p>
                <p className="mt-4">{edu.degree}</p>
                {edu.coursework && (
                  <ul className="mt-4 space-y-1 text-gray-600">
                    {edu.coursework.map((course, i) => (
                      <li key={i}>- {course}</li>
                    ))}
                  </ul>
                )}
                {edu.graduation && (
                  <p className="mt-4 text-gray-500">Expected Graduation: {edu.graduation}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
