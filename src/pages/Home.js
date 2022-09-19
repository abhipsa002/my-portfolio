import React from "react";
import "../styles/Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Background from "../assets/passport.jpg"
function Home() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const onClickUrl = (url) => {
    return () => openInNewTab(url)
  }
  return (
    <div className="home">
      <div className="about">
        <img src={Background} alt="passport size" className="passport"/>
        <h2>Hi, My Name is Abhipsa Mohapatra</h2>
        <div className="prompt">
          <p>Software Engineer with a passion of learning and developing!!</p>
          <LinkedInIcon onClick={onClickUrl('https://www.linkedin.com/in/abhipsa002/')}/>
          <EmailIcon onClick={onClickUrl('mailto:abhipsa.mohapatra2@gmail.com')}/>
          <GithubIcon onClick={onClickUrl('https://github.com/abhipsa002/')}/>

        </div>
      </div>
      <div className="row">
      <div className="skills col-left">
        <h2>Skills and Strengths</h2>
        <ol className="list">
          <li className="item">
            <p className="p-skill">Front-End</p>
            <span>React JS, Angular</span>
          </li>
          <li className="item">
            <p className="p-skill">Back-End</p>
            <span>Java</span>
          </li>
          <li className="item">
            <p className="p-skill">Languages</p>
            <span>Java, Javascript</span>
          </li>
          <li className="item">
            <p className="p-skill">Others</p>
            <span>DSA, Git, Github</span>
          </li>
        </ol>
      </div>
      <div className="skills col-right">
        <h2>Additional Information</h2>
        <ol className="list">
        <li className="item">
            <p className="p-skill">Other Certifications</p>
            <span>Microsoft Student Partner, School Topper & Best Student Award , Google IT Support, Coding Ninjas Java DSA, Web Development(IEEE)</span>
          </li>
          <li className="item">
            <p className="p-skill">Hobbies</p>
            <span>Coding, Dancing, Singing, Linkedin surfing</span>
          </li>          
          <li className="item">
            <p className="p-skill">Speaking Languages</p>
            <span>English, Odia, Hindi, Bengali, German</span>
          </li>
        </ol>
      </div>
      </div>

    </div>
  );
}

export default Home;



// import React from "react";
// import Background from "../assets/background.jpg"
// import { Container } from "react-bootstrap";
// // import Header from "./Header";
// import Typing from "react-typing-animation";
// import { FaAngleDoubleDown } from "react-icons/fa";

// function Home() {
//   return (
//     <Container
//       fluid
//       className="hero-image"
//       style={{ backgroundImage: `url(${Background})` }}
//     >
//       {/* <Header /> */}
//       <div className="center">
//         <h1 className="intro-text">Hey! I'm Renzell</h1>

//         <h3>
//           <Typing speed={50}>
//             {" "}
//             a <em className="title-text">Full Stack Web Developer.</em>{" "}
//           </Typing>
//           <i class="fas fa-angle-double-down"></i>
//         </h3>
//       </div>
//       <div className="down-icon">
//         <FaAngleDoubleDown className="bounce" style={{ color: "white" }} />
//       </div>
//     </Container>
//   );
// }

// export default Home;
