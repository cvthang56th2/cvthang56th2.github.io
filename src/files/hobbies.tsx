import ContentLayout from '../components/ContentLayout'

const hobbies = [
  {
    title: 'Continuous learning',
    description: 'Enhancing coding skills in spare time — clean code, SOLID principles, best practices, and emerging technologies like AI and Web3.',
  },
  {
    title: 'Active lifestyle',
    description: 'Playing musical instruments, singing, and sports including football, badminton, and running. Completed trail runs, half marathons, and full marathons.',
  },
  {
    title: 'Side projects',
    description: 'Building personal projects shared on GitHub — including wcif.cc, a search platform serving 10K+ users.',
  },
]

const Hobbies = () => {
  return (
    <ContentLayout fileName="hobbies.md" title="Beyond the Code" titleColor="text-vscode-type">
      <div className="grid gap-4 md:grid-cols-3">
        {hobbies.map(({ title, description }) => (
          <div
            key={title}
            className="p-4 sm:p-5 lg:p-6 rounded-lg border border-custom-gray-200/30 bg-cool-gray-900/40
                       hover:border-vscode-type/30 transition-colors"
          >
            <h4 className="content-subheading mb-2 sm:mb-3">{title}</h4>
            <p className="text-sm md:text-base text-cool-gray-500 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </ContentLayout>
  )
}

export default Hobbies
