import { Component, OnInit, ViewChild } from '@angular/core';
import { Claim } from 'src/app/models/claim.model';
import { Router } from '@angular/router';
import { ClaimService } from 'src/app/services/claim.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-list-claims',
  templateUrl: './list-claims.component.html',
  styleUrls: ['./list-claims.component.scss']
})
export class ListClaimsComponent implements OnInit {
  claims: Claim[];
  @ViewChild('dt') table: Table;

  constructor(private claimService: ClaimService,private router: Router) { }

  ngOnInit(): void {
    this.claimService.getClaims().subscribe((next) => {
      this.claims = next['hydra:member'];
    });
  }
 
  showDetails(claimid){
    this.router.navigate(['claimDetails/' + claimid]);
  }
  deleteClaim(claimid){
    this.claimService.deleteClaim(claimid).subscribe((res) => window.location.reload());
  }
  onPriorityChange(event) {
    this.table.filter(event.value, 'priority', 'in')
}
}
