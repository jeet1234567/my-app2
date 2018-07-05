import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from 'src/app/products/products.component';
import { HomeComponent } from 'src/app/home/home.component';
import { OrdersComponent } from 'src/app/orders/orders.component';
import { CreateProductsComponent } from 'src/app/create-products/create-products.component';
import { CreateOrderComponent } from './create-order/create-order.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products', children:[{path: 'createproducts', component: CreateProductsComponent}]} ,
    {path: 'products', children:[{path: 'createproducts/:queryParams', component: CreateProductsComponent}]} ,
    {path: 'orders', component: OrdersComponent},
    {path: 'orders', children:[{path: 'createorder', component: CreateOrderComponent}]}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}