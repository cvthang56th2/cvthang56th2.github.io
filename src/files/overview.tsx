const Overview = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-[1px] border-[#404040] pb-2">📖 Overview</h2>
      <div className='flex-1 overflow-y-auto text-lg'>
        <div>
          <h4 className='text-xl font-bold border-b-[1px] border-[#404040] pb-2 my-4'>Summary</h4>
          <p>Mid-Level Software Developer specializing in web application development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including PHP, Node.js (JavaScript/TypeScript). Strong background in software development and built scalable solutions.</p>
        </div>
        <div>
          <h4 className='text-xl font-bold border-b-[1px] border-[#404040] pb-2 my-4'>Experience</h4>
          <div>
            <h6 className='font-bold'>Web Developer at 9thWonder VietNam (June 2018 - June 2023)</h6>
            <p>
              Completed full lifecycle application development to enterprise business applications including requirement analysis, system design, development, unit testing, implementation, testing support, performance tuning, maintenance, and post-production support.
            </p>

            <ul className='list-disc'>
              <li>
                <p>Detailed achievements:</p>
                <ul className='list-disc'>
                  <li>Collaborated with colleagues from worldwide to implement the Disaster Recovery Project. Completed ahead of the original schedule and saved budget up to 30%.</li>
                  <li>Optimized deployment process and reduced manual work to accelerate product deployment by over 70%.</li>
                  <li>Delivered virtual and live classroom training for employees(the cumulative number of trainees exceeded 500).</li>
                </ul>
              </li>
              <li>Technologies used: Node.js, MongoDB, Mongoose, Vue.js</li>
            </ul>
            
            
            <h6 className="font-bold mt-2">Freelancer (2019 - 2022)</h6>
          </div>
        </div>
        <div>
          <h4 className='text-xl font-bold border-b-[1px] border-[#404040] pb-2 my-4'>Education</h4>
          <p className='mb-4'>
            <span className='px-2 py-1 rounded-full text-sm bg-[#3a3939] mr-1'>
            2011-2014
            </span>
            Luong The Vinh high-school
          </p>
          <p>
            <span className='px-2 py-1 rounded-full text-sm bg-[#3a3939] mr-1'>
            2014-2018
            </span>
            Nha Trang University
          </p>
          <ul>
            <li>Information Technology.</li>
          </ul>
        </div>
        <div>
          <h4 className='text-xl font-bold border-b-[1px] border-[#404040] pb-2 my-4'>Education</h4>
          <p></p>
        </div>
        <div>
          <h4 className='text-xl font-bold border-b-[1px] border-[#404040] pb-2 my-4'>Skills</h4>
          <h6 className='font-bold'>General Tech Stacks</h6>
          <ul>
            <li>Architecture Design</li>
            <li>Desktop App Development</li>
            <li>Web Development (Frontend & Backend)</li>
          </ul>
          <h6 className="font-bold">Programming languages</h6>
          <ul>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>
              <p>Node.js (Javascript/Typescript)</p>
              <ul>
                <li>
                  <p>Vue.js</p>
                  <ul>
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
                  <ul>
                    <li>React Functions, React Hooks</li>
                    <li>Redux</li>
                    <li>React router</li>
                    <li>Next.js</li>
                    <li>Gatsby.js</li>
                  </ul>
                </li>
                <li>
                  <p>jQuery</p>
                  <ul>
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
              <ul>
                <li>Wordpress</li>
                <li>Laravel</li>
                <li>Codeigniter</li>
                <li>Drupal</li>
              </ul>
            </li>
            <li>
              <p>Testing</p>
              <ul>
                <li>Unit Test function JS, PHP</li>
                <li>End to end testing: Cypress</li>
              </ul>
            </li>
            <li>
              <p>Crawling/Tools</p>
              <ul>
                <li>Puppeteer</li>
                <li>Tool use JS</li>
              </ul>
            </li>
            <li>
              <p>Firebase - Firestore</p>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='text-xl font-bold border-b-[1px] border-[#404040] pb-2 my-4'>Certificates</h4>
          <ul>
            <li>Vue Certification (2023)</li>
          </ul>
        </div>
        <div>
          <h4 className='text-xl font-bold border-b-[1px] border-[#404040] pb-2 my-4'>Accomplishments</h4>
          <ul>
            <li>...</li>
          </ul>
        </div>
        <div>
          <h4 className='text-xl font-bold border-b-[1px] border-[#404040] pb-2 my-4'>Languages</h4>
          <ul>
            <li>English: (medium)</li>
            <li>Vietnamese: Native</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Overview