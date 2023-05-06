import vueCertificate from '../vue-certificate.png';

const Certificates = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-1px border-custom-gray-200 pb-2 mb-4">🥇 Certificates</h2>
      <div className='flex-1 overflow-y-auto'>
        <ul className="list-disc">
          <li>Microsoft Ofice Specialist Word (2017)</li>
          <li>Microsoft Ofice Specialist Excel (2018)</li>
          <li>Vue Certification (2023)</li>
          <img src={vueCertificate} alt="thang-cao-vue-certificate" className='w-full md:w-1/2 mx-auto' />
        </ul>
      </div>
    </div>
  )
}

export default Certificates