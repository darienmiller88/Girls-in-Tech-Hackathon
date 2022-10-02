import { For } from "solid-js"
import { BsChevronDown } from "solid-icons/bs"
import styles from "./Navbar.module.scss"
import logo from "../../assets/logo.png"

export default function Navbar() {
    const redirect = (route) => {
        console.log("route:", route);
        location.replace(route)
    }

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
                <div className={styles.link} onClick={() => { redirect("/")}}>Home</div>
                <div className={styles.link} onClick={() => { redirect("/about")}}>About</div>
                <div className={styles.link} onClick={() => { redirect("/")}}>Education</div>
                <div className={styles.link} onClick={() => { redirect("/")}}>Jobs</div>
                <div className={styles.link} onClick={() => { redirect("/")}}>Housing</div>
                <div className={styles.link} onClick={() => { redirect("/")}}>Health</div>
                <div className={styles.link} onClick={() => { redirect("/")}}>Benefits</div>
                <div className={styles.link} onClick={() => { redirect("/")}}>Events</div>
            </div>

            {/* Third part of the navbar */}
            <div className={styles.profile_pic_wrapper}>
                <div className={styles.pic}>pic</div>
                <BsChevronDown />
            </div>
        </nav>
    )
}
