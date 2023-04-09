import React from 'react'

const Accomplishments = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-[1px] border-[#404040] pb-2 mb-4">🏆 Accomplishments</h2>
      <div className='flex-1 overflow-y-auto'>
        <ul className="list-disc">
          <li>Second prize in student olympics at Nha Trang University in 4th year of university.</li>
          <li>Participated in the national student olympics but had no achievements.</li>
          <li>Join the ACM-ICPC team, the team solves 3/11 problems 🤣</li>
          <li>Finisher 15km ultra-trail Cau Dat Farm - Da Lat (2020), Finisher 21km VnExpress Marathon - Nha Trang Marvelous 2022.</li>
        </ul>
      </div>
    </div>
  )
}

export default Accomplishments