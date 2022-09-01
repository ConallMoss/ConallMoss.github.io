export function Test() {
    return (
        <>
        
        <h1>
            Home
        
        </h1>
        <div style={{display:"flex", width:"100%"}}>
            <div style={{}}>
                <img src="\imgs\me.jpg" alt="image of me"/> 
            </div>
            <div style={{padding:"10px", textAlign:"left"}}>
                <h1> Conall Moss </h1>
                <p> 
                    Hi! My name is Conall and I'm a 2nd Year Computer Science student at Queens' College, University of Cambridge.
                    
                </p>
                <p>  </p>
            </div>
        </div>
        <div style={{padding:"10px"}}> 

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
    </>
    
    )
}