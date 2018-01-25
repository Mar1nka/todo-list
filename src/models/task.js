let modelId = 0;

export default class Task {

    constructor (data) {
        this.id = ++modelId;
        this.categoryId = data.categoryId;
        this.title = data.title || '';
        this.description = data.description || '';
        this.isCompleted = data.isCompleted || false;
    }
}
