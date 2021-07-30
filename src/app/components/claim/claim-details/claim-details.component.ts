import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Claim } from 'src/app/models/claim.model';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.css']
})
export class ClaimDetailsComponent implements OnInit {
  claimForm: FormGroup;
  categories: any[] = [{name: 'Technical',code: 1},{name: 'Customer',code: 2},{name: 'Quality',code: 3}, {name: 'Other',code: 4}];
  claim: Claim;
  id;
  isEditable:boolean;

  constructor(private fb: FormBuilder,private claimService:ClaimService, private route: ActivatedRoute ) {

  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.claimForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      category: new FormControl(''),
      status: new FormControl('')
    });

  this.claimService.getClaimById(this.id).subscribe((element) => {
    this.claim = element;
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
