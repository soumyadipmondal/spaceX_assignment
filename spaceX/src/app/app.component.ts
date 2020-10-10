import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title:string = '';

  //implementing angular universal for Server Side Rendering.
  constructor(
    @Inject(PLATFORM_ID) private platform_id
  ){}

  ngOnInit(){
    if(isPlatformBrowser(this.platform_id)){
      this.title = 'Client spaceX';
    }
    console.log('hi');
    
    this.title = 'Server spaceX';
  }

  //npm run build:ssr and npm run serve:ssr

}
