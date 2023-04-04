import React from 'react'

const Education = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-[1px] border-[#404040] pb-2 mb-4">👨‍🎓 Education</h2>
      <div className='flex-1 overflow-y-auto'>
        <h4 className='text-xl font-bold border-b-[1px] border-[#404040] pb-2 mb-4'>Summary</h4>
        <h4 className='text-xl font-bold border-b-[1px] border-[#404040] pb-2 mb-4'>Experience</h4>
        
        <div>
        <h1>👨‍🎓 Education</h1>
        <hr />

        <div><span>2022-present</span></div>
        <a href="https://www.rwth-aachen.de/" target="_blank"
          >RWTH Aachen University</a
        >
        <ul>
          <li><strong>M.Sc.</strong> in Software Systems Engineering</li>
        </ul>
        <div><span>2021-2022</span></div>
        <a href="https://www-en.ntut.edu.tw/" target="_blank"
          >National Taipei University of Technology</a
        >
        <ul>
          <li>
            <strong>Extension program</strong> in Computer Science, Electrical
            Engineering, and Electronic Engineering
          </li>
          <li>
            Courses: Computer Organization, Discrete Mathematics, Computer Program-<br />
            ming(I), Object-Oriented Programming, Probability, Digital Logic Design
          </li>
          <li>GPA: 4.0/4.0</li>
        </ul>
        <div><span>2021-2022</span></div>
        <a href="https://en.ntnu.edu.tw/" target="_blank"
          >National Taiwan Normal University</a
        >
        <ul>
          <li><strong>Extension program</strong> in Electrical Engineering</li>
          <li>Courses: Operating Systems</li>
          <li>GPA: 4.3/4.3</li>
        </ul>
        <div><span>2020–2022</span></div>
        <a href="https://www.fju.edu.tw/indexEN.jsp" target="_blank"
          >Fu Jen Catholic University</a
        >
        <ul>
          <li>
            <strong>Extension program</strong> in Software Engineering and Digital
            Innovation Applications, and Information Management
          </li>
          <li>Courses: Algorithms, Linear Algebra, Database Administration</li>
          <li>GPA: 4.0/4.0</li>
        </ul>
        <div><span>2020-2021</span></div>
        <a href="https://www.ntub.edu.tw/index.php?Lang=en" target="_blank"
          >National Taipei University of Business</a
        >
        <ul>
          <li><strong>Extension program</strong> in Information Management</li>
          <li>Courses: Data Structures</li>
          <li>GPA: 4.0/4.0</li>
        </ul>
        <div><span>2012-2016</span></div>
        <a href="https://www.ncku.edu.tw/index.php?Lang=en" target="_blank"
          >National Cheng Kung University</a
        >
        <ul>
          <li><strong>B.B.A</strong> in Accountancy</li>
          <li>GPA: 3.88/4.0</li>
        </ul>
      </div>

      </div>
    </div>
  )
}

export default Education