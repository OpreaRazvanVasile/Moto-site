"use strict"



const nameSingUp=document.getElementById('name_singup');
const passSingUp=document.getElementById('password_singUp');
const passSingUpRewrite=document.getElementById('password_singUp_rewrite')
const submitBtnSingUp=document.getElementById('sent')

//    singUp Functionality


nameSingUp.addEventListener('click',()=>{
passSingUp.placeholder='Parola'
passSingUpRewrite.placeholder='Rescrie Parola'
nameSingUp.placeholder='Nume Cont'
})
submitBtnSingUp.addEventListener('click',function(e){

     // e.preventDefault()
   
        const singvalue=passSingUp.value;
        const emtyPassValue=function(){
          passSingUp.value='';
          passSingUpRewrite.value=''
        } 
         if(nameSingUp.value&&(passSingUp.value===passSingUpRewrite.value)&&passSingUp.value.length>6&&nameSingUp.value.length>6){
          e.preventDefault()
          forum.style.display='none';
          document.querySelector('.el').innerHTML=`<p class="sal">your registration name ${nameSingUp.value}<p>`
         }
         if(passSingUp.value.length<6){
          e.preventDefault()
          emtyPassValue()
          emtyPassValue()
          passSingUp.placeholder=`Mai Mult de 6 Caractere`
          
         }
          if(nameSingUp.value.length<6){
          e.preventDefault()
          
          nameSingUp.value=''
          nameSingUp.placeholder=`Mai Mult de 6 Caractere`
          
         }
          if(singvalue[0]!==singvalue[0].toUpperCase()){
          e .preventDefault()
          passSingUp.placeholder=`Prima Litera Mare`
          emtyPassValue()
         }
           

        if(passSingUp.value!==passSingUpRewrite.value){
          e.preventDefault()
         passSingUp.placeholder='Parola nu Corepunde'
         emtyPassValue()
       }
     
        
})