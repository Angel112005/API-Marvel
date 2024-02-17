export class ListEvent {
    #events = []

    addEvent (event) {this.#events.push(event)}

    getListEvents (){return this.#events}

}