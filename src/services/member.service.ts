import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from 'src/modals/Member';
import  { global } from 'src/app/app_config';

//injecter le service dans le composant:injection de dependance
@Injectable({
  providedIn: 'root'
})
export class MemberService {
 public tab:Member[]=global._db.Members;
  constructor(private httpClient:HttpClient)
  { 

  }
  // pour envoyer une rq http a fin d'ajouter une ligne ds le tab

  saveMember(MemberToInsert:Member):Promise<void>{
    //promise :plus rapide,observable:thread
   // return this.httpClient.post<Member>('linkToRestApi', member).toPromise();
    //creation de tab
    const objectToSubmit={...MemberToInsert,
      id: Math.ceil(Math.random()*10000).toString(),
      createdDate: new Date().toISOString(),
    };
this.tab=[objectToSubmit, ...this.tab.filter(item => item.id!=objectToSubmit.id)]
return new Promise(resolve => resolve())
  }
 
  getMemberById(currentId:String):Promise<Member>
  {
   // return this.httpClient.get<Member>('link').toPromise(); pour  BackeND
    return new Promise(resolve => resolve(
      this.tab.filter(item => item.id===currentId)[0]?? null
    ))
  }

}
