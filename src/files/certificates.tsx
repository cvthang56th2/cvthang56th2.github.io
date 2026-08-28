import ContentLayout from '../components/ContentLayout'
import vueCertificate from '../vue-certificate.png'
import awsSAACertificate from '../aws-SAA-C03-certificate.png'

const certs = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    year: '2025',
    url: 'https://www.credly.com/badges/9597eb9e-fe0a-48fb-9a31-b063130a0328/linked_in?t=svyryr',
    image: awsSAACertificate,
    alt: 'AWS Certified Solutions Architect Associate',
  },
  {
    name: 'Certified Vue Developer, VueAcademy',
    year: '2023',
    url: 'https://badgr.com/public/assertions/jcKxBDueQuurY5VktOIhvg',
    image: vueCertificate,
    alt: 'Vue Developer Certificate',
  },
]

const Certificates = () => {
  return (
    <ContentLayout fileName="certificates.md" title="Certifications" titleColor="text-vscode-orange">
      <div className="grid gap-8 md:grid-cols-2">
        {certs.map(({ name, year, url, image, alt }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 sm:p-5 lg:p-6 rounded-lg border border-custom-gray-200/30 bg-cool-gray-900/40
                       hover:border-vscode-orange/40 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-2 mb-4 lg:mb-5">
              <p className="font-medium text-base md:text-lg text-white group-hover:text-vscode-orange transition-colors">{name}</p>
              <span className="shrink-0 font-mono text-xs sm:text-sm px-2 py-1 rounded bg-cool-gray-800 text-vscode-comment">{year}</span>
            </div>
            <img
              src={image}
              alt={alt}
              className="w-full rounded-md border border-custom-gray-200/20 group-hover:border-vscode-orange/20 transition-colors"
            />
          </a>
        ))}
      </div>
    </ContentLayout>
  )
}

export default Certificates
