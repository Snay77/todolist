import { useState } from "react";

const myTasks = [
    {"id":1,"name":"Manger Haricots"},
    {"id":2,"name":"Devoirs"},
    {"id":3,"name":"Ranger les chausettes"}
];

let count = myTasks.length

export function addTask(x){
    count+=1
    myTasks.push({"id":count,"name":x})
    console.log(myTasks)
    return myTasks
}


export {myTasks};