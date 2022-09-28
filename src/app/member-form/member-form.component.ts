import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MemberService } from 'src/services/member.service';
import { global } from 'src/app/app_config';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/modals/Member';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {
  [x: string]: any;
  form: any;
  currentId: String = '';
  currentMember:any;
  constructor(private MemberService: MemberService, private router: Router, private activatedRoute: ActivatedRoute) {
    //injection de dep

  }

  ngOnInit(): void {
    // 1 recuperation de id de url
    this.currentId = this.activatedRoute.snapshot.params.id
 
    // 2 si id a une val alors declencher la fct du service getmemberbyid(id) =>member
    if(!!this.currentId)
    {
      this.MemberService.getMemberById(this.currentId).then((item)=>{
        this.currentMember=item;
        this.initFormEdit(item);


      })
    }
    // 3 si nn appeleer initform()
    else  this.initForm(); // initialisation du form

  }

  initForm(): void {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
    });
  }

  initFormEdit(item:Member): void {
    this.form = new FormGroup({
      cin: new FormControl(item.cin, [Validators.required]),
      name: new FormControl(item.name, [Validators.required]),
      cv: new FormControl(item.cv, [Validators.required]),
      type: new FormControl(item.type, [Validators.required]),
    });
  }

  onSub(): void {
    console.log(this.form.value)
    //appeler la fct du service savemember pour ajouter laligne dans le tab
    const objToSubmit = this.form.value;
    this.MemberService.saveMember(objToSubmit).then(() => { this.router.navigate(['./members']) });
  }
}

