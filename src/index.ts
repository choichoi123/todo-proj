import TodoCollection from "./service/TodoCollection";
import TodoItem from "./model/TodoItem";
import { data } from "./data";
import TodoConsole from "./view/TodoConsole";

console.log("My Todo List");
for (let i in data) {
    let todoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
    todoItem.printDetails();
}

const sampleTodos: TodoItem[] = data.map(
    (item) => new TodoItem(item.id, item.task, item.complete));

const myTodoCollection = new TodoCollection("My Todo List2", sampleTodos);

myTodoCollection.addTodo("JavaScript 학습하기");
myTodoCollection.addTodo("코딩해보기");

myTodoCollection.markComplete(3, true);

console.log(`${myTodoCollection.userName}`);
// myTodoCollection.todoItems.forEach((item) => item.printDetails());

myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails())
console.log("========================")
myTodoCollection.getTodoItems(false).forEach((item) => item.printDetails())
console.log("------------------------")
myTodoCollection.removeComplete()
myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails())


const todoConsole = new TodoConsole();
todoConsole.prompUser();