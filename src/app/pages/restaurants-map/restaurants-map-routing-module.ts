import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsMapComponent } from './restaurants-map.component';

const routes: Routes = [{
    path: 'restaurants-map',
    component: RestaurantsMapComponent,
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RestaurantsMapRoutingModule { }

export const routedComponents = [
    RestaurantsMapComponent,
];
