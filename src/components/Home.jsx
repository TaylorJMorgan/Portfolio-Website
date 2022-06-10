import React from 'react';

function Home() {

    return (
        <div className='flex home-background'>
            <section id='home'>
                <div className='flex row home-banner align-items-center'>
                    <div className='col'>
                        Hello, I'm&nbsp;
                        <span className='highlight'>
                            Taylor Morgan
                        </span>
                        ,
                        <br />
                        a full-stack developer.
                        <br />
                        <a href='#about'>
                        <button className="btn btn-outline-light btn-md start-button">
                        Let's start.
                        </button>
                        </a>
                                        
                    </div>                    
                </div>
            </section>
        </div>
        
        
    )
}

export default Home;