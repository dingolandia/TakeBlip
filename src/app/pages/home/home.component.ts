import { Component, OnInit } from '@angular/core';
import { ContactListService } from 'src/app/services/contact-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public busca:string = "";

  private contactList:Array<{
    id:number,
    shortName:string,
    name:string,
    description:string,
    image:string,
    template:string,
    created:string,
    updated:string,
    plan:string,
    culture:string,
    fav:boolean,
    analytics:{
      message:{
        received:number,
        sent:number
      },
      user:{
        actived:number,
        total:number
      }
    }
  }> = [];
  
  constructor(private contactListService: ContactListService){}

  public contactListFiltered = this.contactList;
  public contactListFav = this.contactList;

  public displayList:boolean = false;

  public DisplayInBlock():void{
    this.displayList = false;
  }

  public DisplayInList():void{
    this.displayList = true;
  }

  public OrderByName():void{
    this.contactList = this.contactList.sort((a:any, b:any)=>{
      let a1 = a.name.toLowerCase();
      let b1 = b.name.toLowerCase();
      return a1<b1 ?-1:a1> b1? 1 :0;
    });
  }

  public RemoveFav(id:number):void{
    this.contactList.forEach(element => {
      if(element.id == id)
        element.fav = false;
    });
  }

  public AddFav(id:number):void{
    this.contactList.forEach(element => {
      if(element.id == id)
        element.fav = true;
    });
  }

  public OrderByDateCreation():void{
    this.contactList = this.contactList.sort((a:any, b:any)=>{
      let c = new Date(a.created).getTime();
      let d = new Date(b.created).getTime();
      return c-d;
    });
  }

  ngOnInit(): void {
    this.contactList = this.contactListService.getContactList();
  }
  ngDoCheck(): void{
    //console.log(this.busca);
    let textBusca:string = this.busca;
    this.contactListFiltered = this.contactList.filter(function (entry) {
      return (entry.name.toLocaleLowerCase()).indexOf(textBusca.toLocaleLowerCase()) >= 0 && entry.fav==false;
    });

    this.contactListFav = this.contactList.filter(function (entry) {
      return (entry.name.toLocaleLowerCase()).indexOf(textBusca.toLocaleLowerCase()) >= 0 && entry.fav==true;
    });
  }

}
