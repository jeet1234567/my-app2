import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {FormsModule} from "@angular/forms";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app.routing.module';
import { OrdersComponent } from './orders/orders.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { ProductsService } from './app-services/products.service';
import { CreateOrderComponent } from './create-order/create-order.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    OrdersComponent,
    CreateProductsComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule,ReactiveFormsModule,HttpModule,RouterModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
