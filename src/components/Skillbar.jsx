import React from 'react';

function Skillbar(props) {



    return (
        <div className='outer-bar'>
            <div className='inner-bar' style={props.innerBarWidth}>
                <div className='skill-name'>
                    {props.skillName}
                </div>
            </div>
        </div>
    )
}

export default Skillbar;