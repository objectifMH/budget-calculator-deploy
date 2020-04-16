import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetComponent } from 'src/budget';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input('budgetInputCard')
  budget: BudgetComponent;

  @Output()
  budgetSuppOutput = new EventEmitter<BudgetComponent>();

  constructor() { }

  ngOnInit() {
  }

  supprimeCard(budget) {
    console.log(budget);
    this.budgetSuppOutput.emit(budget);
  }

}
