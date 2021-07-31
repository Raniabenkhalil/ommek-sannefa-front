import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css'],
})
export class DetailsArticleComponent implements OnInit {
  id: any;
  article: any;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.articleService.getArticleById(this.id).subscribe((res) => {
      this.article = res.data;
      console.log(this.article);
    });
  }
  updatelist(enable: any) {
    if (enable === 'true') {
      this.articleService.getArticleById(this.id).subscribe((res) => {
        this.article = res.data;
      });
    }
  }
  delete(idd: any) {
    this.articleService.deleteArticle(idd).subscribe((res) => {
      alert('ok done !');
      this.router.navigateByUrl('');
    });
  }
}
