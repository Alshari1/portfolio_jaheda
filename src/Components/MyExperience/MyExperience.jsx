import React from 'react'

const MyExperience = () => {
    const infoCollection = [
        {
            title:"level 1 seller on fibre",
            description:'Created numerous projects with 100% client satisfaction since 2020, earning all 5-star positive feedback.'
        },
        {
            title:"Freelancer on Upwork",
            description:'Delivered projects with consistent 5-star reviews, showcasing top-quality work and client satisfaction.'
        },
        {
            title:"Web Developer at Halda Publication",
            description:'Developed their website, handled graphics design, SEO, and more for comprehensive online presence.'
        },
        {
            title:"Head of IT at CUSMC",
            description:'Led web development, graphics design, and more for seamless digital operations and branding.'
        }
    ]
  return (
    <div className=' w-full lg:w-1/2  text-white'>
      <h2 className='text-center text-[#fec544] text-5xl font-semibold my-20 pt-16' >My Experience</h2>
      {
        infoCollection.map((info, idx) => <div
        className='flex flex-col justify-evenly  border border-[#2b3744] p-3 rounded space-y-3 w-5/6 mx-auto my-8 h-[162px]'
        key={idx}
        >
        <h1 className='text-2xl'>{info.title}</h1>
        <p className='text-sm'>{info.description}</p>
      </div> )
      }
    </div>
  )
}

export default MyExperience
