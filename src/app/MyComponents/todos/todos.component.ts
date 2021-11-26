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
  constructor() {
    this.todos=[{
      sno:1,
      title:"Spring boot",
      desc:"How to write custom query",
      active:true
    },{
      sno:2,
      title:"Angular",
      desc:"Intercomponent Communication",
      active:true
    },
  ]
   }
  
  ngOnInit(): void {
  }
//deleting an todo
deleteTodo(todo:Todo){
  console.log(todo);
  let index = this.todos.indexOf(todo);
  this.todos.splice(index,1); //splic(index,count)to delete an specific element in an array
  console.log("todo deleted")
}
//adding a Todo
addTodo(todo:Todo){
  console.log(todo);
  this.todos.push(todo);
  console.log("todo added")
}
}
