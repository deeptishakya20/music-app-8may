import { Component, OnInit } from '@angular/core';
import { User } from '../user';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector:"signup",
    templateUrl:"./user-signup.component.html",
    styleUrls:["./user-signup.component.css"]
})
export class UserSignupComponent {

    // userForm: FormGroup;
    // submitted = false;
    //  constructor(private formBuilder: FormBuilder){}

    //  ngOnInit(){
    //      this.userForm = this.formBuilder.group({
    //          first_name:['',Validators.required],
    //          last_name: ['',Validators.required]
    //      });
    //  }

    //  get f() {
    //      return this.userForm.controls;
    //  }

    //  onSubmit(){
    //      this.submitted = true;

    //      if(this.userForm.invalid){
    //          return;
    //      }
    //      alert('Success!!')
    //  }
}
