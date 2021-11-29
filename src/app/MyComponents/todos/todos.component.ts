import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //creating an array and adding into 
  //creating an array and adding into 
  todos: Todo[] = [];
  localItem:string;
  constructor() {
    this.localItem = localStorage.getItem("todos")|| '';
    if(this.localItem==null){
      this.todos=[]
    }
    else{
      this.todos=JSON.parse(this.localItem);
    }
   }
  
  ngOnInit(): void {
  }
//deleting an todo
deleteTodo(todo:Todo){
  console.log(todo);
  let index = this.todos.indexOf(todo);
  this.todos.splice(index,1); //splic(index,count)to delete an specific element in an array
  //console.log("todo deleted")
  localStorage.setItem("todos",JSON.stringify(this.todos));
}
//adding a Todo
addTodo(todo:Todo){
  console.log(todo);
  this.todos.push(todo);
  //console.log("todo added")
  localStorage.setItem("todos",JSON.stringify(this.todos));
}
}
