import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ApiService } from './../api.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  public searchText:any;
  result;item;productDetails;id:any
    providerDetails={
      "name": "",
      "img": "",
      "category": "",
      "breakfast":"" ,
      "lunch": "",
      "dinner": "",
      "rating": "",
      "lon": "",
      "lat": "",
      "zoom": "",
      "provider_address": "",
      "price": "",
      "quantity": "",
      "available": "",
      "provider_id": "",
      "provider_name": "",
      "tax": ""
    };
    constructor(public data:ApiService,public router:Router) {
      this.data.loadData("/items").then((result)=> {
      
        this.data.result=result;
        console.log(result);
        this.sam();
       },(err)=>{
     
       }).catch((err)=>{
         console.log("unhandled rejection",err.message);
         });
     }
     sam()
     {
      this.result=this.data.result;
      //console.log(this.result);
     }
    save()
    {
      this.data.postDetails(this.providerDetails,'/items').then((result)=> {
      console.log("success");
      this.router.navigate(['main']);
    },(err)=>{
      alert("Please Enter The valid Data or Fill All The Columns");
    }).catch((err)=>{
      
      console.log("unhandled rejection",err.message);
      
      });
    }

  logout(){
    this.router.navigate(['/']);
  }
    clickMethod(ld) {
      if(confirm("Are you sure to delete that product    "+ld.name+"   in the category of "+ld.category )) {
        this.id=ld.id;
        console.log(this.id);
    this.data.deleteDetails('/items/'.concat(this.id)).then((result)=> {
      console.log("success");
      location.reload(true);


        // this.data.getDetails('textile/Chennai').then((result)=> {
        
        //   this.data.result=result;
        //   //console.log(this.data.result);
        //   this.sam();
        //  },(err)=>{
      
        //  }).catch((err)=>{
        //    console.log("unhandled rejection",err.message);
        //    });
      
    },(err)=>{
  
    }).catch((err)=>{
      console.log("unhandled rejection",err.message);
      });
      }
    }
  //   image(event)
  //   {
  // this.providerDetails.img=event.target.value;
  
  // }
  
  ngOnInit() {
  }

    }