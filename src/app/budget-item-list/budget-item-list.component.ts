import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetComponent } from 'src/budget';

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
  listeBudgetSupp = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('listeBudget dans le composant Liste : ' , this.listeBudget);
  }

  suppBudget(budgetSupp) {
    if ( this.listeBudget.indexOf(budgetSupp) !== -1 ) {
      this.listeBudget.splice(this.listeBudget.indexOf(budgetSupp), 1) ;
      this.listeBudgetSupp.emit(this.listeBudget);
    }

  }

}
