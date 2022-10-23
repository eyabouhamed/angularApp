import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from 'src/modals/Article';
import { ArticleService } from 'src/services/article.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  dataSource1!: MatTableDataSource<Article>;

  constructor(private ArticleService: ArticleService, private dialog: MatDialog) {


  this.dataSource1 = new MatTableDataSource(this.ArticleService.tab1);

  }

  ngOnInit(): void {
    //plus rapide,initialiser les attributs
  }
  displayedColumns: string[] = ['idArt', 'titre', 'annee', 'auteur', 'icon'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }
 delete(id: string): void {
    // ouvrir la boite de dialogue
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { });
    // attendre le click
    dialogRef.afterClosed().subscribe(result => {
      // tester sur le boutton

      if (result) {
        // if (confirm)

        this.ArticleService.deleteArticleById(id).then(() => { this.fetch() })

      }

    })
  }
  fetch(): void {
    this.ArticleService.getAllArticles().then((tab1) => { this.dataSource1.data = tab1 })
  } 
  
}
