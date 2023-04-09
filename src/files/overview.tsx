const Overview = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-[1px] border-[#404040] pb-2">📖 Overview</h2>
      <div className='flex-1 overflow-y-auto text-lg'>
        <div>
          <h4 className='text-2xl font-bold border-b-[1px] border-[#404040] pb-2 my-4'>Summary</h4>
          <p>Mid-Level Software Developer specializing in web application development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including PHP, Node.js (JavaScript/TypeScript). Strong background in software development and built scalable solutions.</p>
        </div>
        <div>
          <h4 className='text-2xl font-bold border-b-[1px] border-[#404040] pb-2 my-4'>Experience</h4>
          <div>
            <h6 className='font-bold'>Web Developer at 9thWonder VietNam (June 2018 - June 2023)</h6>
            <p>
              Participate in company projects, discuss, design the project's system, write both BE and FE code, write support tools for test or system, write E2E test or unit test. Also known as a "funny MC" in the company's entertainment activities.
            </p>
            <ul className='list-disc'>
              <li>
                <p>2018-2021: <span className="font-semibold italic">Mazi</span></p>
                <ul className='list-square'>
                  <li>Landing page: <a href="https://mazi.io/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-purple-500">mazi.io</a></li>
                  <li>Developing components.</li>
                  <li>Create APIs for FE to use.</li>
                  <li>Writing Tests: E2E, Unit Test, Component Test.</li>
                  <li>Participate in discussions, offer solutions to solve problems.</li>
                  <li>Technologies used: Node.js, Vue.js (FE), Hapi.js (BE), MongoDB - Mongoose, Cypress</li>
                </ul>
              </li>
              <li>
                <p>Cuối 2021: <span className="font-semibold italic"><a href="https://www.encompasstech.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-purple-500">Encompass</a></span></p>
                <ul className='list-square'>
                  <li>Build modules, almost completely rebuild</li>
                  <li>Technologies used: React.js, Gatsby.js, Contentful (DB)</li>
                </ul>
              </li>
              <li>
                <p>Đầu 2022: <span className="font-semibold italic"><a href="https://resource.hach.com/XOS-Analyzer-Simulator/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-purple-500">XOS Simulator</a></span></p>
                <ul className='list-square'>
                  <li>This project has only me as a programmer</li>
                  <li>Simulate the entire UI of an XOS machine - an X camera</li>
                  <li>Technologies used: Vue.js 3, TailwindCSS</li>
                </ul>
              </li>
              <li>
                <p>2022: 
                  <span className="font-semibold italic">
                    <a href="https://www.braincare-dtc.com/" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 hover:text-purple-500">BrainCare</a>,
                    <a href="https://exaktime.com/" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 hover:text-purple-500">ExakTime</a>,
                    <a href="http://gravinawindows.com/" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 hover:text-purple-500">Gravina Windows</a>,
                    <a href="https://syndeoinstitute.org/" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 hover:text-purple-500">Syndeo Institute</a>
                  </span>
                </p>
                <ul className='list-square'>
                  <li>Build modules</li>
                  <li>Create Custom widgets</li>
                  <li>Write code test: E2E</li>
                  <li>Write tools to help testers work faster</li>
                  <li>Technologies used: PHP, Wordpress, Elementor, Cypress, NodeJS, MySQL</li>
                </ul>
              </li>
              <li>
                <p>2023: <span className="font-semibold italic">Hearsay</span></p>
                <ul className='list-square'>
                  <li>Participate in phase 2 of the project: this phase allows users to customize colors, text, and some other system functionality</li>
                  <li>Write code test: E2E, Unit Test</li>
                  <li>Technologies used: PHP, Drupal, Cypress, MySQL</li>
                </ul>
              </li>
            </ul>
            
            <h6 className="font-bold mt-2">Participate in a few Freelancer projects (2019 - 2022)</h6>
            <p>Mostly doing web app projects</p>
            <ul className='list-disc'>
              <li>
                <p>A few CRM systems, most notably <span className="font-semibold italic">Shopee CRM</span>:</p>
                <ul className='list-square'>
                  <li>A system to support sellers on Shopee to manage goods, orders, manage customers, automatically message customers...</li>
                  <li>Technologies used: Node.js, Vue.js (FE), Nest.js (BE), MongoDB - Mongoose</li>
                </ul>
              </li>
              <li>
                <p><span className="font-semibold italic">DAO Management and DAO Chat</span></p>
                <ul className='list-square'>
                  <li>DAO Management is a system for managing employees in the company DAO Entertainment. There is also management of company assets, files such as audio, video, ... all need to be stored in the cloud and secure.</li>
                  <li>A Chat web app similar to Facebook's Messenger, with features such as single chat, group chat, channel chat,... send text messages, images, sounds,...</li>
                  <li>Technologies used: Node.js, Vue.js (DAO Chat), React.js (DAO Admin), Nest.js (BE), MongoDB - Mongoose, Firebase (Firestore, Storage, FCM, Functions), Google Drive API.</li>
                </ul>
              </li>
              <li>
                <p><span className="font-semibold italic">Hotato Extension (Chrome):</span></p>
                <ul className='list-square'>
                  <li>The extension supports Shopee users to view more advanced information of the item such as sale history, sourcing similar products, adding products to their own, ...</li>
                  <li>Technologies used: Node.js, Vue.js, Vite, Shopee API, Nest.js (BE), MongoDB - Mongoose</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className='text-2xl font-bold border-b-[1px] border-[#404040] pb-2 my-4'>Education</h4>
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
          <ul className="list-disc">
            <li>University degree major: Information Technology.</li>
          </ul>
          <p>
            <span className='px-2 py-1 rounded-full text-sm bg-[#3a3939] mr-1'>
            2021-2023
            </span>
            Nha Trang University
          </p>
          <ul className="list-disc">
            <li>Master's degree major: Information Technology.</li>
          </ul>
        </div>
        <div>
          <h4 className='text-2xl font-bold border-b-[1px] border-[#404040] pb-2 my-4'>Skills</h4>
          <h6 className='font-bold'>General Tech Stacks</h6>
          <ul className="list-disc">
            <li>Architecture Design</li>
            <li>Desktop App Development</li>
            <li>Web Development (Frontend & Backend)</li>
          </ul>
          <h6 className="font-bold">Programming languages</h6>
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
          <h6 className="font-bold">Databases</h6>
          <ul className="list-disc">
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>
              <p>Firebase - Firestore</p>
            </li>
          </ul>
          <h6 className="font-bold">Cloud</h6>
          <ul className='list-disc'>
            <li>AWS</li>
            <li>Hostinger</li>
            <li>Heroku</li>
            <li>Firebase</li>
          </ul>
          <h6 className="font-bold">SCM</h6>
          <ul className='list-disc'>
            <li>Git</li>
          </ul>
        </div>
        <div>
          <h4 className='text-2xl font-bold border-b-[1px] border-[#404040] pb-2 my-4'>Hobbies</h4>
          <ul className="list-disc">
            <li>🎸 Music, 🎨design, art</li>
            <li>⚽ Sports, especially football</li>
            <li>👨‍💻 Making thing by code</li>
            <li>🔧 Like to create tools, auto</li>
          </ul>
        </div>
        <div>
          <h4 className='text-2xl font-bold border-b-[1px] border-[#404040] pb-2 my-4'>Certificates</h4>
          <ul className="list-disc">
            <li>Microsoft Ofice Specialist Word (2017)</li>
            <li>Microsoft Ofice Specialist Excel (2018)</li>
            <li>Vue Certification (2023)</li>
          </ul>
        </div>
        <div>
          <h4 className='text-2xl font-bold border-b-[1px] border-[#404040] pb-2 my-4'>Accomplishments</h4>
          <ul className="list-disc">
            <li>Second prize in student olympics at Nha Trang University in 4th year of university.</li>
            <li>Participated in the national student olympics but had no achievements.</li>
            <li>Join the ACM-ICPC team, the team solves 3/11 problems 🤣</li>
            <li>Finisher 15km ultra-trail Cau Dat Farm - Da Lat (2020), Finisher 21km VnExpress Marathon - Nha Trang Marvelous 2022.</li>
          </ul>
        </div>
        <div>
          <h4 className='text-2xl font-bold border-b-[1px] border-[#404040] pb-2 my-4'>Languages</h4>
          <ul className="list-disc">
            <li>English: (medium)</li>
            <li>Vietnamese: Native</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Overview