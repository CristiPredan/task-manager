import { Component, AfterViewInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './classes/todo';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private todoService: TodoService) {
  }
  
  ngAfterViewInit(){

    $(document).ready(function() {
      var input = $('.search-filter');
      input.change( function () {
          var filter = input.val();
      
           if(filter.length == 0) { // show all if filter is empty
                 $('.css-label').each(function() {
                   $(this).parent().show();   
                   $(this).prev().show();
                 });
                 return;
            }
      
           $('.css-label').each(function() {
           $(this).parent().hide();   
           $(this).prev().hide();
           }); // hide all labels
      
          $('.css-label:contains("'+filter+'")').each(function() {
              $(this).parent().show();   
             $(this).prev().show();
          });
      }).keyup(function() {
          $(this).change();    
      });
      
    });
       
     }

}
