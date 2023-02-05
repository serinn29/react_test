export enum addStatus{
    Active, Finished
}

export class add{
    constructor(
        public id: string,
        public text: string,
        public title: string,
        public status: addStatus
    ){}
};