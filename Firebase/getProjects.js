import { database, auth } from './Database'
import { ref, get, set, push, child, update, query, remove, increment, serverTimestamp } from "firebase/database";

// Store user-specific information for an item (name for item, description...)
export const getProjects = () => {
    return new Promise((resolve, reject) => {
        get(ref(database, "projects/"))
        .then(snapshot => {
            let projects = snapshot.val()
            resolve(projects)
        })
        .catch(e => reject(e))
    })
}

export const getProject = (name) => {
    return new Promise((resolve, reject) => {
        get(ref(database, "projectdata/" + name))
        .then(snapshot => {
            let project = snapshot.val()
            resolve(project)
        })
        .catch(e => reject(e))
    })
}