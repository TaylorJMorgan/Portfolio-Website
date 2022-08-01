import React from 'react';
import Skillbar from './Skillbar';

function SkillGroup() {
    return (
        <div>
            <Skillbar
                innerBarWidth={{ width: '85%' }}
                skillName='HTML'
            />
            <Skillbar
                innerBarWidth={{ width: '85%' }}
                skillName='CSS'
            />
            <Skillbar
                innerBarWidth={{ width: '80%' }}
                skillName='C'
            />
            <Skillbar
                innerBarWidth={{ width: '80%' }}
                skillName='JavaScript'
            />
            <Skillbar
                innerBarWidth={{ width: '75%' }}
                skillName='React'
            />
            <Skillbar
                innerBarWidth={{ width: '70%' }}
                skillName='SQL'
            />
            <Skillbar
                innerBarWidth={{ width: '70%' }}
                skillName='Python'
            />
            <Skillbar
                innerBarWidth={{ width: '65%' }}
                skillName='MongoDB'
            />
            <Skillbar
                innerBarWidth={{ width: '60%' }}
                skillName='Node.js'
            />
        </div>
    )
}

export default SkillGroup;