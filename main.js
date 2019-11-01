window.onscroll = ()=>{
    var pageTop = window.pageYOffset;
    var navTop = document.querySelector('#navTop').offsetTop;
    console.log(pageTop, navTop);
    if(pageTop>navTop){
        document.querySelector('#navTop').style.postion = 'fixed';
        document.querySelector('#navTop').style.top = '0';
        document.querySelector('#navTop').style.zIndex = '1';
    }
    else{
        document.querySelector('#navTop').style.position = 'static';
    }
}