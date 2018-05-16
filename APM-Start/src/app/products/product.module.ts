import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../home/welcome.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id', component: ProductDetailComponent,
        canActivate: [ProductGuardService]
      },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  providers: [
    ProductGuardService,
    ProductService
  ]
})
export class ProductModule { }
