"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Master TypeScript"),
    new todoItem_1.TodoItem(2, "Master React"),
    new todoItem_1.TodoItem(3, "Master GraphQL"),
    new todoItem_1.TodoItem(4, "Build an App", true),
    new todoItem_1.TodoItem(5, "Showcase talent"),
];
let collection = new todoCollection_1.TodoCollection("Abdoulaye", todos);
console.clear();
console.log(`${collection.userName}'s Todo List ` +
    `(${collection.getItemCounts().incomplete} items to do)`);
//let newId: number = collection.addTodo("Go for run");
//let todoItem: TodoItem = collection.getTodoById(newId);
//console.log(JSON.stringify(todoItem));
//todoItem.printDetails();
//collection.removeComplete();
collection.getTodoItems(true).forEach((item) => item.printDetails());
