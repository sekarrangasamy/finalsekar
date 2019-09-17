import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserdetailsService } from './userdetails.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  
  userObj:any = {};
  experience:boolean = false;
  id:any;
  value:any;
  value1:any;
  type:any;

  constructor(private fb: FormBuilder, private service: UserdetailsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.queryParams.subscribe(params =>{
      this.id = params.id
    })

    this.service.getById(this.id).subscribe(res =>{
      if(this.id){
      this.userObj.name =res.name;
      this.userObj.email = res.email;
      this.userObj.phone =res.phone;
      this.userObj.address =res.address;
      }
    })
  }
 
  savedata(obj){
    if(this.id){
      this.service.updatePersonal(this.id,obj).subscribe((res:any)=>{
        if(res)
        alert("Data Updated Successfully");
        this.router.navigateByUrl('/userdetailslist');
      })
    }else{
      console.log("obj",obj);
      this.service.savePersoanlDetails(obj).subscribe((resObj) =>{
        if(resObj)
        alert("Data Save Successfully");
        this.router.navigateByUrl('/userdetailslist');
      })
    }
  }

 
}




