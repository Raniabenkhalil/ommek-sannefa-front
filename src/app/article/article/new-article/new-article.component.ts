import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';
@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
})
export class NewArticleComponent implements OnInit {
  @Output() updated = new EventEmitter();

  myform: FormGroup;
  imageSrc: string = '';
  show = false;
  test: string = '';

  refresh() {
    this.updated.emit('true');
  }
  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private http: HttpClient
  ) {
    let formcontrols = {
      title: new FormControl(this.test, [
        Validators.required,
        Validators.pattern("[a-z.'-]+"),
      ]),
      category: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z.'-]+"),
      ]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      fileSource: new FormControl('', [Validators.required]),
    };
    this.myform = this.fb.group(formcontrols);
  }

  ngOnInit(): void {}
  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;

      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;

        this.myform.patchValue({
          fileSource: reader.result,
        });
      };
    }
  }
  add(): void {
    const data = this.myform.value;
    const formData = new FormData();
    formData.append('image', data.fileSource);
    this.http
      .post('http://localhost:8000/article/upload', formData)
      .subscribe((resu) => {
        let art = {
          title: data.title,
          category: data.category,
          description: data.description,
          image: resu,
        };
        console.log(resu);
        this.articleService.addArticle(art).subscribe((res) => {
          alert('ok !');
          this.refresh();
        });
      });
  }
}
