import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedFile!: File;
  resMessage: any="";
  imageName: any;
  name:string="";
  price:string="";
  brand:string="";
  carno:string="";
  address:string="";
  color:string="";


  constructor(private http:HttpClient){}
  ngOnInit(){
    this.selectedFile={} as any;
  }

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }


  prdSubmitt(){
    
    const uploadImageData = new FormData();

    uploadImageData.append('dietFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append("name",this.name);
    uploadImageData.append("price",this.price);
    uploadImageData.append("brand",this. brand);
    uploadImageData.append("carno",this.carno);
    uploadImageData.append("address",this.address);
    uploadImageData.append("color",this. color);
    
    

    let res =this.http.post("http://localhost:2030/carapp/add",uploadImageData,
    {responseType:'text' as 'json'});
    res.subscribe(
      data=>{
        this.resMessage = data;
        console.log(data);
        this.name="";
        this.price="";
        this.brand="";
        this.carno="";
        this.address="";
        this.color="";
        
      }
    );

  }

}