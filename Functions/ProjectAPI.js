/**
 * Class for fetching project data
 */
export class ProjectAPI {

    #request
    #requestParams = { 
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
    }

    constructor() {
    }

    /**
     * @param {*} projectId Project to fetch. Leave null to fetch all
     * @returns Fetch promise
     */
    getProjects(projectId = null) {
        if(projectId == null) {
            this.#setRequest()
        } else {
            this.#setRequest(`projects/${projectId}/`)
            
        }

        return this.#APIfetch()
    }


    /**
     * @param {*} data Project data
     * @returns Fetch promise
     */
    addProject(data, projectId = null) {
        if(projectId == null) {
            this.#setRequest("projects/", "PUT", data)
        } else {
            this.#setRequest(`projects/${projectId}/`, "PUT", data)
        }

        return this.#APIfetch()
    }

    deleteProject(projectId) {
        this.#setRequest(`projects/${projectId}`, "DELETE")
        return this.#APIfetch(false)
    }

    /**
     * @param {*} projectId Project to fetch from. Leave null to fetch all technologies
     * @param {*} method Fetch method (GET/PUT...)
     * @returns Fetch promise
     */
    getTechnologies(projectId = null) {
        if(projectId != null) {
            this.#setRequest("technologies/")
        } else {
            this.#setRequest(`projects/${projectId}/technologies/`)
        }

        return this.#APIfetch()
    }

    /**
     * @param {*} data Project data
     * @param {*} projectId Project in which to add the technology
     * @param {*} technologyId Technology to edit
     * @returns Fetch promise
     */
    addTechnology(data, projectId = null) {
        if(projectId == null) {
            this.#setRequest(`technologies/`, "PUT", data)
        } else {
            this.#setRequest(`projects/${projectId}/technologies/`, "PUT", data)
        }

        return this.#APIfetch()
    }

    deleteTechnology(technologyId, projectId = null) {
        if(projectId == null) {
            this.#setRequest(`technologies/${technologyId}`, "DELETE")
        } else {
            this.#setRequest(`projects/${projectId}/technologies/${technologyId}`, "DELETE")
        }
        
        return this.#APIfetch(false)
    }

    // Create the request object
    #setRequest(path = "projects/", method = "GET", body = null) {
        if(body != null) {
            this.#requestParams = {...this.#requestParams, body: JSON.stringify(body)}
        }
        this.#request = new Request(`http://localhost:8080/api/${path}`, {
            method: method,
            ...this.#requestParams
        })
    }

    // Fetch data using provided parameters
    #APIfetch(returnsData = true) {
        return new Promise((resolve, reject) => {
            if(returnsData) {
                fetch(this.#request)
                .then((response) => response.json())
                .then((data) => {
                    resolve(data)
                })
                .catch(e => reject(e))
            } else {
                fetch(this.#request)
                .then(res => resolve())
                .catch(e => reject(e))
            }
        })
    }

}
