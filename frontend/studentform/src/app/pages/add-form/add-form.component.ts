import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms'
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  studentform: any = new FormGroup({
    'name':new FormControl(''),
    'age':new FormControl(''),
  })
  router: any;


  constructor( private apiservice: ApiService) { }

  ngOnInit(): void {
  
    }
  
    onSubmit(){
      
      this.apiservice.addstudent(this.studentform.value).subscribe({
             
             complete:()=>{
              alert('Data added Sucessfully')
            
              this.ngOnInit()
              this.router.navigate(['/home'])
             }
             

      })}
    
   } 




