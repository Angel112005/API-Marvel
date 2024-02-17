import { Thumbnails } from "./Thumbnails.js"

export class Event extends Thumbnails {
    #id
    #title
    #description
    #characters = []
    #comics = []
    #creators = []
    #series = []
    #stories = []

    setId (id) {this.#id = id}
    getId () {return this.#id}

    setTitle (title) {this.#title = title}
    getTitle () {return this.#title}

    setDescription (description) {this.#description = description}
    getDescription () {return this.#description}

    setCharacters(characters){ this.#characters = characters}
    getCharacters() { return this.#characters}

    setComics(comics){ this.#comics = comics}
    getComics() { return this.#comics}

    setCreators(creators){ this.#creators = creators}
    getCreators() { return this.#creators}

    setSeries(series){ this.#series = series}
    getSeries() { return this.#series}

    setStories(stories){ this.#stories = stories}
    getStories() { return this.#stories}

}