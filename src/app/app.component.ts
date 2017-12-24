import { Component, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  ngAfterViewInit(){

       $(document).ready(function(){
         $("h1").click(function(){
         $(this).hide();
         });
       });
       
     }
}
