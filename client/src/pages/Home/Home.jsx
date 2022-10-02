import { BiRegularChat } from "solid-icons/bi"
import styles from "./Home.module.scss"
import Hero from "../../containers/HomeContainers/Hero/Hero"

export default function Home() {
    return (
        <div className={styles.home}>
            <Hero />
            
            <div className={styles.chat_icon}>
                <BiRegularChat className={styles.icon}/>
            </div>
        </div>
    )
}
