import React from 'react'
import '../App.css'

function UserPage({user}) {
    return (
        <div className="text-center mt-3 mb-4">
            <img className='profile-pic' src={user.avatar_url}/>
            <h2 className="login">{user.login}</h2>
            <div className="userdata">
                <div className="usertable">
                    <div className= 'repos-link '>
                        <span>html_url</span>
                        <span><a href={user.html_url}>goto link</a></span>
                    </div>
                    <div className= 'repos-link'>
                        <span>repos_url</span>
                        <span>{user.repos_url}</span>
                    </div>
                    <div className= 'repos-link'>
                        <span>name</span>
                        <span>{user.name}</span>
                    </div>
                    <div className= 'repos-link'>
                        <span>company</span>
                        <span>{user.company}</span>
                    </div>
                    <div className= 'repos-link'>
                        <span>location</span>
                        <span>{user.location}</span>
                    </div>
                    <div className= 'repos-link'>
                        <span>email</span>
                        <span>{user.email}</span>
                    </div>
                    <div className= 'repos-link'>
                        <span>bio</span>
                        <span>{user.bio}</span>
                    </div>
                    
                </div>
                
                {/* <hr/> */}
            </div>

        </div>
    )
}

export default UserPage
