const Overview = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-1px border-custom-gray-200 pb-2">📖 Overview</h2>
      <div className='flex-1 overflow-y-auto overflow-x-hidden text-lg'>
        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4">Cao Viet Thang (Victor Cao)</h3>
            <h4 className="text-xl">Full Stack Developer</h4>
            <div className="mt-2">
              <p>📱 Phone: <a href="tel:+84366884581" className="text-blue-600 hover:underline">+84366884581 (VN)</a></p>
              <p>📧 Email: <a href="mailto:cvthang56th2@gmail.com" className="text-blue-600 hover:underline">cvthang56th2@gmail.com</a></p>
              <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/thang-cao96/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/thang-cao96</a></p>
            </div>
          </div>
          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Summary</h4>
          <p>I'm a full stack developer with +6 years of experience in designing, developing, and maintaining web applications (including 2 years of experience in front-end web development in a pixel-perfect manner).</p>
          <p>I am considered a team-player because I enjoy collaborating with others and thrive in team environments. I can also do some mentoring tasks and conduct code reviews for team members. I'm always willing to learn new technologies.</p>
          <p>Experienced in Waterfall and Agile (Scrum / Kanban) methodologies. Can communicate in English.</p>
          <h4 className='text-xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Specialties:</h4>
          <ul className="list-disc">
            <li>Proficient in both front-end and back-end technologies.</li>
            <li>Strong understanding of the entire web development process.</li>
            <li>Quick learning, researching and applying new knowledge.</li>
            <li>Good at teamwork and communication, encourage and motivate team members for improving team spirit well.</li>
            <li>Have ability to work as T-shaped person in Scrum Team.</li>
          </ul>
          <h4 className='text-xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Video</h4>
          <p><a href="https://www.facebook.com/watch/?v=570726515042209" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Watch me at 9thWonder VietNam</a></p>
        </div>
      </div>
    </div>
  )
}

export default Overview