import React from 'react'

const Experience = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-[1px] border-[#404040] pb-2 mb-4">👨‍💻 Experience</h2>
      <div className='flex-1 overflow-y-auto'>
        <h4 className='text-xl font-bold border-b-[1px] border-[#404040] pb-2 mb-4'>Summary</h4>
        <h4 className='text-xl font-bold border-b-[1px] border-[#404040] pb-2 mb-4'>Experience</h4>

        <div>
          <h1>👨‍💻 Experience</h1>
          <hr />
          <p>
            <strong>Software Developer</strong> @
            <a href="https://www.ey.com/">Ernst &amp; Young</a>
            <em>(Nov 2018 - Nov 2021)</em>
          </p>
          <p>
            Completed full lifecycle application development to enterprise business
            applications including requirement analysis, system design, development,
            unit testing, implementation, testing support, performance tuning,
            maintenance, and post-production support.
          </p>
          <ul>
            <li>
              Detailed achievements:
              <ul>
                <li>
                  Collaborated with colleagues from worldwide to implement the Disaster
                  Recovery Project. Completed ahead of the original schedule and saved
                  budget up to 30%.
                </li>
                <li>
                  Optimized deployment process and reduced manual work to accelerate
                  product deployment by over 70%.
                </li>
                <li>
                  Delivered virtual and live classroom training for employees(the
                  cumulative number of trainees exceeded 500).
                </li>
              </ul>
            </li>
            <li>
              <em><strong>Technologies used:</strong></em> C#, MSSQL, Python, React.js
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <strong>Staff Auditor</strong> @
            <a href="https://www2.deloitte.com/global/en.html">Deloitte &amp; Touche</a>
            <em>(July 2017 - Nov 2018)</em>
          </p>
          <p>
            Planned and conducted operational and ﬁnancial audits to conﬁrm ﬁnancial
            statements are fairly presented in alignment with IFRS.
          </p>
          <ul>
            <li>
              Detailed achievements:
              <ul>
                <li>
                  Delivered internal audit projects for major clients in the
                  manufacturing industry with a focus on gap assessments/reviews of
                  business processes and internal control.
                </li>
                <li>
                  Supervised assigned auditing staffs to evaluate performance and
                  maintain standards.
                </li>
              </ul>
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <strong>Audit Intern</strong> @ <a href="https://home.kpmg/">KPMG</a>
            <em>(July 2015 - July 2015)</em>
          </p>
          <p>
            Performed analytical procedures and analyses to detect unusual ﬁnancial
            relationships.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Experience