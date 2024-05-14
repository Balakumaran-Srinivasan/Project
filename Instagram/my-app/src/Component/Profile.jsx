import React from 'react'
import './profile.css'
import './media-queries.css'

function ProfileHeader()
{
    return(
        <header className="m-2">
        <div className="title-icon">
            <div><i className="fa-solid fa-lock mt-1" style={{fontSize:"2rem"}}></i></div>
            <h1 className="ms-2">bk.srinivasan</h1>
            <button className="btn">
                <div className="icon">
                    <div className="option-icon bar1"></div>
                    <div className="option-icon bar2"></div>
                </div>
            </button>
        </div>
        <div className="header-icon" style={{fontSize:"2rem"}}>
            <div><i className="fa-regular fa-square-plus "></i></div>
            <div><i className="fa fa-bars "></i></div>
        </div>
    </header>
    )
}
function ProfileMain()
{
    return(
        <main>
            <Section01/>
            <Section02/>
        </main>
    )
}
function Section01(){
    return(
        <section className="mx-2">
        <div className="profile-header">
            <div className="profile-image">
                <div className="round-icon">
                    <div className="inner-circle">
                    </div>
                </div>
            </div>
            <div className="profile-status ms-3 ps-3">
                <div>
                    <h3>23</h3>
                    <p>Posts</p>
                </div>
                <div>
                    <h3>119</h3>
                    <p>Followers</p>
                </div>
                <div>
                    <h3>287</h3>
                    <p>Following</p>
                </div>
            </div>
        </div>
    </section>
    )
}
function Section02()
{
    return(
        <section>
        {/* <!-- bio data section --> */}
        <div className="bio-data-section mx-2">
            <h6>Balakumaran</h6>
            <p>Farmer/MERN Stack Developer</p>
            <div className="profile_section-btn">
                <button className="profile_btn">Edit profile</button>
                <button className="profile_btn">Share profile</button>
                <button className="profile_btn"><i className="fa-solid fa-user-plus"></i></button>
            </div>
        </div>
        <div className="post-container mx-2 my-2">
            <div className="post-grid"></div>
            <div className="post-grid"></div>
            <div className="post-grid"></div>
            <div className="post-grid"></div>
            <div className="post-grid"></div>
            <div className="post-grid"></div>
        </div>
    </section>
    )
}
export default function Profile() {
  return (
    <>
     <ProfileHeader/>
     <ProfileMain/>
     </>
  )
}
