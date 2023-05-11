import TodoCollection from "./TodoCollection";
import TodoItem from "./TodoItem";
import { data } from "./data";

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
myTodoCollection.todoItems.forEach((item) => item.printDetails());
