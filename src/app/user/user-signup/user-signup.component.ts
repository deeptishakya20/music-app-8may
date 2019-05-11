import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: "signup",
    templateUrl: "./user-signup.component.html",
    styleUrls: ["./user-signup.component.css"]
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

    userForm: FormGroup;
    constructor(private fb: FormBuilder) { }


    ngOnInit() {
        this.userForm = this.fb.group({
            first_name: ['', Validators.required],
            phone: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirm_password: ['', Validators.required],
            question: ['', Validators.required],
            answer: ['', Validators.required],
            checkbox: ['', Validators.required]


        });
    }

    onSubmit() {
        alert("Called");
    }

    get first_name() { return this.userForm.controls.first_name; }
    get phone() { return this.userForm.controls.phone; }
    get username() { return this.userForm.controls.username; }

    get email() { return this.userForm.controls.email; }
    get password() { return this.userForm.controls.password; }
    get confirm_password() { return this.userForm.controls.confirm_password; }
    get question() { return this.userForm.controls.question; }

    get answer() { return this.userForm.controls.answer; }
    get checkbox() { return this.userForm.controls.checkbox; }


}
