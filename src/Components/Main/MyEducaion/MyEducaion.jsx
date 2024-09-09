import React from 'react'

const MyEducaion = () => {
    const infoCollection = [
        {
            title:"English Aptis",
            description:'British Council, 2020'
        },
        {
            title:"Diploma in ICT",
            description:'Bangladesh Computer Council, 2020'
        },
        {
            title:"Technical Support Fundamentals",
            description:'Coursera & Google, 2020'
        },
        {
            title:"Web Design and Development",
            description:"LEDP, Ministry of ICT, Government of the People's Republic of Bangladesh, 2020"
        }
    ]
  return (
    <div className=' w-full lg:w-1/2  text-white'>
      <h2 className='text-center text-[#fec544] text-5xl font-semibold my-20 pt-16' >My Education</h2>
      {
        infoCollection.map((info, idx) => <div
        className=' flex flex-col justify-evenly border border-[#2b3744] p-3 rounded space-y-3 w-5/6 mx-auto my-8 h-[162px]'
        key={idx}
        >
        <h1 className='text-2xl'>{info.title}</h1>
        <p className='text-sm'>{info.description}</p>
      </div> )
      }
    </div>
  )
}

export default MyEducaion
