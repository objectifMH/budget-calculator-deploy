import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetComponent } from 'src/budget';
import { MatDialog } from '@angular/material';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('listeBudgetInput')
  listeBudget: BudgetComponent[];

  // tslint:disable-next-line:no-input-rename
  @Input('colonneBudgetInput')
  coloneBudget;

  @Output()
  listeBudgetMAJ = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    //console.log('listeBudget dans le composant Liste : ' , this.listeBudget);
  }

  suppBudget(budgetSupp) {
    if ( this.listeBudget.indexOf(budgetSupp) !== -1 ) {
      this.listeBudget.splice(this.listeBudget.indexOf(budgetSupp), 1) ;
      this.listeBudgetMAJ.emit(this.listeBudget);
    }

  }

  onCardClick(budgetItem: BudgetComponent) {
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: budgetItem
    });
    //console.log('card click ', budgetItem);

    dialogRef.afterClosed().subscribe(result => {
    //console.log('result > ', result);
      if ( result ) {
        // On va remplacer l'itemBudget par celui du formulaire, c a d 'result' qui est le budgetItem maj :
        result.indice = this.listeBudget.indexOf(budgetItem) + 1; 
        this.listeBudget[this.listeBudget.indexOf(budgetItem)] = result;

        // on emit la liste MAJ :
        this.listeBudgetMAJ.emit(this.listeBudget);
        //console.log(this.listeBudget);
      }
    }
    ,
    err => console.log(err));
  }

}
