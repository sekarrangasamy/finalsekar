import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails/userdetails.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-userdetailslist',
  templateUrl: './userdetailslist.component.html',
  styleUrls: ['./userdetailslist.component.css']
})
export class UserdetailslistComponent implements OnInit {

  personalDetails:any=[];
  modalContent: any = '';
  bsModalRef: BsModalRef;
  data: Date;
  date1: any;
  date2: any;
  filterParams: any={};
  tempArr:any =[];
  dataArr:any =[];
  details:any;
  constructor(private service:UserdetailsService,private modalService: BsModalService) { }

  ngOnInit() {
    this.list()
  }

  list(){
    this.service.getPersonalDetails().subscribe((res:any)=>{
    console.log("res",res);
      if(res){
        this.tempArr = res;
        for(let i of this.tempArr){
          if(i.company){
            this.dataArr.push(i.company);
          }
        }
      }
      this.personalDetails=res;
    })
  }

  delete(id){
    this.service.deleteData(id).subscribe((res:any)=>{
      if(res){
        this.list();
        alert("Deleted Successfully")
      }
    })
  }
}
