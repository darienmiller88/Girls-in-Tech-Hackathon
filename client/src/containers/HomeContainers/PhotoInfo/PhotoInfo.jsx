import styles from "./PhotoInfo.module.scss"

export default function PhotoInfo() {
    const InitiativeStatement = ({ header, statement}) => {
        return (
            <div className={styles.initiative_statement}>
                <div className={styles.header}>
                    { header }
                </div>
                <div className={styles.statement_text}>
                    { statement }
                </div>
                <div className={styles.read_more}>Read More</div>
            </div>  
        )
    }

    return (
        <div className={styles.PhotoInfo}>
            <div className={styles.row_one}>
                <div className={styles.initiative_statement_wrapper}>
                    <InitiativeStatement 
                        header={"Our Initiatives"} 
                        statement={"Supporting formally incarcerated people in their efforts to comfortably integrate themselves back into the society."}
                    />
                </div>
                <div></div>
                <div className={styles.mission_wrapper}>
                    <InitiativeStatement 
                        header={"Our Mission"}
                        statement={"I'm a paragraph. Click here to add your own text and edit me. It’s easy."+
                        "Just click “Edit Text” or double click me to add your own content and make"+
                        "changes to the font."}
                    />
                </div>
            </div>

            <div className={styles.row_two}>
                <div className={styles.stories_wrapper}>
                    <InitiativeStatement
                        header={"Stories"}
                        statement={"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."}
                    />
                </div>
                <div></div>
                <div className={styles.news_wrapper}>
                    <InitiativeStatement
                        header={"News"}
                        statement={"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."}
                    />
                </div>
            </div>
        </div>
    )
}
