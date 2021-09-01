import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactListService } from 'src/app/services/contact-list.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,private contactListService: ContactListService) { }

  public contactList:Array<{
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

  public objUsr:{
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
  } = this.contactList[0];

  public usuario:Number = 0;
  
  public getID(obj:any):void{
    this.contactList.forEach(element => {
      if(element.id == parseInt(obj.id)){
        this.objUsr = element;
      }
    });
  }

  ngOnInit(): void {

    this.contactList = this.contactListService.getContactList();
    
    this.activateRoute.queryParams.subscribe(
      res => this.getID(res)
    );

  }

}
