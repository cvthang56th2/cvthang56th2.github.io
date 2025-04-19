import React from 'react'

const Projects = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-1px border-custom-gray-200 pb-2 mb-4">🧪 Projects</h2>
      <div className='flex-1 overflow-y-auto'>
        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>9thWonder VietNam</h4>
        <ul className='list-disc [&>li]:mb-6'>
          <li>
            <p>2018-2021: <a href="https://mazi.io/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Mazi</a></p>
            <ul className='list-square'>
              <li>Built reuse-able components for front-end, design database structure and created some REST APIs in the back-end side.</li>
              <li>Wrote tests such as E2E, unit tests, and component tests.</li>
              <li>Participated in discussions and offered some solutions to solve problems.</li>
              <li><span className='font-semibold'>Used technologies</span>: Node.js, Vue.js, Hapi.js, MongoDB, Redis, ElasticSearch, Jest, Cypress, Cucumber.js and AWS (EC2, S3).</li>
            </ul>
          </li>
          <li>
            <p>2022: <span className="font-semibold italic">Email Validation Checker</span></p>
            <ul className='list-square'>
              <li>Designed UI/UX and created a tool that helps input HTML emails and validates the input according to all the rules.</li>
              <li><span className='font-semibold'>Used technologies</span>: HTML, CSS, TailwindCSS, JavaScript, jQuery.</li>
            </ul>
          </li>
          <li>
            <p>2022: <span className="font-semibold italic">Cypress Template</span></p>
            <ul className='list-square'>
              <li>Built source code structure, wrote utility functions to support test code writing and implemented for some common test cases.</li>
              <li>Collaborated with testers to suggest common test cases.</li>
              <li>Created a tool to automatically generate feature/scenario files.</li>
              <li>Supported newbies and testers how to write automation testing, how to write Cucumber file and Cypress code.</li>
              <li><span className='font-semibold'>Used technologies</span>: Cypress, Cucumber.js.</li>
            </ul>
          </li>
          <li>
            <p>2022: <a href="https://www.bosley.com/scheduler/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Bosley</a></p>
            <ul className='list-square'>
              <li>Participated in writing automation tests.</li>
              <li>Created a tool to automatically generate feature/scenario files, used to test the website's scheduling process.</li>
              <li><span className='font-semibold'>Used technologies</span>: Node.js, Cypress, Cucumber.js.</li>
            </ul>
          </li>
          <li>
            <p>2022: <a href="https://www.encompasstech.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Encompass</a></p>
            <ul className='list-square'>
              <li>Designed fields, built UI components, and query data for components.</li>
              <li><span className='font-semibold'>Used technologies</span>: React.js, Gatsby.js, GraphQL and Contentful as the database.</li>
            </ul>
          </li>
          <li>
            <p>2022: <a href="https://resource.hach.com/XOS-Analyzer-Simulator/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">XOS</a></p>
            <ul className='list-square'>
              <li>Worked alone as the only developer for the project.</li>
              <li>Simulated the entire UI of an XOS machine (an X camera).</li>
              <li><span className='font-semibold'>Used technologies</span>: Vue.js 3 and TailwindCSS.</li>
            </ul>
          </li>
          <li>
            <p>2022-2023: <span className="font-semibold italic">WordPress websites</span></p>
            <ul className='list-square'>
              <li>
                <div className='flex gap-1 flex-wrap'>
                  Lived sites:
                  <a href="https://braincare-dtc.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">BrainCare</a>,
                  <a href="https://www.exaktime.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">ExakTime</a>,
                  <a href="https://www.gravinawindows.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Gravina Windows</a>,
                  <a href="https://syndeoinstitute.org/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Syndeo Institute</a>,
                  <a href="https://www.babcockpower.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">BabcockPower</a>
                </div>
              </li>
              <li>Built modules, created custom widgets, all front-end is built in perfect-pixel manner.</li>
              <li>Optimized website performance by following Google's page speed score.</li>
              <li>Wrote tests such as E2E and unit tests.</li>
              <li>Suggested and created plugins, tools to help testers work faster.</li>
              <li><span className='font-semibold'>Used technologies</span>: jQuery, GSAP, TailwindCSS, PHP, WordPress, Elementor, Vue.js, Cypress, Cucumber.js, PHPUnit and MySQL.</li>
            </ul>
          </li>
          <li>
            <p>2023: <span className="font-semibold italic">Hearsay</span></p>
            <ul className='list-square'>
              <li>Participated in phase 2 of the project, modified code to allowing customers to customize colors, text, and some other system functionality.</li>
              <li>Updated cron job for generating customer's site according to new requirements.</li>
              <li>Wrote tests such as E2E and unit tests.</li>
              <li><span className='font-semibold'>Used technologies</span>: PHP, Drupal, Cypress, and MySQL.</li>
            </ul>
          </li>
          <li>
            <p>2023: <span className="font-semibold italic">VIOC Oil Change</span></p>
            <ul className='list-square'>
              <li>Optimized REST APIs and improved MySQL queries for a table containing around 20 million records, resulting in a 10x performance boost.</li>
              <li><span className='font-semibold'>Used technologies</span>: PHP, WordPress, JavaScript, jQuery.</li>
            </ul>
          </li>
          <li>
            <p>2023: <a href="https://powersports.honda.com/motorcycle/touring/gold-wing-tour" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Honda Powersport</a></p>
            <ul className='list-square'>
              <li>Converted some of Figma modules to HTML, including animations in perfect-pixel manner.</li>
              <li><span className='font-semibold'>Used technologies</span>: HTML, CSS, TailwindCSS, JavaScript, jQuery, Nunjucks.</li>
            </ul>
          </li>
        </ul>

        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>TTEK Inc.</h4>
        <ul className='list-disc'>
          <li>
            <p>2023-2024: <a href="https://www.ttekglobal.com/risklaboverview" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">RiskLab</a></p>
            <ul className='list-square'>
              <li>Developed reuse-able front-end components and designed several UI/UX pages.</li>
              <li>Actively participated in discussions, providing solutions to address challenges.</li>
              <li>Modified socket.io source code to enable real-time check and updates for account data and status monitoring.</li>
              <li><span className='font-semibold'>Used technologies</span>: Vue.js, Vuetify, Socket.io.</li>
            </ul>
          </li>
        </ul>

        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>BetaMind Inc.</h4>
        <ul className='list-disc [&>li]:mb-6'>
          <li>
            <p>2024-2025: <span className="font-semibold italic">Milogos</span></p>
            <ul className='list-square'>
              <li>Built and maintained reusable front-end components.</li>
              <li>Developed responsive UI/UX pages based on Figma designs.</li>
              <li>Integrated front-end with AWS Serverless back-end services.</li>
              <li>Developed and consumed RESTful APIs to support dynamic features.</li>
              <li><span className='font-semibold'>Used technologies</span>: React.js, AWS Serverless (CDK, Lambda, API Gateway, DynamoDB, etc.)</li>
            </ul>
          </li>
          <li>
            <p>2024-2025: <a href="https://resume.zcareer.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Spice - Smart Resume</a></p>
            <ul className='list-square'>
              <li>Led the team, coordinated tasks, conducted code reviews, and ensured the team met project milestones and deadlines.</li>
              <li>Built reusable front-end components and implemented responsive UI/UX pages.</li>
              <li>Collaborated on the integration of AI functionalities to improve UX and resume quality.</li>
              <li><span className='font-semibold'>Used technologies</span>: React.js, AWS Serverless Services, Open AI.</li>
            </ul>
          </li>
        </ul>

        <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Freelance Projects</h4>
        <ul className='list-disc [&>li]:mb-6'>
          <li>
            <p>2021-2022: <span className="font-semibold italic">Shopee CRM, Shopee Analytics</span></p>
            <ul className='list-square'>
              <li>The Shopee CRM supported sellers on Shopee to manage and analytics goods, orders, customers, and automatically message customers.</li>
              <li><span className='font-semibold'>Used technologies</span>: Vue.js, Nest.js, and MongoDB with Mongoose.</li>
            </ul>
          </li>
          <li>
            <p>2022: <span className="font-semibold italic">DAO Management and DAO Chat</span></p>
            <ul className='list-square'>
              <li>DAO Management, a system for managing employees in the company DAO Entertainment and assets such as audio and video files stored in the cloud securely.</li>
              <li>DAO Chat, a web app similar to Facebook's Messenger with features such as single chat, group chat, channel chat, and the ability to send text messages, images, and sounds.</li>
              <li><span className='font-semibold'>Used technologies</span>: Vue.js (DAO Chat), React.js (DAO Admin), Nest.js, MongoDB with Mongoose, Firebase (Firestore, Storage, FCM, Functions), and Google Drive API.</li>
            </ul>
          </li>
          <li>
            <p>2022: <span className="font-semibold italic">Hotato Extension (Chrome)</span></p>
            <ul className='list-square'>
              <li>Which supported Shopee users to view more advanced information about products such as sale history, sourcing similar products, and adding products to their own.</li>
              <li><span className='font-semibold'>Used technologies</span>: Vue.js, Shopee API, Nest.js, and MongoDB with Mongoose.</li>
            </ul>
          </li>
          <li>
            <p>2023: <span className="font-semibold italic">Coffee Shop Management</span></p>
            <ul className='list-square'>
              <li>Manage a small coffee shop.</li>
              <li><span className='font-semibold'>Used technologies</span>: Vue.js, Firebase (Firestore, Hosting).</li>
            </ul>
          </li>
          <li>
            <p>2023: <span className="font-semibold italic">Coffee House App</span></p>
            <ul className='list-square'>
              <li>A platform to manage multiple branches of a large coffee shop.</li>
              <li>Designed and developed user interfaces.</li>
              <li>Implemented and integrated APIs for seamless data communication.</li>
              <li><span className='font-semibold'>Used technologies</span>: Next.js, TailwindCSS, Nest.js, Supabase, PostgreSQL.</li>
            </ul>
          </li>
          <li>
            <p>2024: <span className="font-semibold italic">GTA Xtreme</span></p>
            <ul className='list-square'>
              <li>A mobile app to fetch and display news from the GTA Xtreme website.</li>
              <li>Developed the UI/UX of the app and ensure responsiveness and usability across devices.</li>
              <li>Integrated WordPress GraphQL to fetch data and handle back-end functionalities efficiently.</li>
              <li><span className='font-semibold'>Used technologies</span>: React Native, twrnc (Taildwind for React Native), WordPress GraphQL.</li>
            </ul>
          </li>
          <li>
            <p>2024: <a href="https://snootysims.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">SnootySims</a></p>
            <ul className='list-square'>
              <li>A website dedicated to SnootySims, specializing in creating custom content for The Sims 4.</li>
              <li>Designed and implemented the UI/UX for the homepage.</li>
              <li>Developed a customization feature for users to personalize their experience.</li>
              <li>Built a robust search page and enhanced it with additional functionalities to improve UX.</li>
              <li><span className='font-semibold'>Used technologies</span>: HTML, CSS, JS, PHP, WordPress.</li>
            </ul>
          </li>
          <li>
            <p>2024: <a href="https://linkandcluster.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Link and Cluster</a></p>
            <ul className='list-square'>
              <li>A WordPress plugin designed to enhance internal linking for websites.</li>
              <li>Initiated the development of the plugin from scratch.</li>
              <li>Built key features to manage and optimize internal links.</li>
              <li>Developed a website for the plugin with a pixel-perfect design approach.</li>
              <li><span className='font-semibold'>Used technologies</span>: WordPress, PHP, HTML, CSS, JS.</li>
            </ul>
          </li>
          <li>
            <p>2024: <a href="https://hondaotokhanhhoa.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-blue-600 hover:underline">Honda Oto Khanh Hoa</a></p>
            <ul className='list-square'>
              <li>Developed a professional and responsive website for Honda Oto Khanh Hoa.</li>
              <li>Designed and developed the entire website from scratch as the only developer for the project.</li>
              <li><span className='font-semibold'>Used technologies</span>: Wordpress, HTML, CSS, JS, PHP, Elementor.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Projects