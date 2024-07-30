import styles from "../Hero/Hero.module.css"
import profile from "../../assets/profile.jpg"
import { Link } from "react-router-dom"
import resume from "../../../public/Nitesh_latest_resume.pdf"

const Hero = () => {
    return (
        <div>
            <>
                <div className={styles.container}>
                    <img src={profile} alt="dp" className={styles.logo} />
                    <h1 className={styles.title}><span className={styles.name}>I am Nitesh,</span>frontend </h1>
                    <h2 className={styles.title_1}> developer based in India</h2>

                    {/* <p className={styles.title_para}> I am a frontend developer from India </p> */}
                    <p className={styles.title_para}> <a href="https://github.com/Niteshnkk">Git Hub Profile</a> </p>
                    <div className={styles.btn_latest}>
                        {/* <a href=""></a> */}
                        <Link to="/contact">
                            <button className="btn" data-type="button_gradient"> connect with me </button>
                        </Link>

                        <a href={resume} download>
                            <button className="btn_111" data-type="button_normal">My resume</button>
                        </a>
                    </div>

                </div>
            </>
        </div>
    )
}

export default Hero


