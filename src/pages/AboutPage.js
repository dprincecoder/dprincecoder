import React from 'react';
import Tittle from '../components/Tittle';
import ImageSection from '../components/ImageSection';
import SkillsSetion from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import Story from '../components/story';


function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About me'} />
            <ImageSection />
            <div className="story">
                <Tittle title={'My story'} span={'my Story'} />
                <Story />
            </div>
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skil-container">
                 <SkillsSetion skill={'Javascript'} progress={'80%'} width={'80%'}/>
                  <SkillsSetion skill={'React Js'} progress={'70%'} width={'70%'}/>
                  <SkillsSetion skill={'Node Js'} progress={'60%'} width={'60%'}/>
                  <SkillsSetion skill={'Express Js'} progress={'55%'} width={'55%'}/>
                  <SkillsSetion skill={'Github'} progress={'65%'} width={'65%'}/>
                  <SkillsSetion skill={'Html'} progress={'95%'} width={'95%'}/>
                  <SkillsSetion skill={'Css'} progress={'90%'} width={'90%'}/>
                  <SkillsSetion skill={'Git Bash'} progress={'50%'} width={'50%'}/>
                  <SkillsSetion skill={'Version Control'} progress={'70%'} width={'70%'}/>
                  <SkillsSetion skill={'Python'} progress={'40%'} width={'40%'}/>
                  <SkillsSetion skill={'Saas'} progress={'75%'} width={'75%'}/>
                  <SkillsSetion skill={'Firebase'} progress={'40%'} width={'40%'}/>
                  <SkillsSetion skill={'MongoDB'} progress={'55%'} width={'55%'}/>
            </div>
            <div className="services-container">
                 <Tittle title={'Services'} span={'Services'} />
                <ServicesSection />
               
            </div>
        </div>
    )
}

export default AboutPage;