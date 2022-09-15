
import '../index.css';

export function Projects() {
    return (
    <div>
        <link rel="stylesheet" type="text/css" href="../index.css"/>
        

        <h1 style={{fontWeight:"bold"}}>Experience</h1>
        
        <div style={{display:"flex", width:"100%"}}>
            <img src="\imgs\cisco2.jpg" alt="Cisco Company Logo" style={{height:"250px", width:"400px", padding:"10px", borderRadius:"75px", margin:"10px"}}/>
            <div style={{padding:"20px", marginTop:"20px"}}>
                <h2>Cisco Software Engineering Micro-Internship (2022)</h2>
                <p> I worked at Cisco (networking, hardware and software company) for one week as an intern, where I helped the company build an internal tool for converting from YANG to JSON
                    (data modelling languages) using Python. This was able to make improvements of 10-100x speeds to their previous solution 
                    when put in use. As my first experience of working in a company, it was a different style of development that I was used to, but I learnt a lot from it.</p>
            </div>
        </div>

        <h1 style={{fontWeight:"bold"}}>Projects</h1>

        <div style={{display:"flex", width:"100%"}}>
            <a href="https://conallmoss.github.io/">
            <img src="\imgs\myweb2.png" alt="Picture of my website" style={{height:"300px", width:"400px", padding:"10px", borderRadius:"75px", margin:"10px"}}/>
            </a>
            <div style={{padding:"20px", marginTop:"20px"}}>
                <h2>Personal Website (2022)</h2>
                <p>This is my personal website, which I built in order to learn the technologies and structure of website design and creation. This website was built using Typescript, HTML and CSS with the React library,
                    and is hosted online using GitHub pages. As I hadn't built my own website like this before, I used a tutorial from WebDevSimplified <a href="https://www.youtube.com/watch?v=lATafp15HWA">here</a>, which gave me a template from which I could work from.
                    </p>
                <a href="https://github.com/ConallMoss/ConallMoss.github.io" className="rect">
                    View on Github →
                </a>
            </div>
        </div>

        <div style={{display:"flex", width:"100%"}}>
            <img src="\imgs\autobubble2.jpg" alt="Picture of AutoBubble in use" style={{height:"280px", width:"400px", padding:"10px", borderRadius:"75px", margin:"10px"}}/>
            <div style={{padding:"20px", marginTop:"10px"}}>
                <h2>AutoBubble - Automatic speech bubbling (2022)</h2>
                <p> Group project for the Hack Cambridge Atlas Hackathon 2022, <strong>winning the Deepgram Challenge award</strong>. In 24 hours, we as a team of 4 created a browser extension that adds live speech captioning next to peoples faces as they are speaking.
                    This was built using the faces-api.js library for facial recognition, the Deepgram speech-to-text API for captioning and a Node.js powered backend server. On this project I worked mainly with integrating the Deepgram API into our backend server.
                     </p>
                <div style={{display:"flex", width:"100%"}}>
                <a href="https://github.com/ConallMoss/Checkers" className="rect">
                    View on Github →
                </a>
                <a href="https://devpost.com/software/autobubble" className="rect" style={{marginLeft:"20px", width:"160px"}}>
                    View on Devpost →
                </a>
                </div>
            </div>
        </div>

        <div style={{display:"flex", width:"100%"}}>
            <img src="\imgs\checkers2.png" alt="Picture of Checkers game" style={{height:"300px", width:"400px", padding:"10px", borderRadius:"75px", margin:"10px"}}/>
            <div style={{padding:"20px", marginTop:"20px"}}>
                <h2>Network Java Checkers Game (2022)</h2>
                <p> This is an online network based 2-player Checkers game I built in Java in order to better understand and implement Object Oriented programming techniques I had recently learnt in my University course.
                    I also used it to learn how to create a client-server networked system with sockets, as well as using a GUI in Java with user inputs.</p>
                <a href="https://github.com/ConallMoss/Checkers" className="rect">
                    View on Github →
                </a>
            </div>
        </div>

        <div style={{display:"flex", width:"100%"}}>
            <img src="\imgs\mariorun2.png" alt="picture of mario game" style={{height:"300px", width:"400px", padding:"10px", borderRadius:"75px", margin:"10px"}}/>
            <div style={{padding:"20px", marginTop:"20px"}}>
                <h2>Infinite Runner Game (2021)</h2>
                <p> This is a Mario-inspired runner game I created for my A-Level coursework for Computer Science, which achieved a mark of 70/70. <br/>
                    Developed using Python, with graphics done through the Pygame library, this game features the player character running at and
                    killing oncoming enemies in order to try to score as many points as they can, with their highscore saved against their login. </p>
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