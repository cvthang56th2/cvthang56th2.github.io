import React from 'react'

const Experience = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-[1px] border-[#404040] pb-2 mb-4">👨‍💻 Experience</h2>
      <div className='flex-1 overflow-y-auto'>
        <div>
          <h4 className='text-2xl font-bold border-b-[1px] border-[#404040] pb-2 my-4'>Web Developer at 9thWonder VietNam (June 2018 - June 2023)</h4>
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
          
          <h4 className='text-2xl font-bold border-b-[1px] border-[#404040] pb-2 my-4'>Freelancer projects (2019 - 2022)</h4>
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
    </div>
  )
}

export default Experience