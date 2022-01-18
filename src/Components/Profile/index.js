import React from 'react'
import { ProfilSection, ProfilSkills, ProfilList, 
  ProfilItem,Span,SpanWeb,Skills,SkillsDesc
  ,SkillsBar,SkillsBarTitle,SkillsBarPerc,SkillsBarParent,
  SkillsBarParentSpan1,ProfilTitle,ProfilTitleSpan,
  SkillsTitle,SkillsTitleSpan,SkillsBarParentSpan2
  ,SkillsBarParentSpan3,SkillsBarParentSpan4,SkillsBarParentSpan5} from './style.js'

const Profile = () => {
  return (
    <ProfilSection>
      <div className="container">
        <ProfilSkills>
          <ProfilTitle><ProfilTitleSpan>My </ProfilTitleSpan>Profile</ProfilTitle>
          <ProfilList>
            <ProfilItem>
              <Span>Name</Span>
              Firas Hadj
            </ProfilItem>
            <ProfilItem>
              <Span>Birthday</Span>
              26/08/1995
            </ProfilItem>
            <ProfilItem>
              <Span>Address</Span>
              Béni Khalled , Nabeul
            </ProfilItem>
            <ProfilItem>
              <Span>Phone</Span>
              +216 27 172 231
            </ProfilItem>
            <ProfilItem>
              <Span>Email</Span>
              Firas@laevitas.ch
            </ProfilItem>
            <ProfilItem>
              <Span>Website</Span>
              <SpanWeb>www.behance.net/hajfiras</SpanWeb>
            </ProfilItem>
          </ProfilList>
        </ProfilSkills>

        <Skills>
          <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
          <SkillsBar>
            <SkillsBarTitle>Adobe XD</SkillsBarTitle>
            <SkillsBarPerc>100%</SkillsBarPerc>
            <SkillsBarParent>
              <SkillsBarParentSpan1></SkillsBarParentSpan1>
            </SkillsBarParent>
          </SkillsBar>

          <SkillsBar>
            <SkillsBarTitle>Adobe Illustrator</SkillsBarTitle>
            <SkillsBarPerc>90%</SkillsBarPerc>
            <SkillsBarParent>
              <SkillsBarParentSpan2></SkillsBarParentSpan2>
            </SkillsBarParent>
          </SkillsBar>

          <SkillsBar>
            <SkillsBarTitle>Adobe Photoshop</SkillsBarTitle>
            <SkillsBarPerc>80%</SkillsBarPerc>
            <SkillsBarParent>
              <SkillsBarParentSpan3></SkillsBarParentSpan3>
            </SkillsBarParent>
          </SkillsBar>
          <SkillsBar>
            <SkillsBarTitle>Java Script</SkillsBarTitle>
            <SkillsBarPerc>50%</SkillsBarPerc>
            <SkillsBarParent>
              <SkillsBarParentSpan4></SkillsBarParentSpan4>
            </SkillsBarParent>
          </SkillsBar>
          <SkillsBar>
            <SkillsBarTitle>HTML 5</SkillsBarTitle>
            <SkillsBarPerc>70%</SkillsBarPerc>
            <SkillsBarParent>
              <SkillsBarParentSpan5></SkillsBarParentSpan5>
            </SkillsBarParent>
          </SkillsBar>
          <SkillsBar>
            <SkillsBarTitle>CSS 3</SkillsBarTitle>
            <SkillsBarPerc>70%</SkillsBarPerc>
            <SkillsBarParent>
              <SkillsBarParentSpan5></SkillsBarParentSpan5>
            </SkillsBarParent>
          </SkillsBar>
        </Skills>
        

      </div>
    </ProfilSection>
  )
}

export default Profile



