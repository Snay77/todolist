import { useState } from "react";

const myTasks = [
    {"id":1,"name":"Manger Haricots","status":false},
    {"id":2,"name":"Devoirs","status":false},
    {"id":3,"name":"Ranger les chausettes","status":false}
];

let count = myTasks.length

export function addTask(x){
    count+=1
    myTasks.push({"id":count,"name":x,"status":false})
    console.log(myTasks)
    return myTasks
}


export {myTasks};