import { Component, OnInit } from '@angular/core';
// import {FormsModule} from "@angular/forms";
// import { type } from 'os';
import { ProductsService } from '../app-services/products.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {
  product:any={};
  sub: any;
  // product:any={"productName": "",
//     "weight": "",
//     "price": ""
//   }; 
  
  constructor(private newService :ProductsService, private router: Router, private route: ActivatedRoute) { }
  
  Repdata="";  
  //valbutton ="Save";  
  ngOnInit() {
   
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      console.log("params params params ");
      console.log(params);
      // Defaults to 0 if no query param provided.
     
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  onSubmit = function(product) {    
    console.log("product");
    console.log(product);
    //product.mode= this.valbutton;
    if(product.productName==undefined || product.weight==undefined || product.price==undefined) {
      alert("Enter The mandatory field");
    } 
    else{
      this.newService.saveUser(product)  
      .subscribe(data =>  {  alert(data.data);  
       this.router.navigate(['products']);
       //  this.ngOnInit();    
      }   
      , error => this.errorMessage = error )  
    }
     
       
   }

  
}
