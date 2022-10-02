import styles from "./Contact.module.scss"
import { BsFacebook, BsYoutube, BsLinkedin } from  "solid-icons/bs"

export default function Contact() {
    return (
        <div className={styles.contact}>
            <div className={styles.contact_us_wrapper}>
                <div className={styles.information_wrapper}>
                    <h1>Contact us</h1>
                    <div className={styles.extra}>
                        <div className={styles.box}>
                            <div>I'm a parapgraph. Click here to add your text and edit me</div>
                            <div>Registered Charity: 12345-67</div>
                        </div>
                        <div></div>
                        <div className={styles.box}>
                            <div className={styles.street}>500 Terry Francois Street</div>
                            <div className={styles.city}>San Francisco, CA 94158</div>
                        </div>
                    </div>
                    <h1 className={styles.email}>info@mysite.com</h1>
                    <div className={styles.socials}>
                            <BsFacebook className={styles.social}/>
                            <BsYoutube  className={styles.social}/>
                            <BsLinkedin className={styles.social}/>

                    </div>
                </div>
            </div>

            <div className={styles.newsletter}>
                <h1>Be the first to know</h1>
                <h2>Sign up to our newsletter to stay informed</h2>
                <input placeholder="email"/>
                <h3>Subscribe Now</h3>
            </div>            
        </div>
    )
}
