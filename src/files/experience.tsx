import React from 'react'

const Experience = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-1px border-custom-gray-200 pb-2 mb-4">👨‍💻 Experience</h2>
      <div className='flex-1 overflow-y-auto'>
        <div>
          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Full Stack Node.js Developer at 9thWonder VietNam (June 2018 - June 2023)</h4>
          <p>
            Participated in company projects, discussing and designing the project's system, writing both backend and frontend code, writing support tools for testing or the system, and writing E2E or unit tests.
          </p>
          <ul className='list-disc'>
            <li>
              <p>2018-2021: <span className="font-semibold italic">Mazi</span></p>
              <ul className='list-square'>
                <li>Built reuse-able components for front-end, design database structure and created some REST APIs in the back-end side.</li>
                <li>Wrote tests such as E2E, unit tests, and component tests.</li>
                <li>Participated in discussions and offered some solutions to solve problems.</li>
                <li>Used technologies: Node.js, Vue.js, Hapi.js, MongoDB, Redis, ElasticSearch, Jest, Cypress, Cucumber.js and AWS (EC2, S3).</li>
              </ul>
            </li>
            <li>
              <p>2022: <span className="font-semibold italic">Email Validation Checker</span></p>
              <ul className='list-square'>
                <li>Designed UI/UX and created a tool that helps input HTML emails and validates the input according to all the rules.</li>
                <li>Used technologies: HTML, CSS, TailwindCSS, JavaScript, jQuery.</li>
              </ul>
            </li>
            <li>
              <p>2022: <span className="font-semibold italic">Cypress Template</span></p>
              <ul className='list-square'>
                <li>Built source code structure, wrote utility functions to support test code writing and implemented for some common test cases.</li>
                <li>Collaborated with testers to suggest common test cases.</li>
                <li>Created a tool to automatically generate feature/scenario files.</li>
                <li>Supported newbies and testers how to write automation testing, how to write Cucumber file and Cypress code.</li>
                <li>Used technologies: Cypress, Cucumber.js.</li>
              </ul>
            </li>
            <li>
              <p>2022: <span className="font-semibold italic">Bosley</span></p>
              <ul className='list-square'>
                <li>Participated in writing automation tests.</li>
                <li>Created a tool to automatically generate feature/scenario files, used to test the website's scheduling process.</li>
                <li>Used technologies: Node.js, Cypress, Cucumber.js.</li>
              </ul>
            </li>
            <li>
              <p>2022: <span className="font-semibold italic">Encompass</span></p>
              <ul className='list-square'>
                <li>Designed fields, built UI components, and query data for components.</li>
                <li>Used technologies: React.js, Gatsby.js, GraphQL and Contentful as the database.</li>
              </ul>
            </li>
            <li>
              <p>2022: <span className="font-semibold italic">XOS</span></p>
              <ul className='list-square'>
                <li>Worked alone as the only developer for the project.</li>
                <li>Simulated the entire UI of an XOS machine (an X camera).</li>
                <li>Used technologies: Vue.js 3 and TailwindCSS.</li>
              </ul>
            </li>
            <li>
              <p>2022-2023: <span className="font-semibold italic">WordPress websites</span></p>
              <ul className='list-square'>
                <li>Built modules, created custom widgets, all front-end is built in perfect-pixel manner.</li>
                <li>Optimized website performance by following Google's page speed score.</li>
                <li>Wrote tests such as E2E and unit tests.</li>
                <li>Suggested and created plugins, tools to help testers work faster.</li>
                <li>Used technologies: jQuery, GSAP, TailwindCSS, PHP, WordPress, Elementor, Vue.js, Cypress, Cucumber.js, PHPUnit and MySQL.</li>
              </ul>
            </li>
            <li>
              <p>2023: <span className="font-semibold italic">Hearsay</span></p>
              <ul className='list-square'>
                <li>Participated in phase 2 of the project, modified code to allowing customers to customize colors, text, and some other system functionality.</li>
                <li>Updated cron job for generating customer's site according to new requirements.</li>
                <li>Wrote tests such as E2E and unit tests.</li>
                <li>Used technologies: PHP, Drupal, Cypress, and MySQL.</li>
              </ul>
            </li>
            <li>
              <p>2023: <span className="font-semibold italic">VIOC Oil Change</span></p>
              <ul className='list-square'>
                <li>Optimized REST APIs and improved MySQL queries for a table containing around 20 million records, resulting in a 10x performance boost.</li>
                <li>Used technologies: PHP, WordPress, JavaScript, jQuery.</li>
              </ul>
            </li>
            <li>
              <p>2023: <span className="font-semibold italic">Honda Powersport</span></p>
              <ul className='list-square'>
                <li>Converted some of Figma modules to HTML, including animations in perfect-pixel manner.</li>
                <li>Used technologies: HTML, CSS, TailwindCSS, JavaScript, jQuery, Nunjucks.</li>
              </ul>
            </li>
          </ul>
          
          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Frontend Vue.js Developer at TTEK Inc. (July 2023 - July 2024)</h4>
          <ul className='list-disc'>
            <li>
              <p>Project: <span className="font-semibold italic">RiskLab</span></p>
              <ul className='list-square'>
                <li>Developed reuse-able front-end components and designed several UI/UX pages.</li>
                <li>Actively participated in discussions, providing solutions to address challenges.</li>
                <li>Modified socket.io source code to enable real-time check and updates for account data and status monitoring.</li>
                <li>Used technologies: Vue.js, Vuetify, Socket.io.</li>
              </ul>
            </li>
          </ul>

          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Full Stack Developer at BetaMind Inc. (June 2024 - April 2025)</h4>
          <ul className='list-disc'>
            <li>
              <p>Project: <span className="font-semibold italic">Milogos</span></p>
              <ul className='list-square'>
                <li>Built and maintained reusable front-end components.</li>
                <li>Developed responsive UI/UX pages based on Figma designs.</li>
                <li>Integrated front-end with AWS Serverless back-end services.</li>
                <li>Developed and consumed RESTful APIs to support dynamic features.</li>
                <li>Used technologies: React.js, AWS Serverless (CDK, Lambda, API Gateway, DynamoDB, etc.)</li>
              </ul>
            </li>
            <li>
              <p>Project: <span className="font-semibold italic">Spice - Smart Rirekisho</span></p>
              <ul className='list-square'>
                <li>Led the team, coordinated tasks, conducted code reviews, and ensured the team met project milestones and deadlines.</li>
                <li>Built reusable front-end components and implemented responsive UI/UX pages.</li>
                <li>Collaborated on the integration of AI functionalities to improve UX and resume quality.</li>
                <li>Used technologies: React.js, AWS Serverless Services, Open AI.</li>
              </ul>
            </li>
          </ul>
          
          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Freelancer (2019 - present)</h4>
          <p>Given my skill set and passion for web application development, most of my freelance projects have been focused on building web applications. I typically work as part of a 5-member team, though I sometimes handle projects independently.</p>
          <ul className='list-disc'>
            <li>
              <p>2021-2022: <span className="font-semibold italic">Shopee CRM, Shopee Analytics</span></p>
              <ul className='list-square'>
                <li>The Shopee CRM supported sellers on Shopee to manage and analytics goods, orders, customers, and automatically message customers.</li>
                <li>Used technologies: Vue.js, Nest.js, and MongoDB with Mongoose.</li>
              </ul>
            </li>
            <li>
              <p>2022: <span className="font-semibold italic">DAO Management and DAO Chat</span></p>
              <ul className='list-square'>
                <li>DAO Management, a system for managing employees in the company DAO Entertainment and assets such as audio and video files stored in the cloud securely.</li>
                <li>DAO Chat, a web app similar to Facebook's Messenger with features such as single chat, group chat, channel chat, and the ability to send text messages, images, and sounds.</li>
                <li>Used technologies: Vue.js (DAO Chat), React.js (DAO Admin), Nest.js, MongoDB with Mongoose, Firebase (Firestore, Storage, FCM, Functions), and Google Drive API.</li>
              </ul>
            </li>
            <li>
              <p>2022: <span className="font-semibold italic">Hotato Extension (Chrome)</span></p>
              <ul className='list-square'>
                <li>Which supported Shopee users to view more advanced information about products such as sale history, sourcing similar products, and adding products to their own.</li>
                <li>Used technologies: Vue.js, Shopee API, Nest.js, and MongoDB with Mongoose.</li>
              </ul>
            </li>
            <li>
              <p>2023: <span className="font-semibold italic">Coffee Shop Management</span></p>
              <ul className='list-square'>
                <li>Manage a small coffee shop.</li>
                <li>Used technologies: Vue.js, Firebase (Firestore, Hosting).</li>
              </ul>
            </li>
            <li>
              <p>2023: <span className="font-semibold italic">Coffee House App</span></p>
              <ul className='list-square'>
                <li>A platform to manage multiple branches of a large coffee shop.</li>
                <li>Designed and developed user interfaces.</li>
                <li>Implemented and integrated APIs for seamless data communication.</li>
                <li>Used technologies: Next.js, TailwindCSS, Nest.js, Supabase, PostgreSQL.</li>
              </ul>
            </li>
            <li>
              <p>2024: <span className="font-semibold italic">GTA Xtreme</span></p>
              <ul className='list-square'>
                <li>A mobile app to fetch and display news from the GTA Xtreme website.</li>
                <li>Developed the UI/UX of the app and ensure responsiveness and usability across devices.</li>
                <li>Integrated WordPress GraphQL to fetch data and handle back-end functionalities efficiently.</li>
                <li>Used technologies: React Native, twrnc (Taildwind for React Native), WordPress GraphQL.</li>
              </ul>
            </li>
            <li>
              <p>2024: <span className="font-semibold italic">SnootySims</span></p>
              <ul className='list-square'>
                <li>A website dedicated to SnootySims, specializing in creating custom content for The Sims 4.</li>
                <li>Designed and implemented the UI/UX for the homepage.</li>
                <li>Developed a customization feature for users to personalize their experience.</li>
                <li>Built a robust search page and enhanced it with additional functionalities to improve UX.</li>
                <li>Used technologies: HTML, CSS, JS, PHP, WordPress.</li>
              </ul>
            </li>
            <li>
              <p>2024: <span className="font-semibold italic">Link and Cluster</span></p>
              <ul className='list-square'>
                <li>A WordPress plugin designed to enhance internal linking for websites.</li>
                <li>Initiated the development of the plugin from scratch.</li>
                <li>Built key features to manage and optimize internal links.</li>
                <li>Developed a website for the plugin with a pixel-perfect design approach.</li>
                <li>Used technologies: WordPress, PHP, HTML, CSS, JS.</li>
              </ul>
            </li>
            <li>
              <p>2024: <span className="font-semibold italic">Honda Oto Khanh Hoa</span></p>
              <ul className='list-square'>
                <li>Developed a professional and responsive website for Honda Oto Khanh Hoa.</li>
                <li>Designed and developed the entire website from scratch as the only developer for the project.</li>
                <li>Used technologies: Wordpress, HTML, CSS, JS, PHP, Elementor.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience