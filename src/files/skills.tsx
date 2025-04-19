import React from 'react'

const Skills = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-1px border-custom-gray-200 pb-2 mb-4">💻 Skills</h2>
      <div className='flex-1 overflow-y-auto'>
        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Programming Languages</h4>
        <ul className="list-disc">
          <li>HTML5, CSS3, JavaScript</li>
          <li>Node.js</li>
          <li>PHP</li>
        </ul>

        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Frameworks/ Platforms</h4>
        <ul className="list-disc">
          <li>
            <p>Vue.js</p>
            <ul className="list-square">
              <li>Vue.js, Vuex, Pinia, Nuxt.js</li>
              <li>Vue testing</li>
            </ul>
          </li>
          <li>
            <p>React.js</p>
            <ul className="list-square">
              <li>React.js, Redux, Zustand</li>
              <li>Next.js, Gatsby.js</li>
              <li>React testing, React Native</li>
            </ul>
          </li>
          <li>
            <p>Build Tools</p>
            <ul className="list-square">
              <li>Webpack, Babel, ES6, Vite</li>
              <li>jQuery, GSAP, Bootstrap</li>
            </ul>
          </li>
          <li>
            <p>Backend</p>
            <ul className="list-square">
              <li>Express.js, Hapi.js, Nest.js</li>
              <li>WordPress, Laravel, Drupal</li>
            </ul>
          </li>
          <li>
            <p>Testing</p>
            <ul className="list-square">
              <li>PHPUnit</li>
              <li>Chai, Jest</li>
              <li>Cypress and Cucumber.js</li>
              <li>Puppeteer</li>
            </ul>
          </li>
        </ul>

        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Database Management Systems</h4>
        <ul className="list-disc">
          <li>MongoDB</li>
          <li>MySQL</li>
        </ul>

        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Cloud</h4>
        <ul className='list-disc'>
          <li>AWS</li>
          <li>Supabase</li>
          <li>Hostinger</li>
          <li>Firebase</li>
        </ul>

        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Languages</h4>
        <ul className='list-disc'>
          <li>English: communicate</li>
          <li>Vietnamese: native</li>
        </ul>

        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Soft Skills</h4>
        <ul className='list-disc'>
          <li>Time management</li>
          <li>Teamwork</li>
        </ul>

        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Others</h4>
        <ul className='list-disc'>
          <li>Good understanding of OOP methodologies, SOLID principles, design patterns</li>
          <li>Experience with Agile and Scrum development process</li>
          <li>Ability to use Photoshop. Can do simple design: logo, banner, poster....</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills