import React from 'react'

const Projects = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-1px border-custom-gray-200 pb-2 mb-4">🧪 Selected Projects</h2>
      <div className='flex-1 overflow-y-auto'>
        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>
          <a href="https://wcif.cc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">wcif.cc</a>
          {' '}- Search & Data Platform
        </h4>
        <p className='italic mb-2'>Independent Project | 2025 - Present</p>
        <ul className='list-disc'>
          <li>Built and operate a high-traffic search platform serving 10K+ users and indexing 3M+ records for The Sims 4 custom content.</li>
          <li>Designed the data pipeline end to end, including scraping, ingestion, normalization, and sync workflows to keep search results current and reliable.</li>
          <li>Integrated Typesense with a Next.js + NestJS stack to deliver fast, relevant search across millions of records.</li>
          <li>Owned architecture, database design, deployment, monitoring, and production support to ensure stability and scalability.</li>
          <li>Improved discoverability and user experience through performance tuning, structured metadata, and search-focused product decisions.</li>
        </ul>

        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Saypien - AI Survey Platform</h4>
        <p className='italic mb-2'>Product Delivery | 2025</p>
        <ul className='list-disc'>
          <li>Built AI-powered survey generation and editing features with React and Next.js.</li>
          <li>Connected AI workflows to review and refinement screens so users could quickly improve generated surveys before publishing.</li>
          <li>Improved UI/UX, accessibility, and frontend performance while shipping product updates.</li>
        </ul>

        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>
          <a href="https://resume.zcareer.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Spice</a>
          {' '}- Smart Rirekisho
        </h4>
        <p className='italic mb-2'>Product Delivery | 2024</p>
        <ul className='list-disc'>
          <li>Built features for an AI-powered resume platform using React and Next.js.</li>
          <li>Integrated OpenAI-powered workflows into the resume creation flow.</li>
          <li>Supported delivery through implementation, code reviews, and cross-functional coordination.</li>
        </ul>

        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Internal Engineering Tools</h4>
        <p className='italic mb-2'>2020 - 2023</p>
        <ul className='list-disc'>
          <li>Suggested and built some internal tools that reduced repetitive development, testing, and deployment work.</li>
          <li>Created reusable testing templates and CI/CD pipelines to standardize project setup and delivery.</li>
          <li>Developed WordPress plugins and automation utilities that improved team efficiency.</li>
        </ul>
      </div>
    </div>
  )
}

export default Projects
