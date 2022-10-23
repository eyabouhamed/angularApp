import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'src/modals/Article';
import { global } from 'src/app/app_config';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public tab1:Article[]=global._db.Articles;
  deleteArticleById: any;
  
  constructor(private httpClient:HttpClient)
  { 
   
  }
  getArticleById(currentId:String):Promise<Article>
  {
   // return this.httpClient.get<Member>('link').toPromise(); pour  BackeND
    return new Promise(resolve => resolve(
      this.tab1.filter(item => item.idArt===currentId)[0]?? null
    ))
  }

  affect(name:string,idArt:string):Promise<void>{
    this.getArticleById(idArt).then((article)=>{article.auteur=name})
    
    return new Promise(resolve => resolve());
  }
  getAllArticles():Promise<Article[]>
  {
    // return this.httpClient.get<Member[]>('link').toPromise
    return new Promise(resolve => resolve(this.tab1));
  }
}
