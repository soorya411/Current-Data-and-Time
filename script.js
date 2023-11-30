
// fetch countries time
selectOptions();
function fetchDateTime(){
    let zone=document.getElementById("Select").value;
    console.log(zone);
    try{
        fetch(`https://worldtimeapi.org/api/timezone/${zone}`)
        .then(data=>data.json())
        .then(data=>{displaydata(data)})

    }
    catch{
        throw new Error("Cant Fetch timezone link")
    }
}
function displaydata(data){
    try{
let result=document.getElementById("result");
const newdate=(data.datetime).toLocaleString();
result.innerHTML=`${newdate}`;
}
catch{
    error=>console.log("Cannot Display date and time ",error);
}
}
function selectOptions(){
    try{
    let select=document.getElementById("Select")
    fetch(`https://worldtimeapi.org/api/timezone`)
    .then(data=>data.json())
    .then(data=>{
        // console.log(data);
        for(i of data){
            output=`<option class="fw-medium">${i}</option>`
            select.innerHTML+=output;

         }
        
    })
}
catch{
    error=>console.log("Cannot fetch timeZone select options");
}
}