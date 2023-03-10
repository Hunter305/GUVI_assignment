let xhr = new XMLHttpRequest();
xhr.open(
  "get",
  "https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json"
);
xhr.send();

xhr.onload = () => {
    let data=JSON.parse(xhr.response)
    let key=[]
    let tr=document.createElement("tr")
    let thead=document.createElement("thead")
    document.querySelector("table").appendChild(thead)
    document.querySelector("thead").appendChild(tr)
    for(var i in data[0]){
      console.log(i)
      document.querySelector("tr").innerHTML+=`<th scope='col'>${i}</th>`
    }
    
    let tbody=document.createElement("tbody")
    document.querySelector("table").appendChild(tbody)
    for(var i=0;i<20;i++){
      let tr1=document.createElement("tr");
      document.querySelector("tbody").appendChild(tr1).setAttribute("id",`${i}`)
      for(var j in data[i]){
        document.getElementById(`${i}`).innerHTML+=`<td>${data[i][j]}</td>` 
      }
      
    }


    function sec(){
      let num=0
      document.querySelector("tbody").replaceChildren();
      for(var i=20;i<40;i++){
        let tr1=document.createElement("tr");
        document.querySelector("tbody").appendChild(tr1).setAttribute("id",`${i}`)
        
        // document.getElementById(`${num}`).remove()
        for(var j in data[i]){
          document.getElementById(`${i}`).innerHTML+=`<td>${data[i][j]}</td>` 
          
        }
        num=num+1
        
      }
    }
    function thi(){
      document.querySelector("tbody").replaceChildren();
      for(var i=40;i<60;i++){
        let tr1=document.createElement("tr");
        document.querySelector("tbody").appendChild(tr1).setAttribute("id",`${i}`)
        for(var j in data[i]){
          document.getElementById(`${i}`).innerHTML+=`<td>${data[i][j]}</td>` 
        }
        
      }
    }
    function fou(){
      document.querySelector("tbody").replaceChildren();
      for(var i=60;i<80;i++){
        let tr1=document.createElement("tr");
        document.querySelector("tbody").appendChild(tr1).setAttribute("id",`${i}`)
        for(var j in data[i]){
          document.getElementById(`${i}`).innerHTML+=`<td>${data[i][j]}</td>` 
        }
        
      }
    }
    function fif(){
      document.querySelector("tbody").replaceChildren();
      for(var i=80;i<100;i++){
        let tr1=document.createElement("tr");
        document.querySelector("tbody").appendChild(tr1).setAttribute("id",`${i}`)
        for(var j in data[i]){
          document.getElementById(`${i}`).innerHTML+=`<td>${data[i][j]}</td>` 
        }
        
      }
    }

    document.getElementById("sec").addEventListener("click",sec)
    document.getElementById("thi").addEventListener("click",thi)
    document.getElementById("fou").addEventListener("click",fou)
    document.getElementById("fif").addEventListener("click",fif)
};
