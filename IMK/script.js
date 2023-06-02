const el=document.querySelector('.bulir').getBoundingClientRect();
const li = document.querySelectorAll('header ul li');
[...li].map(l=>{
    l.addEventListener('mouseover',function(){
        

        let exu =this.getBoundingClientRect().x-el.x;
        if(!this.classList.contains('active')){
        document.querySelector('.bulir').style.transform=`translateX(${exu+10}px)`;
    }else{
        document.querySelector('.active a').style.opacity=`1`;

            
    }
    })

    l.addEventListener('mouseout',function(){
        let exu =this.getBoundingClientRect().x+el.x;
        document.querySelector('.bulir').style.transform=`translateX(${0}px)`;



    })
})
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`header nav`,{origin: 'right'})
sr.reveal(`.p-1 .pertama p,.pertama.join-uss,.p-3 h2,.p-5 .second`,{origin: 'right'})
sr.reveal(`.pertama h1,#gift,.pertama .order-noww,.p-3 img,.p-3 a,footer li,footer p,.p-5 .first,header h1`,{origin: 'left'})
sr.reveal(`.p-2 img,.social ul li,.p-5 img,.p-5 h2,`,{origin: 'top'})
sr.reveal(`.p-2 p,.p-2 h2`,{origin: 'bottom'})

// JavaScript code to observe the element and add a class when it appears on screen
const myElement = document.querySelector('#disc');
const myElement2 = document.querySelector('#gift');
if(!document.getElementById('gift').classList.contains('floating')){
    
    document.body.onscroll=function(){
    var scrollLocation = window.scrollY || window.pageYOffset;
    
    if(scrollLocation==0){
        document.getElementById('gift').classList.add('floating');
    }
}
}
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    myElement.classList.add('floating');
    observer.unobserve(myElement);
  }
});

observer.observe(myElement);
observer.observe(myElement2);