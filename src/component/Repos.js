import React,{useState,useEffect}  from 'react'
import Axios from "axios";

function Repos({repos_url}) {

    const [repos, setRepos]= useState([])

    const fetchrepo= async ()=>{
        const {data}= await Axios.get(repos_url);
        setRepos(data)
        console.log("repo data"+data);
    }

    useEffect(() => {
        fetchrepo();
    }, [repos_url])

    return (
        <div>
            <div className ="reposrender">
            <h1 className="text-center">Project</h1>
                {repos.map(repo=>(
                    <div className="repos-link" key={repo.id}>
                        <p>{repo.name}</p>
                        {/* <p>Hello</p> */}
                        <p><a href={repo.html_url}>Goto-Link</a></p>
                    </div>
                ))} 
            </div>                
        </div>
    )
}

export default Repos
