import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ClaimService } from 'src/app/services/claim.service';


@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent implements OnInit {
  claimForm: FormGroup;
  categories: any[] = ['Technical','Customer','Quality','Other'];

  constructor(private fb: FormBuilder, private claimService: ClaimService ) {

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
   this.claimService.save({...this.claimForm.getRawValue()}).subscribe(res=>{
    alert('Claim added successfully');})
  }
}