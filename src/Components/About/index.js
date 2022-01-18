import React from 'react'
import { AboutSection, AboutInfo, InfoTitle, Span, InfoDir, InfoDesc, Anchor } from './style.js'

const About = () => {
  return (
    <AboutSection id="Resume">
      <div className="container">
        <AboutInfo>
          <InfoTitle><Span>This is</Span> Me</InfoTitle>
          <InfoDir>FIras Hadj</InfoDir>
          <InfoDesc>
            I'm  UI/UX Designer and Front-End Developer from tunisia. I enjoy turning complex problems into simple, beautiful and intuitive designs.
            My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add a personal touch to your product and make sure that it is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.
          </InfoDesc>

        </AboutInfo>
      </div>
    </AboutSection>
  )
}

export default About



