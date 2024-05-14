import React from 'react'
import './styles.css';
function HomepageMain()
{
    return(
        <main>
        <section className="mx-2">
            <div className="story">
                <div className="story-round-icon">
                    <div className="story-inner-circle">
                    </div>
                </div>
                <div className="story-round-icon">
                    <div className="story-inner-circle">
                    </div>
                </div>
                <div className="story-round-icon">
                    <div className="story-inner-circle">
                    </div>
                </div>
                <div className="story-round-icon">
                    <div className="story-inner-circle">
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}
export default function HomePage() {
  return (
     <HomepageMain/>
  )
}
