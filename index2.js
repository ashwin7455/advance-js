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

function createdata(newdata,callbacks){
  
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
       datas.push(newdata);
      let error = false;
      if(!error){
        resolve();
      }
      else{
        reject("kuch error nhi hai")
      }  
    },2000);
})

}
createdata({name:"vivek", profession: "software Engineer"}.then(getDatas))

//async and await

async function start(){

 await createdata({name:"vivek", profession: "software Engineer"})
}
start()