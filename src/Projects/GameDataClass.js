export class GameDataClass{
    constructor(title, queryId, imageURL, innerHTML, tags = ""){
        this.queryId = queryId;
        this.title = title;
        this.imageURL = imageURL;
        this.innerHTML = innerHTML;
        this.tags = tags;
    }
}