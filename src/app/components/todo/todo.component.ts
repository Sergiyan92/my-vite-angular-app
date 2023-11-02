import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  tasks: { name: string; completed: boolean }[] = [
    { name: 'Task 1', completed: false },
    { name: 'Task 2', completed: false },
    { name: 'Task 3', completed: true },
  ];
  newTask: string = '';
  showCompleted: boolean = false;
  searchQuery: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  toggleTaskCompletion(task: any) {
    task.completed = !task.completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  getFilteredTasks() {
    if (this.showCompleted) {
      return this.tasks;
    } else {
      return this.tasks.filter((task) => !task.completed);
    }
  }

  searchTasks() {
    return this.tasks.filter((task) =>
      task.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
