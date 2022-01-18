import React, { Component } from 'react'
import { WorkSection, WorkTitle, Span, WorkPart, Icon, PartTitle, Line, PartDesc } from './style.js'
import axios from 'axios'

class Work extends Component {
  state = {
    works: []
  }
  componentDidMount() {
    axios.get('js/data.json').then(res => { this.setState({ works: res.data.works }) })
  }
  render() {
    const { works } = this.state;
    const worksList = works.map((elt)=> {
      return (
        <WorkPart id="Work" first={elt.id} key={elt.id}> 
          <Icon className={elt.icon_name}></Icon>
          <PartTitle>{elt.title} </PartTitle>
          <Line />
          <PartDesc>
            {elt.body}
          </PartDesc>
        </WorkPart>
      )

    })

    return (
      <WorkSection>
        <div className="container">
          <WorkTitle><Span>My</Span> Work</WorkTitle>
          {worksList}
        </div>
      </WorkSection>
    )
  }
}

export default Work


