import ContentLayout from '../components/ContentLayout'

const degrees = [
  {
    year: '2023',
    school: 'Nha Trang University, Vietnam',
    degree: 'Master of Science in Information Technology',
  },
  {
    year: '2018',
    school: 'Nha Trang University, Vietnam',
    degree: 'Bachelor of Science in Information Technology',
  },
]

const Education = () => {
  return (
    <ContentLayout fileName="education.md" title="Education" titleColor="text-vscode-keyword">
      <div className="space-y-6">
        {degrees.map(({ year, school, degree }) => (
          <div key={year + degree} className="timeline-item">
            <span className="inline-block font-mono text-xs px-2.5 py-1 rounded-full bg-cool-gray-900 border border-custom-gray-200/40 text-vscode-type mb-2">
              {year}
            </span>
            <h4 className="content-subheading">{school}</h4>
            <p className="text-cool-gray-500 mt-1 text-base md:text-lg">{degree}</p>
          </div>
        ))}
      </div>
    </ContentLayout>
  )
}

export default Education
