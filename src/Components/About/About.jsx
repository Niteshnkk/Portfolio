import profile from "../../assets/profile.jpg"
import "../About/About.css"
import code from "../../assets/coding.png"
const About = () => {
    return (
        <div>
            <div className="about-container">
                <div className="title">
                    <h1>About me</h1>
                    <img src={code} alt="about_dp" />
                </div>
                <div className="middle-content">
                    <img src={profile} alt="" className="logo_1" />
                    <p >
                        Hi, I&apos;m Nitesh, a B.Tech graduate in Computer Science and Engineering. I have a deep passion for front-end development and enjoy creating engaging user interfaces using HTML, CSS, JavaScript, ReactJS, and Bootstrap. Currently, I am expanding my skill set by learning Node.js and MongoDB to enhance my capabilities in back-end development. My goal is to leverage my knowledge in both front-end and back-end technologies to build seamless and robust web applications.
                    </p>

                    <div className="skill">
                        <div className="skill_1"><h6 className="move_">Html </h6> <hr /></div>

                        <div className="skill_2"><h6 className="move_">Css </h6><hr /></div>
                        
                        <div className="skill_3"><h6 className="move_">Js </h6><hr /> </div>
                        <div className="skill_4"><h6 className="move_">Bootstrap </h6><hr /></div>
                        
                        <div className="skill_5"><h6 className="move_">React js</h6> <hr /></div>
                        




                    </div>



                </div>

                <div className="exp">
                    <div>
                        <h3>Fresher</h3>
                        <p>Years of Experience</p>
                    </div>
                    <hr />
                    <div>
                        <h3>10+</h3>
                        <p>Project completed</p>
                    </div>
                    <hr />
                    <div>
                        <h3> 5+</h3>
                        <p>Project Working</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About

