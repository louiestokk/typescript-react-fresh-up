export interface Todo {
    id:number;
    todo:string;
    isDone:boolean
}

type Actions = 
| {type:'add'; payload:string}
| {type:'remove'; payload:number}
| {type:'done'; payload:number}

const Todoreducer = (state:Todo[],action:Actions) =>{}

export interface User {
    name:string;
    age:string;
    date:number
}