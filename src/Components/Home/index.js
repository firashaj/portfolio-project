import React from 'react'
import {HomeSection,HomeInformation,HomeTitle,HomeInfo,HomeDesc,Span,HomeBtn} from './style.js'

const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        <HomeInformation>
          <HomeTitle>Firas Hadj</HomeTitle>
          <HomeInfo>UI/UX Designer / Front-End Developer</HomeInfo>
          <HomeDesc>
            Iam a professional <Span>UI/UX Designer</Span> and <Span>Front-End Developer</Span> creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
          </HomeDesc>
          <HomeBtn>Let's Begin</HomeBtn>
        </HomeInformation>
      </div>
    </HomeSection>
  )
}

export default Home



