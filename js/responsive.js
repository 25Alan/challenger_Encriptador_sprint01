const mqList = window.matchMedia('(min-width: 768px');

console.log(mqList);

console.log(mqList.matches);

mqList.addEventListener('change', (e) => {
    console.log('mq match did change',e.matches);
});