import { db } from '../firebase/firebaseConfig'
export const loadNotes = async (uid) => {
    const snap = await db.collection(`${uid}/journal/notes`).get()
    const notes = []
    snap.forEach((note) => {
        notes.push({
            id: note.id,
            ...note.data(),
        })
    })
    return notes
}
