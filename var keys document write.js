var keys = [];
// document.write("<table ><tr>");
// for (key in data[0]) {
// 	document.write('<th>' + key + '</th>');
// }
// document.write("</tr>");
for (var i = 0; i < data.length; i++) {
	document.write('<tr>');
	for (key in data[i]) {
  	document.write('<td>' + data[i][key] + '</td>');
  }
	document.write('</tr>');
}
document.write("</table>"); 




for(var i=0;i<20;i++){
	let tr1=document.createElement("tr");
	document.querySelector("table").appendChild(tr1).setAttribute("id",`${i}`)
	for(var j in data[i]){
	  document.getElementById(`${i}`).innerHTML+=`<td>${data[i][j]}</td>` 
	}
	
  }




  ///my work
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
    document.querySelector("table").appendChild(tr)
    for(var i in data[0]){
      console.log(i)
      document.querySelector("tr").innerHTML+=`<th>${i}</th>`
    }
    
    
    for(var i=0;i<20;i++){
      let tr1=document.createElement("tr");
      document.querySelector("table").appendChild(tr1).setAttribute("id",`${i}`)
      for(var j in data[i]){
        document.getElementById(`${i}`).innerHTML+=`<td>${data[i][j]}</td>` 
      }
      
    }


    function sec(){
      for(var i=20;i<40;i++){
        // let tr1=document.createElement("tr");
        // document.querySelector("table").appendChild(tr1).setAttribute("id",`${i}`)
        var num=0
        for(var j in data[i]){
          document.getElementById(`${num}`).innerHTML+=`<td>${data[i][j]}</td>` 
        }
        num++
      }
    }
    function thi(){
      for(var i=41;i<60;i++){
        let tr1=document.createElement("tr");
        document.querySelector("table").appendChild(tr1).setAttribute("id",`${i}`)
        for(var j in data[i]){
          document.getElementById(`${i}`).innerHTML+=`<td>${data[i][j]}</td>` 
        }
        
      }
    }
    function fou(){
      for(var i=61;i<80;i++){
        let tr1=document.createElement("tr");
        document.querySelector("table").appendChild(tr1).setAttribute("id",`${i}`)
        for(var j in data[i]){
          document.getElementById(`${i}`).innerHTML+=`<td>${data[i][j]}</td>` 
        }
        
      }
    }
    function fif(){
      for(var i=81;i<100;i++){
        let tr1=document.createElement("tr");
        document.querySelector("table").appendChild(tr1).setAttribute("id",`${i}`)
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
