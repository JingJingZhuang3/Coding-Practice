import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-product-detail',
  templateUrl: './route-product-detail.component.html',
  styleUrls: ['./route-product-detail.component.css']
})
export class RouteProductDetailComponent implements OnInit {
  productid:number=-1;
  // DI: in order to get params, need current route service object
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    // Get routing parameter
    this.route.params.subscribe(
      data =>{
        console.log(data)
        this.productid = data['lid']
      }
    )
  }

}
