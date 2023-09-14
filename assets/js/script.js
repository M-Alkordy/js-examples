/* start factorial for nimber */
/* const input = document.querySelector("#input")
const result = document.querySelector("#result")
input.addEventListener("change" ,() =>{
    let f=1;
    for (let i = 1; i <= Number(input.value); i++) {
        f=f*i;
    }
    result.innerHTML = f
}) */

/* end factorial for nimber */


/* start random */

/* const first_number = document.querySelector("#first_number")
const sec_number = document.querySelector("#sec_number")
const random = document.querySelector("#random")
const result = document.querySelector("#result")

random.addEventListener("click" , () =>{
    f=Number(first_number.value);
    s=Number(sec_number.value);
    let r= Math.ceil(Math.random() *(Math.max(f , s) - Math.min(f , s)) + Math.min(f , s)) ;
    result.innerHTML = r
}) */


/* r*(20 - 10) + 10 */

/* end random */


/* start fibonacci */
/* const input = document.querySelector("#input")
const result = document.querySelector("#result")
input.addEventListener("change", () => {
    result.innerHTML = ""
    let n1=0;
    let n2=1;
    let r=n1 + n2;
    while (r <= Number(input.value)) {
        n1=n2;
        n2=r;
        r= n1 + n2;
    } */
/*     for (let i = 1; i <= Number(input.value) ; i++) {
        r= n1 + n2;

        result.innerHTML +=  r
    } */

/* }) */
/* end fibonacci */


/* start sort the words */
/* const input = document.querySelector("#input")
const result = document.querySelector("#result")
input.addEventListener("change", () => {
    let words = input.value.split(" ")
    words.sort().forEach(element => {
        result.innerHTML+= `${element}  `
    });
}) */

/* end sort the words */

/* start todolist */
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const list = document.querySelector("#list")
let i=0;
btn.addEventListener("click" , ()=>{
    list.innerHTML += `<li id="item ${i++}">${input.value}</li>`;
})
/* end todolist */