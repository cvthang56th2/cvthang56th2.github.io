import React from 'react'

const Accomplishments = () => {
  return (
    <div className='flex flex-col h-full'>
      <h2 className="flex-0 text-3xl font-bold border-b-[1px] border-[#404040] pb-2 mb-4">🏆 Accomplishments</h2>
      <div className='flex-1 overflow-y-auto'>
        <ul className="list-disc">
            <li>Won the second prize of the Student Informatics Olympiad of Nha Trang University in 2018 🥈</li>
            <li>Join the ACM-ICPC team, the team solves 3/11 problems 🤣</li>
            <li>Finisher 15km ultra-trail Cau Dat Farm - Da Lat (2020) 🏃‍♂️</li>
            <li>Finisher 21km VnExpress Marathon - Nha Trang Marvelous 2022 🏃‍♂️</li>
        </ul>
      </div>
    </div>
  )
}

export default Accomplishments