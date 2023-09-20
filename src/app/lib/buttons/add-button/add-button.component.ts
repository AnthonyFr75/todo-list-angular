import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'add-button',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  standalone: true,
  template: `<button mat-raised-button color="primary">
    <mat-icon>add</mat-icon>
    {{ addButtonName }}
  </button>`,
})
export class AddButtonComponent {
  readonly addButtonName = 'Ajouter';
}
