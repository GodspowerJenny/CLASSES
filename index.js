let count = 0
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
  
    btn.addEventListener('click',function (e){
        
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease'))
            count--;
         }
        else if (styles.contains('increase')){
            count++;
        }
        else{
            count =0
        }
        value.textcontent =count;
    });
});
// let number = 0;
// const numberElement = document.getElementById("number");

// function increase () {
//     number++;
//     updateNumber();
// }

// function decrease () {
//     number--;
//     updateNumber();
// }
// function reset () {
//     number = 0;
//     updateNumber();
// }
// function updateNumber(){
//     numberElement.textContent = number;
// }