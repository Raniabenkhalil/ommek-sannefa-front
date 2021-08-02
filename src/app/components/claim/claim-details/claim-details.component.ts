import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng';
import { Claim } from 'src/app/models/claim.model';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.css']
})
export class ClaimDetailsComponent implements OnInit {
  claimForm: FormGroup;
  categories: any[] = ['Technical', 'Customer', 'Quality','Other'];
  priorities: any[] = ['Blocker', 'Critical', 'Medium'];
  claim: Claim;
  id;
  isEditable:boolean;

  constructor(private fb: FormBuilder,private claimService:ClaimService, private route: ActivatedRoute ,private messageService:MessageService) {

  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.createClaimForm();

  this.claimService.getClaimById(this.id).subscribe((element) => {
    this.claim = element;
  });
  }
  createClaimForm(){
    this.claimForm = this.fb.group({
      title:['',[Validators.required]],
      description:['',[Validators.required]],
      claimCategory:['',[Validators.required]],
      priority:['',[Validators.required]],
    })
    }

 
  onSave(): void {
    const claim = {
      id: this.claim.id,
      title : this.claimForm.value.title,
      description: this.claimForm.value.description,
      claimCategory: this.claimForm.value.claimCategory,
      priority:this.claimForm.value.priority
    }
    console.log(this.id);
    this.claimService.updateClaim(this.id,claim).subscribe(res=>{
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Claim saved Successfully', life: 3000 });;})  }
}
