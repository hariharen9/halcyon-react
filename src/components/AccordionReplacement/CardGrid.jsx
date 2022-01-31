import React from 'react'
import Cards from './Cards'

function CardGrid() {
  return (
    <div class='flex flex-wrap -mx-12 overflow-hidden mx-36'>
      <div class='my-12 px-12 w-1/4 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4'>
        <Cards title='Branding' pic='https://picsum.photos/490' />
      </div>

      <div class='my-12 px-12 w-1/4 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4'>
        <Cards title='User Experience' pic='https://picsum.photos/680' />
      </div>

      <div class='my-12 px-12 w-1/4 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4'>
        <Cards title='Development' pic='https://picsum.photos/750' />
      </div>

      <div class='my-12 px-12 w-1/4 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4'>
        <Cards title='WebDesign' pic='https://picsum.photos/720' />
      </div>
    </div>
  )
}

export default CardGrid
