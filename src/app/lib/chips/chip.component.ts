import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'chip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  host: { 'collision-id': 'ChipComponent' },
})
export class ChipComponent {
  @Input({ required: true }) type: 'status' | 'contract' | 'user' = 'status';
  @Input() text: string = '';
}
