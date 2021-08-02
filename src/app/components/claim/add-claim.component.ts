import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng';
import { ClaimService } from 'src/app/services/claim.service';


@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent implements OnInit {
  claimForm: FormGroup;
  categories: any[] = ['Technical','Customer','Quality','Other'];
  priorities: any[] = ['Blocker', 'Critical', 'Medium'];

  constructor(private fb: FormBuilder, private claimService: ClaimService , private messageService:MessageService) {

  }
  ngOnInit(): void {
  this.createClaimForm();
  }
  createClaimForm(){
    this.claimForm = this.fb.group({
      title:['',[Validators.required]],
      description:['',[Validators.required]],
      claimCategory:['',[Validators.required]],
      priority:['',[Validators.required]]
    })
    }

 
  onSubmit(): void {
    const claim = this.claimForm.value;
    this.claimService.save({...this.claimForm.getRawValue()}).subscribe(res=>{
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Claim Added Successfully', life: 3000 });;})
    
  }
}