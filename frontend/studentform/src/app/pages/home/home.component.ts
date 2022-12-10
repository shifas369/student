import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiservice :ApiService) { }

students : any=[]
  ngOnInit(): void {

    this.getdata();
  
  }

  getdata(){
    this.apiservice.getstudentlist().subscribe(res=>{
      this.students =res
    })
  }
 editstudent(){
           this.apiservice.updatestudent('id','data').subscribe(res=>{
           this.students=res
          
           this.getdata()
          })
       }

deletestudent(id:any){
  this.apiservice.deletestudent(id).subscribe(res=>{
    this.students=res
    alert("deleted successfully")
    this.getdata()
  
    

    
  })
}
}
