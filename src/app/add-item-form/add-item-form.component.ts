import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { BudgetComponent } from 'src/budget';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  montant: number;
  description: string;


  @Output()
  budgetOutput = new EventEmitter<BudgetComponent>();

  budgetForm: BudgetComponent;

  constructor() { }

  ngOnInit() {
  }

  submitForm(form) {
    this.budgetForm = form.value ;
    console.log(form, this.budgetForm);
    // On déclenche l'output pour envoyer au parent :
    this.budgetOutput.emit(this.budgetForm);

    //on reinitialise le form, pour remettre à 0 les champs : 
    form.reset();

  }

}
