import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/app-services/products.service';
import { Router } from '@angular/router';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
Repdata:any=[];
  constructor(private newService:ProductsService, private router: Router) { }

  ngOnInit() {
    
    this.newService.GetProducts().subscribe(data =>{
      this.Repdata = data;
      console.log("this.Repdata"); 
      console.log(this.Repdata);
    })
  
  }


  deleteProduct = function(productId){
    {
      this.newService.deleteProduct(productId)  
      .subscribe(data =>  {  alert("Product Deleted Successfully!");  
       this.router.navigate(['products']);
         this.ngOnInit();    
      }   
      , error => this.errorMessage = error )  
    }
  }

  edit = function(product){
  console.log("product123");
  console.log(product);
    // this.router.navigate(['createproducts']);
    this.router.navigate(['createproducts'],  { queryParams: { product: product }});
  }

}
