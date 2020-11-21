let title=document.getElementById('title');
let author=document.getElementById('author');
let year=document.getElementById('year');
let newBook=document.getElementById('bookItem');
let clickBtn=document.getElementById('submit');
 

clickBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(title.value=='' || author.value=='' || year.value==''){
        alert('Please input your information  properly');
    }else{
        let newRow=document.createElement('tr');
        //title
        let insertTitle=document.createElement('th');
        insertTitle.innerHTML= title.value;
        newRow.appendChild(insertTitle);
        // author 
        let insertAuthor=document.createElement('th');
        insertAuthor.innerHTML=author.value;
        newRow.appendChild(insertAuthor);
        //year
        let insertYear=document.createElement('th');
        insertYear.innerHTML=year.value;
        newRow.appendChild(insertYear);
        //readStatus
        let insertReadStatus=document.createElement('th');

        let checkBox=document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
         insertReadStatus=checkBox;
        newRow.appendChild(insertReadStatus)
        //show the output
        newBook.appendChild(newRow);

        if(checkBox.clicked==true){
           insertTitle.style.color='red';
           insertYear.style.fontSize='25px';
        }
        
    }
})
 