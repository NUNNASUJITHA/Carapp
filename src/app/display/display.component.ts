import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  carappImages:any;

  constructor(private http:HttpClient,private router:Router){}

  ngOnInit(){
    this.getAllImages();
  }
public clickImage(imageId:string){
  console.log(imageId);
  console.log("111");
  this.router.navigate(['/profile', imageId]);
}
  public getAllImages(){
    

    let res =this.http.get("http://localhost:2030/carapp/all");
    res.subscribe(
      data=>this.carappImages=data
    );

  }
}
