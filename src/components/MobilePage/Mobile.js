import React from 'react'

import MobileInner from './MobileInnerPage'

function Mobile() {
  return (
    <>
      <div className='bg-gray-900 flex justify-center align-self-center items-center'>
        <div className='container mx-auto p-24'>
          <div class='mockup-phone '>
            <div class='camera'></div>
            <div class='display'>
              <div class='artboard phone-4 artboard-demo'>
                <MobileInner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mobile
