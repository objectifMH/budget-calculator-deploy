import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetComponent } from 'src/budget';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Output()
  cardClick = new EventEmitter<any>();

  @Input('budgetInputCard')
  budget: BudgetComponent;

  @Input()
  indice: number;

  @Output()
  budgetSuppOutput = new EventEmitter<BudgetComponent>();

  constructor() { }

  ngOnInit() {
  }

  supprimeCard(budget) {
    console.log(budget);
    this.budgetSuppOutput.emit(budget);
  }

  onCardClick() {
    this.cardClick.emit();
  }
}
