import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MemberService } from 'src/services/member.service';
import  { global } from 'src/app/app_config';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {
  [x: string]: any;
  form:any;
  
   constructor(private MemberService:MemberService) { 
//injection de dep

   }

  ngOnInit(): void {

    this.initForm(); //creer l'obj avec initialisation
  
  }
initForm():void
{
this.form=new FormGroup ({
  cin:new FormControl(null,[Validators.required]),
  name:new FormControl(null,[Validators.required]),
  cv:new FormControl(null,[Validators.required]),
  type:new FormControl(null,[Validators.required]),
});
}
onSub():void
{
  console.log(this.form.value)
  //appeler la fct du service savemember pour ajouter laligne dans le tab
  const objToSubmit =this.form.value; 
 this.MemberService.saveMember(objToSubmit);
}
}

