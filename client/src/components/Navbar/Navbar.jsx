import { For } from "solid-js"
import { BsChevronDown } from "solid-icons/bs"
import styles from "./Navbar.module.scss"
import logo from "../../assets/logo.png"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            {/* First part of the navbar */}
            <div className={styles.logo_wrapper}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={styles.slogan}>
                    <div className={styles.slogan_pt1}>ChoosEquality</div>
                    <div className={styles.slogan_pt2}>Education for all</div>
                </div>
            </div>

            {/* Second part of the navbar */}
            <div className={styles.links}>
                <div className={styles.link}>Home</div>
                <div className={styles.link}>About</div>
                <div className={styles.link}>Education</div>
                <div className={styles.link}>Jobs</div>
                <div className={styles.link}>Housing</div>
                <div className={styles.link}>Health</div>
                <div className={styles.link}>Benefits</div>
                <div className={styles.link}>Events</div>
            </div>

            {/* Third part of the navbar */}
            <div className={styles.profile_pic_wrapper}>
                <div className={styles.pic}>pic</div>
                <BsChevronDown />
            </div>
        </nav>
    )
}
