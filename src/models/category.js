let modelId = 0;

export default class Category {

    constructor(data) {
        this.id =  ++modelId;
        this.parentId = data.parentId || null;
        this.title =  data.title || '';
        this.isExpanded = data.isExpanded || false;
        // this.list = data.list || [];

    }


}
