import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PortfolioSection, PortfolioTitle, Span, PortfolioList, PortfolioItem, ImageWrapper, Image, Overlay, OverlaySpan } from './style.js'



const Portfolio = () => {

  const [images, setImages] = useState([])

  useEffect(() => {

    axios.get('js/data.json').then(res => { setImages(res.data.portfolio) })
  }, [])

  const PortfolioImages = images.map((elt) => {
    return (
      <ImageWrapper id="Portfolio" key={elt.id}>
        <Image src={elt.image} alt="" />
        <Overlay>
          <OverlaySpan>
            Show Image
          </OverlaySpan>
        </Overlay>
      </ImageWrapper>
    )
  }
  )
  return (
    <PortfolioSection  >
      <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
    

      <div className="box">
        {PortfolioImages}
      </div>

    </PortfolioSection>
  )
}

export default Portfolio



