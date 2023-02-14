import React from 'react'
import MostCat from './MostCat'
import catArr from '@/CatsArr'

const MostCats = () => {
  return (
    <div className='pt-[52.63px] flex flex-col gap-[55px] pb-[207px]'>
      {
        catArr.map((cat, index) => (
          <MostCat index={index} key={cat.id} id={cat.id} name={cat.name} description={cat.description} image={cat.image.url}/>
        ))
      }
    </div>
  )
}

export default MostCats