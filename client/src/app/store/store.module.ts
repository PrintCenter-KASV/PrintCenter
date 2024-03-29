import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreHomeComponent} from './store-home/store-home.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatTreeModule} from "@angular/material/tree";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ProductGridComponent} from './product-grid/product-grid.component';
import {GridMenuComponent} from './grid-menu/grid-menu.component';
import {RouterOutlet} from "@angular/router";
import {StoreRoutingModule} from "./store-routing.module";
import {BasketComponent} from './basket/basket.component';
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";
import {AdminComponent} from './admin/admin.component';
import {MatSelectModule} from "@angular/material/select";
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {OrderStepperComponent} from './order-stepper/order-stepper.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrderSuccessComponent } from './order-success/order-success.component';


@NgModule({
  declarations: [
    StoreHomeComponent,
    ProductGridComponent,
    GridMenuComponent,
    BasketComponent,
    AdminComponent,
    ProductDetailComponent,
    OrderStepperComponent,
    OrderSuccessComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MatSidenavModule,
    MatIconModule,
    MatTreeModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSelectModule,
    MatStepperModule,
    MatCardModule,
    MatCheckboxModule,

    StoreRoutingModule,
    RouterOutlet,
  ],
  exports: [
    StoreHomeComponent
  ]
})
export class StoreModule {
}
