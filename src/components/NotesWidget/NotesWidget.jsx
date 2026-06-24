import styles from "./NotesWidget.module.css"
import { useStore } from "../../store/useStore"

const NotesWidget = () => {
    const notes = useStore((state) => state.notes)
    const setNotes = useStore((state) => state.setNotes)

    const handleChange = (e) => {
        setNotes(e.target.value)
    }

    const clearNotes = () => {
        setNotes("")
    }

    return (
        <div className={styles.notesCard}>
            <div className={styles.header}>
                <h2>All notes</h2>
                <button
                    className={styles.clearBtn}
                    onClick={clearNotes}
                >
                    Clear
                </button>
            </div>
            <textarea className={styles.notesInput} value={notes} onChange={handleChange} placeholder="Write your notes here..." />
        </div>
    )
}

export default NotesWidget