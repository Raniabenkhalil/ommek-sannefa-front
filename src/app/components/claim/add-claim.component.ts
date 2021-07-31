import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent implements OnInit {
  claimForm: FormGroup;
  categories: any[] = [{name: 'Technical',code: 1},{name: 'Customer',code: 2},{name: 'Quality',code: 3}, {name: 'Other',code: 4}];

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {

    this.claimForm = new FormGroup({
      title: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      category: new FormControl('', Validators.required),
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