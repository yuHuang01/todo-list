export default class LocalStoreInt {
    constructor(library){
        this.library = library;
    }
    addToLibrary(todo){
        this.library[todo.title] = todo
    }
}