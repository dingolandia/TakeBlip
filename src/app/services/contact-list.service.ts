import { Injectable } from '@angular/core';
import contactsJSON from '../../assets/JSON/data.json';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  private list: Array<string> = [
    "X Bacon",
    "Feijão",
    "Ovo"
  ];

  private listJson:Array<{
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
  }> = contactsJSON;

  constructor() { }

  public getContactList(){
    return this.listJson;
  }
}
