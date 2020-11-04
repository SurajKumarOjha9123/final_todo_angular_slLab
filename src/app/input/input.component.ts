import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  tod = ''
  des = ''
  dat = ''
  todoList = []
  value ;


  AddTodo(todo,description,date){
    this.value = {t : todo,description : description,date : date};
    this.todoList.push(this.value);
    console.log(this.todoList);
  }
  deleteTodo(todo){
    this.todoList = this.todoList.filter((item) => item.t !== todo);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
