

export function About() {
    return (
    <div style={{width:"80%", justifyContent:"center", margin:"auto"}}>
        <h1 style={{padding:"25px"}}> All About Me </h1>
        <div style={{display:"flex"}}>
            <p style={{fontSize:"20px", padding:"25px"}}> 
                Hi! My name is Conall and I'm a 2nd Year Computer Science student studying at Queens' College, University of Cambridge.<br/>
                I'm interested in a wide range of topics throughout Computer Science, always eager to learn more about different areas. <br/>
                The languages I most enjoy using are Java and Python, as well as OCaml. I am also learning Javascript and TypeScript, but intend to continue
                learning many more languages with different (paradigms?).
            </p>
            <img src="\imgs\squarekirby.png" alt="picture of me" style={{height:"300px", width:"500px", padding:"10px", borderRadius:"100px"}}/>
        </div>
        <div style={{display:"flex"}}>
        <img src="\imgs\squarekirby.png" alt="picture of me" style={{height:"300px", width:"500px", padding:"10px", borderRadius:"100px"}}/>
        <p style={{fontSize:"20px", padding:"25px"}}>
            Outside of Computer Science, I am currently the elected Undergraduate Accommodation & Facilities Officer for the JCR at Queens' College - 
            this involves working with the College to help organise accommodation for the 500+ Undergraduates at Queens', as well as to represent 
            the student body at weekly meetings with an Administrative Board of College. <br/>
            Additionally, while at Sixth Form, I used to lead the school's code club, focussed on teaching a group of Year 7 students the basics of programming.
        </p>
        </div>
        <div style={{display:"flex"}}>
        <p style={{fontSize:"20px", padding:"25px"}}>
            I also used to be a Young Leader at my local scout group for about 4 years, helping plan and lead activities for young scouts, having been a member of
            the Scout Association for over 10 years. <br/>
            In my free time, I enjoy listening to music and reading book - especially fantasy and science fiction genres. <br/>
            Before University, I played a variety of sports including Judo, tennis, and badminton. Since joining university, I have really enjoyed trying some new 
            and different sports like climbing and frisbee.
        </p>
        <img src="\imgs\squarekirby.png" alt="picture of me" style={{height:"300px", width:"500px", padding:"10px", borderRadius:"100px"}}/>
        </div>
    </div>
    )
}