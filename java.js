

const burger = document.querySelector('.burger');
burger.onclick =function(){
const menu = document.querySelector('.header-menu')
menu.classList.toggle('active')
    
}

const pagebtn = document.querySelectorAll('.pagenumber')
for( let i=0; i<pagebtn.length;i++){
    pagebtn [i].addEventListener('click',function(e){
        e.preventDefault()

        
        const currentnumber = document.getElementsByClassName('activenumber')
         if(currentnumber.length > 0){
            currentnumber[0].className = currentnumber[0].className.replace(" activenumber", "")
        }
        this.className += " activenumber"
    })
}

alert(edfce)




