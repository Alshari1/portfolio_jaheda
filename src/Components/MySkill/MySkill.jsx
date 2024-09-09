import React from 'react'
import ProgressBar from '../progressBar/ProgressBar'

const MySkill = () => {
  return (
    <div className='flex justify-between text-white font-semibold'>
      <div className='w-1/2 space-y-5'>
        <div>
          <span>Html5</span>
          <ProgressBar value='80'></ProgressBar>
        </div>
        <div>
          <span>Bootstrap</span>
          <ProgressBar value='60'></ProgressBar>
        </div>
        <div>
          <span>Javascript</span>
          <ProgressBar value='60'></ProgressBar>
        </div>
        <div>
          <span>Wordpress</span>
          <ProgressBar value='60'></ProgressBar>
        </div>
      </div>
      <div className='w-1/2 space-y-5'>
        <div>
          <span>CSS3</span>
          <ProgressBar value='60'></ProgressBar>
        </div>
        <div>
          <span>JQuery</span>
          <ProgressBar value='60'></ProgressBar>
        </div>
        <div>
          <span>Wix</span>
          <ProgressBar value='60'></ProgressBar>
        </div>
        <div>
          <span>Shopify</span>
          <ProgressBar value='60'></ProgressBar>
        </div>
      </div>
    </div>
  )
}

export default MySkill
