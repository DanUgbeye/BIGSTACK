var addIcon = document.querySelector('#type svg');
var toDoItem = document.querySelector('#type input');
var deleteIcon = ' <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>';

addIcon.onclick = function(){

    if(toDoItem.value == ""){
        alert("Input a Task First");
    }else{
        document.querySelector('.list ul').innerHTML += '<li> <span>' + toDoItem.value + '</span>'+ deleteIcon + '</li>'
        // console.log(toDoItem.value)
    }
    toDoItem.value = "";

    var deleteIconReal = document.querySelectorAll('.list ul li svg');

    for(var i = 0; i < deleteIconReal.length; i++){
        deleteIconReal[i].onclick = function(){
            this.parentNode.remove();
        }
    }

    // let list = document.querySelectorAll('.list ul li span');
    // // console.log(list)
    // for(var i = 0; i < list.length; i++){
    //     list[i].onclick = () => {
    //         this.getElementsByClassName.display = "none"
    //     }
    // }
  
}



