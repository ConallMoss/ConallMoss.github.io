import '../index.css';

export function About() {
    return (
    <div style={{width:"90%", justifyContent:"center", margin:"auto"}}>
        <h1 style={{padding:"25px", paddingBottom:"0px"}}> All About Me </h1>
        <div style={{display:"flex"}}>
            <p style={{fontSize:"20px", padding:"25px", marginTop:"10px"}}> 
            Hi! My name is Conall and I'm a <strong>2nd Year Computer Science student</strong> studying at <strong>Queens' College, University of Cambridge.</strong> <br/>
            I'm interested in a wide range of topics within Computer Science and am always eager to learn more about different areas. <br/>
            My favourite languages are <strong>Java</strong> and <strong>Python</strong>, as well as <strong>OCaml</strong>. I also started learning <strong>JavaScript</strong> and <strong>TypeScript</strong> to understand web development better,
            but intend to continue learning many more languages.
            </p>
            <img src="\imgs\quens2_e.jpg" alt="Queens' college Logo" style={{height:"300px", width:"500px", padding:"10px", paddingTop:"0px", borderRadius:"60px"}}/>
        </div>
        <div style={{display:"flex"}}>
        <img src="\imgs\me_jcr3.jpg" alt="my JCR picture" style={{height:"300px", width:"500px", padding:"10px", marginTop:"20px", paddingRight:"5px", marginLeft:"10px", borderRadius:"60px"}}/>
        <p style={{fontSize:"20px", padding:"25px", marginTop:"10px"}}>
        I am currently the elected <a href="https://qjcr.org.uk/"><strong>Undergraduate Accommodation & Facilities Officer for the JCR</strong></a> (Undergraduate Student Representatives) at Queens' College -
        this involves working with the College to help organise accommodation for the 500+ Undergraduates at Queens', 
        as well as to represent the student body at weekly meetings with an administrative board of college. <br/>
        Additionally, while at Sixth Form, I <strong>led the school's code club</strong>, focussing on teaching a group of Year 7 students 
        the basics of programming using a graphics package in Python. I also have a great interest in maths, 
        leading me to compete nationally in maths challenges, both as part of a team and solo, including a <strong>placing in the top 90 UK finalists in a British Maths Olympiad</strong>.
        </p>
        </div>
        <div style={{display:"flex"}}>
        <p style={{fontSize:"20px", padding:"25px", marginTop:"10px"}}>
        I was a <strong>Young Leader</strong> at my local scout group for 4 years, helping plan and lead activities for young scouts, 
        having previously been a member of the Scout Association for over 10 years.<br/>
         In my free time, I enjoy listening to music and reading books - especially fantasy and science fiction genres. <br/>
         Before University, I played a variety of sports including <strong>judo</strong>, <strong>tennis</strong>, and <strong>badminton</strong>. Since joining university, 
         I have tried some new sports such as <strong>climbing</strong> and <strong>Ultimate frisbee</strong>.
        </p>
        <img src="\imgs\climbingwall.jpeg" alt="picture of climbing wall" style={{height:"300px", width:"500px", padding:"10px", paddingTop:"0px", borderRadius:"60px"}}/>
        </div>
    </div>
    )
}