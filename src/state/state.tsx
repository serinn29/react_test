import { add, addStatus} from '../model/add';

type Listener<T> = (items: T[]) => void;

class State<T>{
    protected listeners: Listener<T>[] = [];

    addListener(listenerFn: Listener<T>){
        this.listeners.push(listenerFn);
    }    
}

export class addState extends State<add>{
    private add: add[] = [];
    private static instance: addState;

    private constructor(){
        super();
    }
    static getInstance(){
        if(this.instance){
            return this.instance;
        }
        this.instance = new addState();
        return this.instance;
    }

    Add(title: string, text: string){
        const newadd = new add(
            Math.random.toString(),
            title,
            text,
            addStatus.Active
        );
        this.add.push(newadd);
        this.updateAdd();
        for(const addFn of this.listeners){
            addFn(this.add.slice());
        }
     }
     moveAdd(addId: string, newStatus:addStatus){
        const newadd = this.add.find(ad => ad.id === addId);
        if(newadd && newadd.status !== newStatus){
            newadd.status = newStatus;
            this.updateAdd();
        }
     }
     private updateAdd(){
        for(const addFn of this.listeners){
            addFn(this.add.slice());
        }
     }
}

export const addstate = addState.getInstance();