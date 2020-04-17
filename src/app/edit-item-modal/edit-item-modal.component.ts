import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { BudgetComponent } from 'src/budget';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<EditItemModalComponent>,
              @Inject(MAT_DIALOG_DATA) public formInput: BudgetComponent) { }

  ngOnInit() {
  }

  onSubmitEdition(formUpdate: BudgetComponent) {
    //console.log(formUpdate);
    this.dialogRef.close(formUpdate);
  }

}
