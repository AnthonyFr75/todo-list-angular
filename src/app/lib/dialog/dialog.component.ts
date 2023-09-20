import { Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Todo, TodoForm } from '../model/todo';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  styleUrls: ['./dialog.component.scss'],
  host: { 'collision-id': 'AppComponent' },
})
export class DialogComponent {
  // Have to be i18n in real project
  readonly labels = {
    create: {
      title: "Ajouter une demande d'autorisation",
      accept: 'Créer',
    },
    edit: {
      title: "Editer une demande d'autorisation",
      accept: 'Editer',
    },
    workProject: 'Project de travaux',
    user: 'Utilisateur',
    contract: 'Contrat',
    cancel: 'Cancel',
  } as const;

  readonly formGroup = new FormGroup<TodoForm>({
    workProject: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
    user: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
    contract: new FormControl('', { nonNullable: true }),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Todo | null,
    public dialogRef: MatDialogRef<DialogComponent>
  ) {
    if (this.data) {
      this.formGroup.patchValue(this.data);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (this.formGroup.valid) {
      this.dialogRef.close(this.formGroup.getRawValue());
    }
  }
}
