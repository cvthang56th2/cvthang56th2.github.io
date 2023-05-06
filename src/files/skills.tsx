import React from 'react'

const Skills = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-1px border-custom-gray-200 pb-2 mb-4">💻 Skills</h2>
      <div className='flex-1 overflow-y-auto'>
        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>General Tech Stacks</h4>
        <ul className="list-disc">
          <li>Architecture Design</li>
          <li>Desktop App Development</li>
          <li>Web Development (Frontend & Backend)</li>
        </ul>
        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Programming languages</h4>
        <ul className="list-disc">
          <li>
            <p>Node.js (Javascript/Typescript)</p>
            <ul className="list-square">
              <li>
                <p>Vue.js</p>
                <ul className="list-square">
                  <li>Vue 2, Vue 3, Composition API</li>
                  <li>Vue Router</li>
                  <li>VueX, Piania</li>
                  <li>Nuxt.js</li>
                  <li>Vuetify, Element Plus, Vue Bootstrap...</li>
                  <li>Vue Testing</li>
                </ul>
              </li>
              <li>
                <p>React.js</p>
                <ul className="list-square">
                  <li>React Functions, React Hooks</li>
                  <li>Redux</li>
                  <li>React router</li>
                  <li>Next.js</li>
                  <li>Gatsby.js</li>
                </ul>
              </li>
              <li>
                <p>jQuery</p>
                <ul className="list-square">
                  <li>Slick Slider</li>
                  <li>GSAP</li>
                  <li>...</li>
                </ul>
              </li>
              <li>Mongoose</li>
              <li>Express.js</li>
              <li>Hapi.js</li>
              <li>Nest.js</li>
            </ul>
          </li>
          <li>
            <p>PHP</p>
            <ul className="list-square">
              <li>Wordpress</li>
              <li>Laravel</li>
              <li>CodeIgniter</li>
              <li>Drupal</li>
            </ul>
          </li>
          <li>
            <p>Testing</p>
            <ul className="list-square">
              <li>Unit Test function JS, PHP</li>
              <li>End to end testing: Cypress</li>
            </ul>
          </li>
          <li>
            <p>Crawling/Tools</p>
            <ul className="list-square">
              <li>Puppeteer</li>
              <li>Tool use JS</li>
            </ul>
          </li>
        </ul>
        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Databases</h4>
        <ul className="list-disc">
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>
            <p>Firebase - Firestore</p>
          </li>
        </ul>
        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Cloud</h4>
        <ul className='list-disc'>
          <li>AWS</li>
          <li>Hostinger</li>
          <li>Heroku</li>
          <li>Firebase</li>
        </ul>
        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>SCM</h4>
        <ul className='list-disc'>
          <li>Git</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills