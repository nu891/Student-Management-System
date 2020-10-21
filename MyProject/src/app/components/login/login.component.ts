import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiServiceService } from '../../services/api-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //@ViewChild('loginForm') formValues; 
  //loginForm: FormGroup;
  userType:any;
  username:any;
  password:any;
  errorFlag:boolean=false;
  errorMsg:any;
  
  usertype: any = ["Admin","Teacher","Student","Guardian"]
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    userType: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
    
   });

  constructor(private formBuilder: FormBuilder,private api:ApiServiceService,private router: Router) { }

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userType:['', Validators.required]
  }, {
      //validator: MustMatch('password', 'confirmPassword')
  });
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

onSubmit() {

console.log("login initiated")
//let name = "aneesh"

  console.log("login form value is...",JSON.stringify(this.loginForm.value))
  this.api.login(this.loginForm).subscribe(res=>{
    if(res["value"][0] == null){
      console.log("username or password not found")
      this.errorFlag = true;
      this.errorMsg = "username or password incorrect"
    }
   // console.log("login result is ",res);

    //console.log("usertype is ",res["value"][0]['USERTYPE']);
    if(res["value"][0] != null){
    if(res["status"] == true && res["value"][0]['USERTYPE'] == 'Admin'){
      console.log("result is admin")
      this.router.navigate(['/admin'])
   }
   if(res["status"] == true && res["value"][0]['USERTYPE'] == 'Student'){
    console.log("result is student")
    this.router.navigate(['/student'])
 }
 if(res["status"] == true && res["value"][0]['USERTYPE'] == 'Teacher'){
  console.log("result is teacher")
  this.router.navigate(['/teacher'])
}
    }
  },
  error=>{
    console.log(error,"USERNAME OR PASSWORD INCORRECT")
  }
  )
}
changeUser(user){
  console.log("event is",user)
  this.userType = user
  console.log("value usertype is",this.userType)

}
  }


