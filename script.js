const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter =>{
    const updateCount = () =>{
        const target = +counter.getAttribute('data-target') //plus in the begin is to change the type from string to number
        const count = +counter.innerText;

        const inc = target/ speed;

        if(count < target){
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        }else{
            count.innerText = target
        }
    }
    updateCount();
});