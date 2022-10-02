import styles from "./Hero.module.scss"
import hands from "../../../assets/home-pictures/hands.jpg"

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.slogan_wrapper}>
                <div className={styles.hero_slogan_pt1}>Free & Accessible</div>
                <div className={styles.hero_slogan_pt2}>Resources for you</div>
            </div>

            <div className={styles.join_now_wrapper}>
                <div>Take action now to GROW yourself</div>
                <button>Join now</button>
            </div>
        </div>
    )
}
