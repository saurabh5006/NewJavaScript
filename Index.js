let input = document.querySelector('input');
let addtask = document.querySelector('button');
let addul = document.querySelector('ul');

addtask.addEventListener('click', ()=>{ // addtask par click karne par bar bar call ho jaa raha hai
    // hum html tag me direcrt value add nhi kar sakte islye hum   DOM use karte hai     
    let item = document.createElement("li");//element bana to diya isko kisi me to dalna padega body me ya pher kisi div me // li ke tag me value ayse insert karega
    item.innerText = input.value;// yaha hum connect kar rahe hai buttion or input ko// value already define hai // elemet banane ke bad coontent bhi to dalnala padega 

    let del = document.createElement('button');
    del.innerText = "delet";
    del.classList.add("delet");
    item.append(del); // hum item ke under button add kar rahe hai to buttion ko select karke uska var daldege
    addul.appendChild(item); // element ko kisi elemnt me add karne ke liye ayse karenge
        input.value = "";

        
        // console.log("clicked");
});

// let dels = document.querySelectorAll('.delet');

// for(dele of dels){

//     dele.addEventListener('click',  function(){
//         let par = this.parentElement;
//         console.log(par);
//     })
// };

// let dels = document.querySelectorAll('.delet');

// for (let dele of dels) {
//   dele.addEventListener("click", function () {
//     let par = dele.parentElement;
//     console.log(par);
//     // par.remove();
//   });
// };



// 

// document.addEventListener('DOMContentLoaded', function() {
//   let dels = document.querySelectorAll('.delet');
  
//   for (let dele of dels) {
//     dele.addEventListener('click', function() {
//       let par = this.parentElement;
//       console.log(par);
//     });
//   }
// });


addul.addEventListener("click", function (event) {
  if (event.target.nodeName=="BUTTON") {
    let par = event.target.parentElement;  // The <li> containing the "Delete" button
    par.remove();  // Remove the <li> when the "Delete" button is clicked
  }
});


// agar hum inpute me kuch bhi type karte hai to wo value me ajata hai 