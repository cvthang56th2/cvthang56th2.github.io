import React from 'react'

const Projects = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-[1px] border-[#404040] pb-2 mb-4">🧪 Projects</h2>
      <div className='flex-1 overflow-y-auto'>
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
  )
}

export default Projects