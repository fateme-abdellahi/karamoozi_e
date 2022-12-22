import { HttpClient } from '@angular/common/http';
import { IEmail } from '../interfaces/iemails';
import { IUser } from '../interfaces/iuserInfo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SignService{


  signin(username: string, password: string){
    let res;
    this.http.get<IUser[]>('http://localhost:3000/fullInfo').subscribe(data=>{
      res=data.findIndex((user)=>user.username===username&&user.password===password);
      if(res===-1){
        return false
      }
      return true;
    })
    return res
  }
  signup(username: string, password: string,email: string){
    this.http.post('http://localhost:3000/fullInfo',{
      username:username,
      password:password,
      email:email
    }).subscribe(response=>{

    });
  }
  signinWithEmail(email: string):boolean{
    let r:boolean=false;
    this.http.get<IEmail[]>('http://localhost:3000/justEmail').subscribe(response=>{
      const res=response.findIndex((user)=>user.email===email);
      if(res===-1){
        r= false
      }
      r= true;

    })
    return r;
  }
  signupWithEmail(email: string){
    this.http.post('http://localhost:3000/justEmail',{
      email
    })
  }

  constructor(private http:HttpClient) { }
}
