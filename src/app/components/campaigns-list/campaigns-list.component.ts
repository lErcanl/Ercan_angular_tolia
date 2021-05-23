import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.css']
})
export class CampaignsListComponent implements OnInit {
  getIndex!:number;
  sortPoint:any=[];
  campaignListLocal:any=[];
  
  chosenMod: string = "";
  updateState=false;
  campaignList:any=[];
  filteredList:any=[];
  _searchTerm="";
  get searchTerm():string {
    return this._searchTerm;
  }
  set searchTerm(value:string){
    this._searchTerm=value;
    this.filteredList = this.fiterReal(value);
  }
  updateScreen(index:number){
    this.getIndex=index;
    this.updateState=true;

  }
  updateCampaign(name:string,comment:string){
    if(name && comment){
    this.campaignList[this.getIndex].name=name;
    this.campaignList[this.getIndex].comment=comment;
    this.filteredList=this.campaignList;
  this.setItem();    
  this.updateState=false;
    }
    else{
      alert("Lütfen ürün adı ve acıklama giriniz");
    }
  }

  deleteCampaign(index:number){
    this.campaignList.splice(index,1);
    this.filteredList=this.campaignList;
    this.setItem();
  }
  fiterReal(searchString:string)
  {
    return this.campaignList.filter((realfilter: { name: string; })=>
      realfilter.name.toLowerCase().indexOf(searchString.toLowerCase())!==-1);
  }
  modo(){
    switch(this.chosenMod) {  
       case "mod1": { 
        
          this.campaignList=this.campaignList.sort((a:any,b:any)=>(a.point > b.point) ? -1 : 1);
        break;
       }
       case "mod2": { 

        this.campaignList=this.campaignList.sort((a:any,b:any)=>(a.point > b.point) ? 1 : -1);          
        break;
       }
 
    }
  }

  constructor() { }

  ngOnInit(): void {
     this.campaignListLocal=(JSON.parse(JSON.stringify(localStorage.getItem("name"))));
     this.campaignList=JSON.parse(this.campaignListLocal);
     this.filteredList = this.campaignList;

  }
  increasePoint(index:number){
    this.campaignList[index].point++;
    this.setItem();

  }
  descreasePoint(index:number){
    if(this.campaignList[index].point>0){
    this.campaignList[index].point--;
    this.setItem();
    }
  }
  setItem(){
    localStorage.setItem("name",JSON.stringify(this.campaignList));

  }
}
