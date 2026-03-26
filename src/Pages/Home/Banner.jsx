import React from 'react'
import pic1 from '../../../assets/banner/banner1.png'
import pic2 from '../../../assets/banner/banner2.png'
import pic3 from '../../../assets/banner/banner3.png'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Banner() {
  return (
     <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img src={pic1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={pic2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={pic3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
  )
}
