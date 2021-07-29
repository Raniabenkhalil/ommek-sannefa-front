import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  claimForm: FormGroup;
  categories: any[] = [{name: 'Technical',code: 1},{name: 'Customer',code: 2},{name: 'Quality',code: 3}, {name: 'Other',code: 4}];

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {

    this.claimForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      category: new FormControl(''),
      status: new FormControl('')
    });
  }
  createClaimForm(){
    this.claimForm = this.fb.group({
      title:['',[Validators.required]],
      description:['',[Validators.required]],
      category:['',[Validators.required]],
      status:['',[Validators.required]]
    })
    }

 
  onSubmit(): void {
    const claim = this.claimForm.value;
    console.log(this.claimForm);

  }
}