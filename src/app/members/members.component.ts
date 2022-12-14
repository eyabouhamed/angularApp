import { Component, OnInit } from '@angular/core';
import { Member } from 'src/modals/Member';
import { global } from 'src/app/app_config';
import { MemberService } from 'src/services/member.service';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})

export class MembersComponent implements OnInit {
  dataSource!: MatTableDataSource<Member>;

  constructor(private MemberService: MemberService, private dialog: MatDialog) {
    //this.dataSource=this.MemberService.tab;
    this.fetch();
    this.dataSource = new MatTableDataSource(this.MemberService.tab);

  }

  ngOnInit(): void {
    //plus rapide,initialiser les attributs
  }
  displayedColumns: string[] = ['id', 'cin', 'name', 'createdDate', 'cv', 'type', 'icon'];


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id: string): void {
    // ouvrir la boite de dialogue
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { });
    // attendre le click
    dialogRef.afterClosed().subscribe(result => {
      // tester sur le boutton

      if (result) {
        // if (confirm)

        this.MemberService.deleteMemberById(id).then(() => { this.fetch() })

      }

    })
  }

  fetch(): void {
    this.MemberService.getAllMembers().then((tableau) => { this.dataSource.data = tableau })
  }
}
