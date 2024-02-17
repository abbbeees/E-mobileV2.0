import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  newTodo: string = '';
  todos: Todo[] = [];

  ngOnInit() {
    // Load todos from local storage when the component initializes
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.unshift({ text: this.newTodo.trim(), completed: false });
      this.saveTodosToLocalStorage();
      this.newTodo = ''; // Clear the input after adding a todo
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveTodosToLocalStorage();
  }

  updateTodoStatus(index: number, completed: boolean) {
    this.todos[index].completed = completed;
    this.saveTodosToLocalStorage();
  }

  private saveTodosToLocalStorage() {
    // Save todos to local storage
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}

interface Todo {
  text: string;
  completed: boolean;
}