 let string = "";
 let buttons = document.querySelectorAll('.button');
 Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(event)=>{
        if(event.target.innerHTML === '='){
           string = eval(string);
           document.querySelector('.out').value = string;
        }
        else if(event.target.innerHTML === 'C'){
            string = '';
            document.querySelector('.out').value = string;
        }
        else{
      string += event.target.innerHTML;
      document.querySelector('.out').value = string;
        }
    });
 });


