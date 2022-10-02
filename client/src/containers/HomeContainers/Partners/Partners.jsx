import styles from "./Partners.module.scss"
import partner1 from "../../../assets/home-pictures/partner1.png"
import partner2 from "../../../assets/home-pictures/partner2.png"
import partner3 from "../../../assets/home-pictures/partner3.png"
import partner4 from "../../../assets/home-pictures/partner4.png"
import partner5 from "../../../assets/home-pictures/partner5.png"

export default function Partners() {
    return (
        <div className={styles.partners}>
            <div className={styles.title}>Our Partners</div>
            <div className={styles.partners}>
                <div className={styles.img_wrapper}>
                    <img src={partner1} alt="partner1"/>
                </div>
                <div className={styles.img_wrapper}>
                    <img src={partner2} alt="partner2"/>
                </div>
                <div className={styles.img_wrapper}>
                    <img src={partner3} alt="partner3"/>
                </div>
                <div className={styles.img_wrapper}>
                    <img src={partner4} alt="partner4"/>
                </div>
                <div className={styles.img_wrapper}>
                    <img src={partner5} alt="partner5"/>
                </div>
            </div>
        </div>
    )
}
