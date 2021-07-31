import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  p: number = 1;
  articleList: any = [];
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticle().subscribe((res) => {
      this.articleList = res.data;
    });
  }
  updatelist(enable: any) {
    if (enable === 'true') {
      this.articleService.getArticle().subscribe((res) => {
        this.articleList = res.data;
      });
    }
  }
}
