import Link from 'next/link'
import React from 'react'

const ListItem = ({name, id}) => {
  return (
    <Link href={`/cat/${id}`} className='text-[18px] w-full pl-[12px] py-[16.5px] leading-[22px] font-[500] cursor-pointer hover:bg-[rgba(151,151,151,0.1)] hover:rounded-[12px]'>
        {name}
    </Link>
  )
}

export default ListItem