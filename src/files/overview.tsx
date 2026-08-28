const Overview = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-1px border-custom-gray-200 pb-2">📖 Overview</h2>
      <div className='flex-1 overflow-y-auto overflow-x-hidden text-lg'>
        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4">Thang Cao</h3>
            <h4 className="text-xl">Full Stack Developer</h4>
            <div className="mt-2">
              <p>📱 Phone: <a href="tel:+84368844581" className="text-blue-600 hover:underline">+84368844581</a></p>
              <p>📧 Email: <a href="mailto:cvthang56th2@gmail.com" className="text-blue-600 hover:underline">cvthang56th2@gmail.com</a></p>
              <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/thang-cao96/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/thang-cao96</a></p>
            </div>
          </div>
          <h4 className='text-2xl font-bold border-b-1px border-custom-gray-200 pb-2 my-4'>Summary</h4>
          <p>
            Full Stack Engineer with 8 years of experience building and shipping scalable web products across
            frontend, backend, cloud, and data. Works directly with overseas clients to clarify requirements, translate
            business needs into technical solutions, estimate scope, manage delivery, and ship production-ready
            applications end to end. Strong in TypeScript, React/Next.js, Vue, Node/NestJS, PostgreSQL, MongoDB,
            AWS, and AI/LLM integration, with a track record of serving 10K+ users, indexing 3M+ records, and
            improving performance by up to 10x.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Overview
