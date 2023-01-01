import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {StoreHomeComponent} from "./store-home/store-home.component";
import {ProductGridComponent} from "./product-grid/product-grid.component";
import {GridMenuComponent} from "./grid-menu/grid-menu.component";
import {BasketComponent} from "./basket/basket.component";

const routes = [
  {path: '', component: StoreHomeComponent, children:
    [
      {path: 'store', component: ProductGridComponent},
      {path: 'store/menu',component: GridMenuComponent},
      {path: 'store/grid',component: ProductGridComponent},
      {path: 'store/basket',component: BasketComponent},
      {path: 'store/:id', component: ProductGridComponent},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {
}