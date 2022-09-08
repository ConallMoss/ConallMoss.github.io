import { alignPropType } from "react-bootstrap/esm/types"

import '../index.css';

export function Home() {
    return (
        <>
            <div style={{maxWidth:"600px", margin:"auto", justifyContent:"center"}}>
                <div style={{justifyContent:"center"}}>
                    <img src="\imgs\me4.jpg" alt="picture of me" style={{padding:"10px", width:"600px", height:"400px", borderRadius:"100px"}}/>
                </div>
                <div style={{padding:"10px", textAlign:"center"}}>
                    <h1 style={{fontSize:"70px", fontWeight:"bold"}}> Conall Moss </h1>
                    <h2> My Personal Portfolio </h2>
                    <h3> 2nd Year Computer Science Student @ Cambridge University </h3>
                    <div style={{maxWidth:"500px", margin:"auto", justifyContent:"center", padding:"20px"}}> 
                        <a href="https://www.linkedin.com/in/conall-moss-408037221/">
                            <img src="imgs/linkedin_logo.png" alt="linkedin logo" style={{height:"70px", width:"70px", padding:"10px"}}></img>
                        </a>
                        <a href="https://github.com/ConallMoss">
                            <img src="imgs/github_logo.png" alt="github logo" style={{height:"70px", width:"70px", padding:"10px"}}></img>
                        </a>
                        <a href="mailto:cm2121@cam.ac.uk">
                            <img src="imgs/email_logo.png" alt="email logo" style={{height:"50px", width:"70px", padding:"0px"}}></img>
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}