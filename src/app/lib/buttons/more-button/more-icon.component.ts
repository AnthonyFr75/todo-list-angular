import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'more-button',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  standalone: true,
  template: `<button mat-mini-fab color="secondary"><mat-icon>more_vert</mat-icon></button>`,
})
export class MoreButtonComponent {}
