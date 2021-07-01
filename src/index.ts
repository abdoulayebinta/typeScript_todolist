import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
  new TodoItem(1, "Master TypeScript"),
  new TodoItem(2, "Master React"),
  new TodoItem(3, "Master GraphQL"),
  new TodoItem(4, "Build an App", true),
  new TodoItem(5, "Showcase talent"),
];

let collection: TodoCollection = new TodoCollection("Abdoulaye", todos);

console.clear();
console.log(
  `${collection.userName}'s Todo List ` +
    `(${collection.getItemCounts().incomplete} items to do)`
);

//let newId: number = collection.addTodo("Go for run");
//let todoItem: TodoItem = collection.getTodoById(newId);
//console.log(JSON.stringify(todoItem));
//todoItem.printDetails();
//collection.removeComplete();
collection.getTodoItems(true).forEach((item) => item.printDetails());
