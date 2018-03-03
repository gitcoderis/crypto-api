import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCryptoComponent } from './all-crypto/all-crypto.component';

const routes: Routes = [
  { path: '', component: AllCryptoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
