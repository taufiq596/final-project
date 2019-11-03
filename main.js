// window.onscroll = ()=>{
//     // console.log('test')
//     var pageTop = window.pageYOffset;
//     var navTop = document.querySelector('#navTop').offsetTop;
//     console.log(pageTop, navTop);
//     if(pageTop>navTop){
//         console.log('test')
//         document.querySelector('#navTop').style.position = 'fixed';
//         document.querySelector('#navTop').style.top = '0';
//         document.querySelector('#navTop').style.zIndex = '1';

//     }
//     else{
//         document.querySelector('#navTop').style.position = 'static';
//     }

//     var containers = document.querySelectorAll(".scroll-active");
//     var navItems = document.querySelectorAll(".nav-item");
//     containers.forEach((item,index) => {
//         if(window.pageYOffset > item.offsetTop){
//             navItems.forEach((values, key)=>{
//                 if(index == key){
//                     values.className += " active"
//                 }
//                 else{
//                     values.className = "nav-item"
//                 }
//             })
//         }
//     })
// }
window.onscroll = function(){
    var navbar = document.querySelector(".navbar");
    if(window.pageYOffset > 0){
        navbar.style.position = 'fixed';
        navbar.style.zIndex = 100;
        navbar.style.width = '100%';
    }
    else{
        navbar.style.position = 'static';
    }
    var containers = document.querySelectorAll(".scroll-active");
    var navItems = document.querySelectorAll(".nav-item");
    containers.forEach((item,index) => {
        if(window.pageYOffset > item.offsetTop){
            navItems.forEach((values, key)=>{
                if(index == key){
                    values.className += " active"
                }
                else{
                    values.className = "nav-item"
                }
            })
        }
    })
}

// window.onscroll=function(){
//     if(window.pageYOffset>0){
//         document.querySelector('.navbar').style.position = 'fixed';
//         document.querySelector('.navbar').style.top = '0';
//         document.querySelector('.navbar').style.zIndex = '1';
//         document.querySelector('.navbar').style.width  = '100%';
//     }
//     else{
//         document.querySelector('.navbar').style.position = 'static';
//     }
//     var containers = document.querySelectorAll(".scroll-active");
//     var navItems = document.querySelectorAll(".nav-item");
//     containers.forEach((item,index) => {
//         if(window.pageYOffset > item.offsetTop){
//             navItems.forEach((values, key)=>{
//                 if(index==key){
//                     values.className += " active"
                    
//                 }
//                 else{
//                     values.className = 'nav-item'
//                 }
//             })
//         }
//     })

// 