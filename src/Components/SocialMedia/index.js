import React from 'react'
import axios from 'axios'
import { SocialMediaSection, Social, Icon, SocialDesc, Span, SpanInfo } from './style.js'

class SocialMedia extends React.Component {
  state = {
    social: []
  }
  componentDidMount() {
    axios.get('js/data.json').then(res => { this.setState({ social: res.data.social }) })
  }
  render() {
    const { social } = this.state
    const socialList = social.map((elt) => {
      return (
        <Social  item={elt.id} key={elt.id}>
           <a href={elt.link} target="_blank"> <Icon className={elt.icon}> </Icon></a>
          <SocialDesc>
            <Span >{elt.title}</Span>
            <SpanInfo >{elt.body}</SpanInfo>
          </SocialDesc>
        </Social>
      )
    })

    return (
      <SocialMediaSection>
        {socialList}
      </SocialMediaSection>
    )
  }
}
export default SocialMedia;



