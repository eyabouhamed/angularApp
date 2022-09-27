import { Component, OnInit } from '@angular/core';
import { Member } from 'src/modals/Member';
import  { global } from 'src/app/app_config';
import { MemberService } from 'src/services/member.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  dataSource: Member[] ;

  constructor(private MemberService:MemberService) {
    this.dataSource=this.MemberService.tab;
   }

  ngOnInit(): void {
    //plus rapide,initialiser les attributs
  }
  displayedColumns: string[] = ['id', 'cin', 'name', 'createdDate', 'cv', 'type', 'icon'];


}
