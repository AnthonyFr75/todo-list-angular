import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { AddButtonComponent } from './lib/buttons/add-button/add-button.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './lib/dialog/dialog.component';
import { Todo, TodoIndexed } from './lib/model/todo';
import { WorkIconService } from './lib/icons/work-icon/work-icon.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TodoComponent, AddButtonComponent, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: { 'collision-id': 'AppComponent' },
})
export class AppComponent {
  readonly labels = {
    appName: 'Liste des demandes',
    appContext: "Gérer les demandes d'autorisation de travaux.",
  };
  todos: TodoIndexed[] = [];

  constructor(
    public dialog: MatDialog,
    public workIconService: WorkIconService
  ) {}

  addTodo(): void {
    this._openDialog({
      afterClosed: (newTodo: Todo) => {
        if (newTodo == null) {
          return;
        }
        this.todos.push({
          ...newTodo,
          id: this._nextKeyValue,
        });
      },
    });
  }

  editTodo(indexTodo: number): void {
    this._openDialog({
      data: this.todos.find((todo) => todo.id === indexTodo),
      afterClosed: (newTodo: Todo) => {
        if (newTodo == null) {
          return;
        }
        this.todos = this.todos.reduce((acc: TodoIndexed[], current) => {
          const updatedTodos = { id: current.id, ...newTodo };
          return [...acc, current.id === indexTodo ? updatedTodos : current];
        }, []);
      },
    });
  }

  deleteTodo(indexTodo: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== indexTodo);
  }

  private _openDialog({
    data,
    afterClosed,
  }: {
    data?: TodoIndexed;
    afterClosed: (newTodo: TodoIndexed) => void;
  }) {
    const dialogRef = this.dialog.open(DialogComponent, { data });
    dialogRef.afterClosed().subscribe(afterClosed);
  }

  private get _nextKeyValue(): number {
    return (
      this.todos
        .map((todo) => todo.id)
        .reduce((max, curr) => Math.max(max, curr), -1) + 1
    );
  }
}
