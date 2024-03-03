const accordians = document.querySelectorAll('.accordian');
console.log(accordians);
accordians.forEach(accordian =>{
    const icon = accordian.querySelector('.icon');
    // console.log(icon);
    const answer = accordian.querySelector('.answer');
    // console.log(answer);

    accordian.addEventListener('click',() =>{
        // icon.classList.toggle('active');
        // answer.classList.toggle('active');
        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        }else{
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    })
})