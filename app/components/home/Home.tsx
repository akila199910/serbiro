import React from 'react'
import ImageSlideshow from '../ImageSlideshow/ImageSlideshow'
import img1 from './1-800x600.png'
import img2 from './download.webp'
import img3 from './6.png'
import img4 from './OIP.webp'
import img5 from './download (1).webp'


const Home = () => {
  const images = [
    { src: img1, alt: 'Slide 1' },
    {src:img2, alt:"Slide"},
    {src:img3, alt:"Slide"},
    {src:img4, alt:"Slide"},
    {src:img5, alt:"Slide"}
  ];

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4">
        <ImageSlideshow images={images} />
      </div>
    </div>
  )
}

export default Home