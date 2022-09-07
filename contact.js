
const firstName=document.getElementById('first_name');
const secondName=document.getElementById('second_name');
const age=document.getElementById('age')
const birthYear=document.getElementById('birthYear');
const mail=document.getElementById('mail');
const textarea=document.getElementById('textarea');
const sent=document.getElementById('sent');
const capitalizationElemenets=document.querySelectorAll('.capitalization')
const contact=document.getElementById("contact")
const logIn = document.getElementById('log_in');
const head = document.querySelector('.hed');
const singUp=document.getElementById('sing_up');
const singUpName=document.getElementById('name');
const singUpEmail=document.getElementById('email');
const forum=document.getElementById('forum');




// Contact Functionality
function capitalization(){


     
    if(age.value>=115){
           age.value=115;
         }

 else if(age.value<=10){
      age.value=10;
    }     
         const year=new Date().getFullYear();
 const calcAge=function(age){
  return year-age
 }
  
    birthYear.value=calcAge(age.value)
  
 
    
    mail.value=mail.value.trim();
 
    for(const element of capitalizationElemenets){
       const[fL]=element.value
       element.value=element.value.toLowerCase().trim()
       element.value=element.value.replace(fL.toLowerCase(),fL.toUpperCase());
       
      }
  
 
         

   }
   
   function invalidData(){
      if(!age.value||!firstName.value||!age.value||!mail.value||!textarea.value||!secondName)
      {
         firstName.placeholder=`NoData`;
         secondName.placeholder=`NoData`;
         age.placeholder=`NoData`;
         birthYear.placeholder=`NoData`;
         mail.placeholder=`NoData`;
         textarea.placeholder=`NoData`;
         
      }

     
     
   }
   
   textarea.addEventListener('click',function(){
      invalidData()
   })
   for(const el of capitalizationElemenets){
 el.addEventListener('click',function(){
      firstName.placeholder=`Nume`;
      secondName.placeholder=`Prenume`;
      age.placeholder=`Varsta`;
      birthYear.placeholder=`Anul Nasteri`;
      mail.placeholder=`Email`;
      textarea.placeholder=`Descriere`;
   })
}
   document.addEventListener('input',capitalization)
   sent.addEventListener('click',invalidData)

   document.querySelector('#sent').addEventListener('click',function(e){

    if(firstName.value&&secondName.value&&mail.value&&textarea.value&&age.value){
      e.preventDefault()
    forum.style.display='none';
    document.querySelector('.el').innerHTML=`<p class="sal">thank you your message has been sent<p>`
    }
 
   })
