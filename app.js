
const do_form = document.getElementById('do_form');
const list = document.getElementById('list');



do_form.addEventListener('submit', function (e) {
    e.preventDefault();

    let do_name = this.querySelector('input[name = "do-name"]').value;
    


    if(do_name == ''){
        alert();
    }else{
        let li = document.createElement ('li');
        li.className = 'list-group-item';
    
      
    
        let closebtn = document.createElement('button');
        closebtn.innerHTML=('&times');
        closebtn.className = ('close')
    
        let dotxt = document.createTextNode(do_name);
    
        li.appendChild(closebtn);
        li.insertBefore(dotxt , closebtn);
       list.appendChild(li);
    
       this.querySelector('input[name = "do-name"]').value = '';
      
    
       closebtn.addEventListener('click', function () {
           this.parentElement.remove();
       });
    }

    

});