import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OngAcceptFoodComponent } from './ong-accept-food.component';

const routes: Routes = [{
  path: 'ong-accept-food',
  component: OngAcceptFoodComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngAcceptFoodRoutingModule { }

export const routedComponents = [
  OngAcceptFoodComponent,
];