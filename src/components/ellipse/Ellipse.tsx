import React from 'react'
import Image from '../image/Image';

interface Props{
    classname: string;
    image: string;
    captions: Caption[]
}

interface Caption{
   index: number;
   text: string;
}
const Ellipse: React.FC<Props> = ({
    classname,
    image,
    captions
}) => {
  return (
    <div className='ellipse'>
      <Image classname={classname} imgname={image}></Image>
      <div className="captions">
          {captions.map((caption) => (
            <p className='caption-text' key={caption.index}>{caption.text}</p>
          ))}
      </div>
    </div>
  )
}

export default Ellipse