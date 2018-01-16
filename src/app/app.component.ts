import { Component, AfterViewInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './classes/todo';
declare var $:any;
declare var jQuery:any;

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

      function sortable(rootEl, onUpdate){
    var dragEl, nextEl;

    [].slice.call(rootEl.children).forEach(function (itemEl){
        itemEl.draggable = true;
    });
    
    function _onDragOver(evt){
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'move';
       
        var target = evt.target;
        if( target && target !== dragEl && target.nodeName == 'LI' ){
            // Сортируем
            rootEl.insertBefore(dragEl, rootEl.children[0] !== target && target.nextSibling || target);
        }
    }
    
    function _onDragEnd(evt){
        evt.preventDefault();
       
        dragEl.classList.remove('ghost');
        rootEl.removeEventListener('dragover', _onDragOver, false);
        rootEl.removeEventListener('dragend', _onDragEnd, false);

        if( nextEl !== dragEl.nextSibling ){

            onUpdate(dragEl);
        }
    }
    
    rootEl.addEventListener('dragstart', function (evt){
        dragEl = evt.target; 
        nextEl = dragEl.nextSibling;

        evt.dataTransfer.effectAllowed = 'move';
        evt.dataTransfer.setData('Text', dragEl.textContent);

        rootEl.addEventListener('dragover', _onDragOver, false);
        rootEl.addEventListener('dragend', _onDragEnd, false);

        setTimeout(function (){

            dragEl.classList.add('ghost');
        }, 0)
    }, false);
}

sortable( document.getElementById('list'), function (item){
    console.log(item);
});
    });
        
       
     }

}
