import vueCertificate from '../vue-certificate.png';

const Overview = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-1px border-custom-gray-200 pb-2">📖 Overview</h2>
      <div className='flex-1 overflow-y-auto overflow-x-hidden text-lg'>
        <div>
          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>📚 Summary</h4>
          <p>As a Mid-Level Software Developer with expertise in web application development, I possess extensive experience in all stages of the development cycle for dynamic web projects. My proficiency in multiple programming languages, such as PHP and Node.js (JavaScript/TypeScript), enables me to build scalable solutions that meet diverse project requirements. Additionally, I have a strong background in software development, allowing me to design and implement efficient and effective solutions to complex problems.</p>
        </div>
        <div>
          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>👨‍💻 Experience</h4>
          <div>
            <h6 className='font-bold'>Web Developer at 9thWonder VietNam (June 2018 - Present)</h6>
            <p>
              Participated in company projects, discussing and designing the project's system, writing both backend and frontend code, writing support tools for testing or the system, and writing E2E or unit tests.
            </p>
            <p>Also known as a "funny MC" in the company's entertainment activities.</p>
            <ul className='list-disc'>
              <li>
                <p>2018-2021: <span className="font-semibold italic">Mazi</span></p>
                <ul className='list-square'>
                  <li>Landing page: <a href="https://mazi.io/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-purple-500">mazi.io</a></li>
                  <li>Developed components and created APIs for frontend use.</li>
                  <li>Wrote tests such as E2E, unit tests, and component tests.</li>
                  <li>Participated in discussions and offered solutions to solve problems.</li>
                  <li>Used technologies such as Node.js, Vue.js (frontend), Hapi.js (backend), MongoDB with Mongoose, and Cypress.</li>
                </ul>
              </li>
              <li>
                <p>End of 2021: <span className="font-semibold italic"><a href="https://www.encompasstech.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-purple-500">Encompass</a></span></p>
                <ul className='list-square'>
                  <li>Built modules and almost completely rebuilt the project.</li>
                  <li>Used technologies such as React.js, Gatsby.js, and Contentful as the database.</li>
                </ul>
              </li>
              <li>
                <p>Early 2022: <span className="font-semibold italic"><a href="https://resource.hach.com/XOS-Analyzer-Simulator/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-purple-500">XOS Simulator</a></span></p>
                <ul className='list-square'>
                  <li>Worked alone as the only programmer for the project.</li>
                  <li>Simulated the entire UI of an XOS machine (an X camera).</li>
                  <li>Used technologies such as Vue.js 3 and TailwindCSS.</li>
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
                  <li>Built modules and created custom widgets.</li>
                  <li>Wrote code tests such as E2E.</li>
                  <li>Wrote tools to help testers work faster.</li>
                  <li>Used technologies such as PHP, WordPress, Elementor, Cypress, Node.js, and MySQL.</li>
                </ul>
              </li>
              <li>
                <p>2023: <span className="font-semibold italic">Hearsay</span></p>
                <ul className='list-square'>
                  <li>Participated in phase 2 of the project, allowing users to customize colors, text, and some other system functionality.</li>
                  <li>Wrote code tests such as E2E and unit tests.</li>
                  <li>Used technologies such as PHP, Drupal, Cypress, and MySQL.</li>
                </ul>
              </li>
            </ul>
            
            <h6 className="font-bold mt-4">Freelancer projects (2019 - 2022)</h6>
            <p>Mostly doing web app projects</p>
            <ul className='list-disc'>
              <li>
                <p>Worked on web app projects such as a few CRM systems, most notably <span className="font-semibold italic">Shopee CRM</span>:</p>
                <ul className='list-square'>
                  <li>The Shopee CRM supported sellers on Shopee to manage goods, orders, customers, and automatically message customers.</li>
                  <li>Used technologies such as Node.js, Vue.js (frontend), Nest.js (backend), and MongoDB with Mongoose</li>
                </ul>
              </li>
              <li>
                <p>Worked on two other projects: <span className="font-semibold italic">DAO Management and DAO Chat</span></p>
                <ul className='list-square'>
                  <li>DAO Management, a system for managing employees in the company DAO Entertainment and assets such as audio and video files stored in the cloud securely.</li>
                  <li>DAO Chat, a web app similar to Facebook's Messenger with features such as single chat, group chat, channel chat, and the ability to send text messages, images, and sounds.</li>
                  <li>Used technologies such as Node.js, Vue.js (DAO Chat), React.js (DAO Admin), Nest.js (backend), MongoDB with Mongoose, Firebase (Firestore, Storage, FCM, Functions), and Google Drive API.</li>
                </ul>
              </li>
              <li>
                <p>Worked on the <span className="font-semibold italic">Hotato Extension (Chrome):</span></p>
                <ul className='list-square'>
                  <li>Which supported Shopee users to view more advanced information about products such as sale history, sourcing similar products, and adding products to their own</li>
                  <li>Used technologies such as Node.js, Vue.js, Vite, Shopee API, Nest.js (backend), and MongoDB with Mongoose</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>👨‍🎓 Education</h4>
          <p className='mb-4'>
            <span className='px-2 py-1 rounded-full text-sm bg-custom-gray-100 mr-1'>
            2011-2014
            </span>
            Luong The Vinh high-school
          </p>
          <p className='mb-2'>
            <span className='px-2 py-1 rounded-full text-sm bg-custom-gray-100 mr-1'>
            2014-2018
            </span>
            Nha Trang University
          </p>
          <ul className="list-disc mb-4">
            <li>University degree major: Information Technology.</li>
          </ul>
          <p className='mb-2'>
            <span className='px-2 py-1 rounded-full text-sm bg-custom-gray-100 mr-1'>
            2021-2023
            </span>
            Nha Trang University
          </p>
          <ul className="list-disc">
            <li>Master's degree major: Information Technology.</li>
          </ul>
        </div>
        <div>
          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>💻 Skills</h4>
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
          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>⚽ Hobbies</h4>
          <ul className="list-disc">
            <li>Music 🎸</li>
            <li>Creating content 🎨</li>
            <li>Sports, especially football ⚽</li>
            <li>Making things by code 👨‍💻</li>
            <li>Creating tools and automating processes 🔧</li>
          </ul>
        </div>
        <div>
          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>🥇 Certificates</h4>
          <ul className="list-disc">
            <li>Microsoft Ofice Specialist Word (2017)</li>
            <li>Microsoft Ofice Specialist Excel (2018)</li>
            <li>Vue Certification (2023)</li>
            <img src={vueCertificate} alt="thang-cao-vue-certificate" className='w-full md:w-1/2 mx-auto' />
          </ul>
        </div>
        <div>
          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>🏆 Accomplishments</h4>
          <ul className="list-disc">
            <li>Won the second prize of the Student Informatics Olympiad of Nha Trang University in 2018 🥈</li>
            <li>Join the ACM-ICPC team, the team solves 3/11 problems 🤣</li>
            <li>Finisher 15km ultra-trail Cau Dat Farm - Da Lat (2020) 🏃‍♂️</li>
            <li>Finisher 21km VnExpress Marathon - Nha Trang Marvelous 2022 🏃‍♂️</li>
          </ul>
        </div>
        <div>
          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>💡 Languages</h4>
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