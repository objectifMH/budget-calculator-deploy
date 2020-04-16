import { Component, OnInit } from '@angular/core';
import { BudgetComponent } from 'src/budget';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  listeBudgetForm: BudgetComponent[] = [];
  total = 0;
  totalColonne = {depot: null, depense: null};

  constructor() { }

  ngOnInit() {
  }

  recupereBudgetAdd(budgetFormAdd: BudgetComponent) {
    console.log('le output a bien été appelé', budgetFormAdd);
    if (budgetFormAdd.description !== undefined && budgetFormAdd.montant !== undefined) {
      budgetFormAdd.indice = this.listeBudgetForm.length + 1;
      this.listeBudgetForm.push(budgetFormAdd);


    }
    if ( this.listeBudgetForm.length > 0) {
      this.sommeMontant();
    } else {
      this.total = 0;
    }
  }

  sommeMontant() {
      // somme des montant :
      this.total = this.listeBudgetForm.map(budget => budget.montant).reduce((a, b) => (a + b));


      const depense = this.listeBudgetForm.filter(budget => budget.montant < 0).
                    map(budgetD => budgetD.montant );

      this.totalColonne.depense = depense.length > 0 ? depense.reduce((a, b) => (a + b)) : 0 ;

      const depot = this.listeBudgetForm.filter(budget => budget.montant > 0).
                    map(budgetD => budgetD.montant );

      this.totalColonne.depot = depot.length > 0 ? depot.reduce((a, b) => (a + b)) : 0 ;
      //console.log(this.totalColonne);
  }

  allClear() {
    // On vide la liste :
    this.listeBudgetForm = [];
    this.total = 0;
    this.totalColonne = {depense: null, depot: null};
  }

  recupereListeAJour(listeAjour: BudgetComponent[]) {
    this.listeBudgetForm = listeAjour;
    if ( this.listeBudgetForm.length > 0) {
      this.sommeMontant();
    } else {
      this.total = 0;
    }
    console.log("On a recuperer la liste ", this.listeBudgetForm);
  }

}
