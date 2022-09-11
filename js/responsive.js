function responsiveMedia (id,mq,mobileContent,desktopContent){
    let breakPoint = window.matchMedia(mq);

    const responsive = (e) => {
        if(e.matches) document.getElementById(id).innerHTML = desktopContent;
        else document.getElementById(id).innerHTML = mobileContent;
    };

    breakPoint.addEventListener('change', responsive);
    responsive(breakPoint);
}

export { responsiveMedia };

// const mqList = window.matchMedia('(min-width: 768px');

// console.log(mqList);

// console.log(mqList.matches);

// mqList.addEventListener('change', (e) => {
//     console.log('mq match did change',e.matches);
// });