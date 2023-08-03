import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  allcarapp:any

  constructor(private http:HttpClient){}

  ngOnInit(){
    let res = this.http.get("http://localhost:2030/carapp/all");
    res.subscribe(
      data=>this.allcarapp=data
    );

  }

  delteUser(id:string){
console.log(id);
let res = this.http.get("http://localhost:2030/carapp/delete?id="+id);
    res.subscribe(
      data=>this.allcarapp=data
    );
  }

}