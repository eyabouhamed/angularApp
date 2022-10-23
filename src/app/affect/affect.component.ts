import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/modals/Member';
import { ArticleService } from 'src/services/article.service';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-affect',
  templateUrl: './affect.component.html',
  styleUrls: ['./affect.component.scss']
})
export class AffectComponent implements OnInit {
 tab: Member[] ;
 selected!:string;
 idArt!:string;

  constructor(private MemberService:MemberService ,private activatedroute:ActivatedRoute, private articleService:ArticleService,private router:Router) {
    this.tab=this.MemberService.tab;
   }

  ngOnInit(): void {
  }
   add(name:string):void
   {
    this.idArt=this.activatedroute.snapshot.params.idArt;
    if(!!this.idArt)
    this.articleService.affect(name,this.idArt).then(()=>{this.router.navigate(['/articles'])})
   }
}
