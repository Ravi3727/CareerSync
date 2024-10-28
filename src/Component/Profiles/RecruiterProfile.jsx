import React from 'react'

const RecruiterProfile = () => {
  return (
    <>
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-lg space-y-4">
      {/* Company Section */}
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 rounded-full"
          src="https://via.placeholder.com/150"
          alt="Company Logo"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Company Name</h2>
          <p className="text-gray-600">Location: San Francisco, CA</p>
        </div>
      </div>

      {/* Job Details Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Job Title: Front-End Developer</h3>
        <p className="text-gray-700">Experience Level: 2-4 years</p>
        <p className="text-gray-700">Salary: $80,000 - $100,000 per year</p>
        <p className="text-gray-700">Job Type: Full-time</p>

        {/* Job Description */}
        <div>
          <h4 className="text-lg font-medium text-gray-800">Job Description:</h4>
          <p className="text-gray-600 leading-relaxed">
            We are looking for a skilled Front-End Developer to join our dynamic team. In this role, you will be
            responsible for developing and implementing user interface components using React.js and Tailwind CSS.
            Applicants should have a strong understanding of web development principles and a passion for building
            responsive and interactive web applications.
          </p>
        </div>

        {/* Responsibilities */}
        <div>
          <h4 className="text-lg font-medium text-gray-800">Responsibilities:</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Develop user interface components for our main platform.</li>
            <li>Collaborate with the design team to ensure UX/UI consistency.</li>
            <li>Optimize application for maximum speed and scalability.</li>
            <li>Participate in code reviews and provide constructive feedback.</li>
          </ul>
        </div>

        {/* Requirements */}
        <div>
          <h4 className="text-lg font-medium text-gray-800">Requirements:</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Experience with React.js and Tailwind CSS.</li>
            <li>Strong knowledge of JavaScript, HTML, and CSS.</li>
            <li>Familiarity with RESTful APIs and Git.</li>
            <li>Good problem-solving skills and attention to detail.</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <button className="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Save
        </button>
      </div>
    </div>    </>
  )
}

export default RecruiterProfile
