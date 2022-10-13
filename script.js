//let num=0
    //   num=document.querySelector("input").value;
  
// num=prompt("enter sensense no:")

async function getData(){
    
    response=await fetch('test.csv');
    const data =await response.text();
    //console.log(data);
    

    const rows =data.split('\n').slice(0,document.querySelector("input").value);
    rows.forEach(elt =>{
        const row=elt.split(',');
        
        document.getElementById('StanD').innerHTML =row[0];
        
    })
}

async function getData2(){

    // let num=document.getElementById("#NUM").value;
    const response=await fetch('test.csv');
    const data =await response.text();
    //console.log(data);
    

    const rows =data.split('\n').slice(0,document.querySelector("input").value);
    rows.forEach(elt =>{
        const row=elt.split(',');
        
        document.getElementById('Para').innerHTML =row[1];
        
    })
}
document.querySelector("input").addEventListener('input',getData);
document.querySelector("input").addEventListener('input',getData2);
// document.querySelector(".btn").addEventListener('click',function(){
//     window.open('page2.html', '_blank');
// });