document.addEventListener("DOMContentLoaded", () => {
    const imgProd = document.querySelector('.buyprod_img');
    const allRadio = document.querySelectorAll('.color');
    
    const prod = document.querySelector('.product');
    const about = document.querySelector('.about');
    const contact = document.querySelector('.contact-form');
    const bue = document.querySelector('.buyprod');

    const prodLink = document.querySelector('.prodLink');
    const aboutLink = document.querySelector('.aboutLink');
    const contactLink = document.querySelector('.contactLink');
    const bueLink = document.querySelector('.buyLink');
    
    prodLink.addEventListener("click",(e)=> {console.log('push');e.preventDefault(); prod.scrollIntoView({behavior:"smooth"})});
    aboutLink.addEventListener("click",(e)=>{e.preventDefault();	about.scrollIntoView({behavior:"smooth"})});
    contactLink.addEventListener("click",(e)=>{e.preventDefault();	contact.scrollIntoView({behavior:"smooth"})});
    bueLink.addEventListener("click",(e)=>{e.preventDefault();	bue.scrollIntoView({behavior:"smooth"})});

    allRadio.forEach((el,i)=>{
        el.addEventListener("click",()=>{
            imgProd.src = 'asset/img/colorProd/0'+(i+1) + '.jpg';
            console.log('ss');
        });
    });
});