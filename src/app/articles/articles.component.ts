import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from 'src/modals/Article';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  dataSource1!: MatTableDataSource<Article>;

  constructor(private ArticleService: ArticleService) {


  this.dataSource1 = new MatTableDataSource(this.ArticleService.tab1);

  }

  ngOnInit(): void {
    //plus rapide,initialiser les attributs
  }
  displayedColumns: string[] = ['idArt', 'titre', 'annee', 'auteur'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }
}
