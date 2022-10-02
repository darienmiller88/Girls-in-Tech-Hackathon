import { BiRegularChat } from "solid-icons/bi"
import styles from "./Home.module.scss"
import Hero from "../../containers/HomeContainers/Hero/Hero"
import PhotoInfo from "../../containers/HomeContainers/PhotoInfo/PhotoInfo"

export default function Home() {
    return (
        <div className={styles.home}>
            <Hero />
            <PhotoInfo />
            
            <div className={styles.chat_icon}>
                <BiRegularChat className={styles.icon}/>
            </div>
        </div>
    )
}
