import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  id:any;

  
  editform: any={
    name:"",
    age:""

    
  }


  constructor( private apiservice:ApiService) { }

  ngOnInit(): void {
   

  }

  onSubmit(){
      
    this.apiservice.updatestudent(this.editform.value,this.id).subscribe({
           
           complete:()=>{
            alert('Data added Sucessfully')
           }
           

    })}
}
