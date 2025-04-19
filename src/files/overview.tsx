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
          <p>
            Full Stack Developer with over 7 years of experience architecting, developing, and maintaining scalable
            and high-performance web applications. Proficient in modern web technologies including React.js, Vue.js, Node.js, and AWS services. Adept at both front-end and back-end development with a strong eye
            for pixel-perfect UI and clean, maintainable code. Skilled in Agile/Scrum methodologies and experienced
            in leading teams, mentoring junior developers, and conducting code reviews.
          </p>
          <p>
            Passionate about clean architecture, SOLID principles, performance optimization, and automation
            testing. Proven track record of delivering results, whether as a team player or independent contributor. Actively contributes to open-source and freelance projects and is currently exploring AI and SaaS
            product development.
          </p>
          <h4 className='text-xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Video</h4>
          <p><a href="https://www.facebook.com/watch/?v=570726515042209" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Watch me at 9thWonder VietNam</a></p>
        </div>
      </div>
    </div>
  )
}

export default Overview