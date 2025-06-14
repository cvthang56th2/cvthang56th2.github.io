import vueCertificate from '../vue-certificate.png';
import awsSAACertificate from '../aws-saa.png';

const Certificates = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-1px border-custom-gray-200 pb-2 mb-4">🥇 Certificates</h2>
      <div className='flex-1 overflow-y-auto'>
        <ul className="list-disc">
          <li><a className="text-blue-500 hover:text-purple-500" href="https://www.credly.com/badges/39560fc2-e960-4a55-8c91-271ff1b987e7" target="_blank" rel="noopener noreferrer">Microsoft Ofice Specialist: Word 2013 (2018)</a></li>
          <li><a className="text-blue-500 hover:text-purple-500" href="https://www.credly.com/badges/c2b6fddd-6fc4-4202-9e30-7160ee7990ad" target="_blank" rel="noopener noreferrer">Microsoft Ofice Specialist: Powerpoint 2013 (2018)</a></li>
          <li><a className="text-blue-500 hover:text-purple-500" href="https://badgr.com/public/assertions/jcKxBDueQuurY5VktOIhvg" target="_blank" rel="noopener noreferrer">Certified Vue Developer (by VueAcademy – 2023)</a></li>
          <a className="text-blue-500 hover:text-purple-500 block my-4" href="https://badgr.com/public/assertions/jcKxBDueQuurY5VktOIhvg" target="_blank" rel="noopener noreferrer">
            <img src={vueCertificate} alt="thang-cao-vue-certificate" className='w-full md:w-1/2 mx-auto' />
          </a>
          <li><a className="text-blue-500 hover:text-purple-500" href="https://www.credly.com/badges/9597eb9e-fe0a-48fb-9a31-b063130a0328/linked_in?t=svyryr" target="_blank" rel="noopener noreferrer">AWS Certified Solutions Architect – Associate (2025)</a></li>
          <a className="text-blue-500 hover:text-purple-500 block my-4" href="https://www.credly.com/badges/9597eb9e-fe0a-48fb-9a31-b063130a0328/linked_in?t=svyryr" target="_blank" rel="noopener noreferrer">
            <img src={awsSAACertificate} alt="thang-cao-AWS-SAA-certificate" className='w-full md:w-1/4 mx-auto' />
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Certificates