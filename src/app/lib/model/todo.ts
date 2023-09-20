import { FormControl } from '@angular/forms';

export interface Todo {
  workProject: string;
  user: string;
  contract?: string;
}

export interface TodoForm {
  workProject: FormControl<string>;
  user: FormControl<string>;
  contract?: FormControl<string>;
}

export type TodoIndexed = Todo & { id: number };
