import React from 'react';

function SkillsSetion({skill,progress,width}) {
    return (
        <div className="SkillsSetion">
            <div className="skill-container">
                 <h5 className="skill-title">{skill}</h5>
                    <div className="skill-bar">
                        <p className="skill-text">{progress}</p>
                        <div className="skill-progress">
                            <div className="progress">
                            <div className="inner-progress" style={{width}}></div>
                                
                            </div>
                        </div>
                    </div>
              </div>
        </div>
    )
}

export default SkillsSetion;