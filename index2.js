//Async js programng
//callbacks , Promises, Async await


const datas=[
    {name:"ajay", profession: "software Engineer"},
    {name:"anuj", profession: "software Engineer"},

];

function getDatas(){
    setTimeout(() => {
        let output = "";
        datas.forEach((data,index) => {
           output+=`<li>${data.name}</li>`;
        })
    },1000)
    document.body.innerHTML=output
}

function createdata(){
    setTimeout(() => {
datas.push(newdata)
    },2000);
}

createdata({name:"vivek", profession: "software Engineer"})

getDatas(); 