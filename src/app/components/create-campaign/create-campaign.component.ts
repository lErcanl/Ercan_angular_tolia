import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {
  obj={
    name:'',
    comment:'',
    point:0,
    created:new Date()
    
  }
  campaign: any=[]; 
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("name")!=null){
     this.campaign.push(JSON.parse(JSON.stringify(localStorage.getItem("name"))));
      this.campaign=JSON.parse(this.campaign);
  }
  else{
    this.campaign=[];
  }
}


  setCampaign(name:string,comment:string){
    
      if(name && comment != null){
        this.obj={
          name:'',
          comment:'',
          point:0,
          created:new Date()
          
        }
        this.obj.created;
        this.obj.name=name;
        this.obj.comment=comment;
       this.campaign.push(this.obj);
        localStorage.setItem("name",JSON.stringify(this.campaign));
      
      }
      else{
        alert("Lütfen ürün adı ve acıklama giriniz");
      }

  }

}
