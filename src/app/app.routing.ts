import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'Account'},
  {path: '**', pathMatch: 'full', redirectTo: 'Account'},
  {path: 'Accounts', component: AccountComponent},
  {path: 'Transactions', component: TransactionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [AccountComponent, TransactionComponent];
