import React from 'react'

const Image = ({src, alt, imageStyle} : any) => {
  return (
    <div>
      <img style={imageStyle} src={src} alt={alt} />
    </div>
  )
}

export default Image
