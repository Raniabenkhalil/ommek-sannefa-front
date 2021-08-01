import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Review } from '../models/review.model';
import { ReviewService } from '../services/review.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-update-review',
  templateUrl: './update-review.component.html',
  styleUrls: ['./update-review.component.css']
})
export class UpdateReviewComponent implements OnInit {
  claim: Review; 
  description;
  id;

  reviewForm = new FormGroup({
    descr: new FormControl('')
 });
   constructor(    private reviewService: ReviewService  , private router:ActivatedRoute  ) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    let test; 
    this.reviewService.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{console.log(result['description'])
      test=result['description'];
      this.description=test;
      console.log(test)
      
    })
  }
  onSave(): void {
    let json = {
        "description" : this.description
    }
    console.log(json)
this.reviewService.updateReview(this.router.snapshot.params.id,json).subscribe((res)=>console.log(res,"done"));
  }
}
