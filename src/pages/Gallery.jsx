import React from 'react'
import image1 from '../../public/Rectangle 61.png'
import image2 from '../../public/Rectangle 60.png'
import image3 from '../../public/Rectangle 58.png'
import image4 from '../../public/Rectangle 59.png'

export default function Gallery() {
  return (
    <>
      <div className="flex w-full overflow-hidden">
        <img src={image1} alt="" className="w-1/4 h-auto block" />
        <img src={image2} alt="" className="w-1/4 h-auto block" />
        <img src={image3} alt="" className="w-1/4 h-auto block" />
        <img src={image4} alt="" className="w-1/4 h-auto block" />
      </div>
    </>
  )
}
