import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MoreButtonComponent } from '../lib/buttons/more-button/more-icon.component';
import { ChipComponent } from '../lib/chips/chip.component';
import { WorkIconComponent } from '../lib/icons/work-icon/work-icon.component';
import { TodoIndexed } from '../lib/model/todo';

@Component({
  selector: 'todo',
  standalone: true,
  imports: [
    MoreButtonComponent,
    WorkIconComponent,
    ChipComponent,
    CommonModule,
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  host: { 'collision-id': 'TodoComponent' },
})
export class TodoComponent {
  @Input() todo: TodoIndexed = {
    workProject: '',
    user: '',
    id: 0,
  };
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() editEvent = new EventEmitter<number>();

  readonly labels = {
    title: "Demande d'autorisation de travaux",
    edit: 'Editer',
    delete: 'Supprimer',
  };

  update(): void {
    this.editEvent.emit(this.todo?.id);
  }

  delete(): void {
    this.deleteEvent.emit(this.todo?.id);
  }
}
