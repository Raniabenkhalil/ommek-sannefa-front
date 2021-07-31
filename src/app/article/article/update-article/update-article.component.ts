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
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css'],
})
export class UpdateArticleComponent implements OnInit {
  @Input() articleselected: any;
  @Output() updated = new EventEmitter();
  imageSrc: string = '';
  refresh() {
    this.updated.emit('true');
  }
  myform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private http: HttpClient
  ) {
    let formcontrols = {
      title: new FormControl('', [
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
      isactive: new FormControl('', [Validators.required]),
    };
    this.myform = this.fb.group(formcontrols);
  }
  initializeForm(articlee: any) {
    this.myform.setValue({
      title: articlee.title,
      description: articlee.description,
      category: articlee.category,
      image: '',
      fileSource: '',
      isactive: articlee.isactive,
    });
  }
  ngOnInit(): void {
    this.initializeForm(this.articleselected);
  }
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
  update() {
    const data = this.myform.value;
    const formData = new FormData();

    if (data.image.length > 0) {
      formData.append('image', data.fileSource);
      this.http
        .post('http://localhost:8000/article/upload', formData)
        .subscribe((resu) => {
          let art = {
            title: data.title,
            category: data.category,
            description: data.description,
            image: resu,
            isactive: data.isactive,
          };
          console.log(resu);
          this.articleService
            .updateArticle(this.articleselected.id, art)
            .subscribe((res) => {
              alert('ok !');
              this.refresh();
            });
        });
    } else {
      let art = {
        title: data.title,
        category: data.category,
        description: data.description,
        isactive: data.isactive,
        image: this.articleselected.image,
      };
      this.articleService
        .updateArticle(this.articleselected.id, art)
        .subscribe((res) => {
          alert('ok done !');
          this.refresh();
        });
    }
  }
}
