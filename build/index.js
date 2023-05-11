"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoCollection_1 = __importDefault(require("./TodoCollection"));
const TodoItem_1 = __importDefault(require("./TodoItem"));
const data_1 = require("./data");
console.log("My Todo List");
for (let i in data_1.data) {
    let todoItem = new TodoItem_1.default(data_1.data[i].id, data_1.data[i].task, data_1.data[i].complete);
    todoItem.printDetails();
}
const sampleTodos = data_1.data.map((item) => new TodoItem_1.default(item.id, item.task, item.complete));
const myTodoCollection = new TodoCollection_1.default("My Todo List2", sampleTodos);
myTodoCollection.addTodo("JavaScript 학습하기");
myTodoCollection.addTodo("코딩해보기");
myTodoCollection.markComplete(3, true);
console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item) => item.printDetails());
