import React from 'react';
import Skillbar from './Skillbar';

function SkillGroup() {
    return (
        <div>
            <Skillbar
                innerBarWidth={{ width: '80%' }}
                skillName='HTML'
            />
            <Skillbar
                innerBarWidth={{ width: '80%' }}
                skillName='CSS'
            />
            <Skillbar
                innerBarWidth={{ width: '75%' }}
                skillName='JavaScript'
            />
            <Skillbar
                innerBarWidth={{ width: '65%' }}
                skillName='MongoDB'
            />
            <Skillbar
                innerBarWidth={{ width: '65%' }}
                skillName='React'
            />
            <Skillbar
                innerBarWidth={{ width: '60%' }}
                skillName='Node.js'
            />
            <Skillbar
                innerBarWidth={{ width: '40%' }}
                skillName='Python'
            />
        </div>
    )
}

export default SkillGroup;