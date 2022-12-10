import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string ='http://localhost:8524/api'


  constructor( private http :HttpClient) { }

  
// to fetch all items
getstudentlist(){
  return this.http.get(`${this.apiUrl}/studentlist`)
}

 // to delete student
 
 deletestudent(id:any){
  return this.http.delete(`${this.apiUrl}/student/${id}`)
 }

// to add new student


addstudent(data:any){
  return this.http.post(`${this.apiUrl}/student`, data)
}


//to update existing student
updatestudent(data:any,id:any){
  return this.http.post(`${this.apiUrl}/student`,data,id)
}



getsinglestudent(id:any){
  return this.http.get(`${this.apiUrl}/studentlist/${id}`)
}

}
