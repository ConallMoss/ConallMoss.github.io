
import '../index.css';

export function Projects() {
    return (
    <div>
        <link rel="stylesheet" type="text/css" href="../index.css"/>
        

        <h1 style={{fontWeight:"bold"}}>Experience</h1>
        
        <div style={{display:"flex", width:"100%"}}>
            <img src="\imgs\cisco.jpg" alt="Cisco Company Logo" style={{height:"200px", width:"400px", padding:"10px", borderRadius:"75px"}}/>
            <div style={{padding:"20px"}}>
                <h2>Cisco Micro-internship </h2>
                <p> I worked at Cisco (technology and communications company) for one week as an intern, where I helped the company build an internal tool for converting between data structure types using Python. This was able to make improvements of 10-100x speeds to their previous system. </p>
            </div>
        </div>

        <h1 style={{fontWeight:"bold"}}>Projects</h1>

        <div style={{display:"flex", width:"100%"}}>
            <img src="\imgs\checkersgamepic3.png" alt="Picture of Checkers game" style={{height:"300px", width:"500px", padding:"10px", borderRadius:"100px"}}/>
            <div style={{padding:"20px"}}>
                <h2>Network Java Checkers Game</h2>
                <p> This is an Online network based 2-played Checkers game I built in Java in order to better understand and implement some Object Oriented techniques I had recently learnt in my University course.
                    I also used it to learn how to create a client-server networked system with sockets, as well as using a GUI in Java with userinputs.</p>
                <a href="https://github.com/ConallMoss/Checkers" className="rect">
                    View on Github →
                </a>
            </div>
        </div>

        <div style={{display:"flex", width:"100%"}}>
            <img src="\imgs\mariorun.PNG" alt="picture of mario game" style={{height:"300px", width:"350px", padding:"10px", borderRadius:"100px"}}/>
            <div style={{padding:"20px"}}>
                <h2>Infinite Runner Game </h2>
                <p> This is Mario-inspired runner game I created for my A-Level coursework for Computer Science, which achieved a mark of 70/70. <br/>
                    Developed using Python, with graphics done through the Pygame library, this game features the player character running at 
                    killing oncoming enemies in order to try to score a high a score as possible, which is saved against their login. </p>
                <a href="https://github.com/ConallMoss/Mario-Game" className="rect">
                    View on Github →
                </a>
            </div>
        </div>


        
        

        {/* <div style={{display:"flex", width:"100%"}}>
        <h2> This website </h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
        </div>
        <div style={{display:"flex", width:"100%"}}>
        <h2> Hackathon Autobubbler </h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
        </div>
        <div style={{display:"flex", width:"100%"}}>
        <h2> Graphics - Ray Tracer </h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
        </div>
        <div style={{display:"flex", width:"100%"}}>
        <h2> Graphics - Scene Graph</h2> 
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
        </div> */}
        

        
        
    </div>
    )
}

/* Projects:
- Cisco Micro-internship
- Java Checkers game
- Infinite Runner Game
- JS multiplayer
- this website/tutorial website
- Hackathon Autobubbler
- Graphics - Ray Tracer
- Graphics - Scene Graph



- JS online game - upload (somehow) to github
- Ray Tracer / Scene graph- to upload 
- Network Checkers
- Infinite Runner
- This Website (+tutorial website)
- Hackathon Autobubbler


<button onClick={"document.location='www.google.com'"}> test </button>

*/