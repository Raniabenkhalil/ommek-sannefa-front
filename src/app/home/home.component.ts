import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    new Promise(resolve => {
      this.loadScript();
    });
   }

  ngOnInit(): void {
  }
  public loadScript() {
    const node = document.createElement('script');
    node.src = 'assets/js/main.js'   ; // put there your js file location
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('body')[0].appendChild(node);}
}
