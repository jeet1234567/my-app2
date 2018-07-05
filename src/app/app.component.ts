import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { ProductsService } from 'src/app/app-services/products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private newService :ProductsService,) {   }  
  title = 'This world!';
  Repdata;
  ngOnInit() {  
  
  }
}
