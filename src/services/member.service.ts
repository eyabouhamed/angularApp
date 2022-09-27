import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from 'src/modals/Member';
//injecter le service dans le composant:injection de dependance
@Injectable({
  providedIn: 'root'
})
export class MemberService {
 // public tab:Member[]=global._db.Members;
  constructor(private httpClient:HttpClient)
  { 

  }
  // pour envoyer une rq http a fin d'ajouter une ligne ds le tab

  //saveMember(member:any):Promise<Member>{
    //promise :plus rapide,observable:thread
   // return this.httpClient.post<Member>('linkToRestApi', member).toPromise();
    //creation de tab
 // }
 
}
