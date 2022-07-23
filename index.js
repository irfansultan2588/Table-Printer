
function mainFun() {
    let table = document.querySelector("#table").value;
    document.querySelector("#result").innerHTML = " ";


    for (let i = 1; i <= 10; i++) {
        document.querySelector("#result").innerHTML += `${table}  <span> x </span> ${i} = ${table * i} <br/>`;
    }
}