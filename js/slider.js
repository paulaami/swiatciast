//getting all required elements
const gallery  = Array.from(document.querySelectorAll(".section__gallery-container-img"))
const previewBox = document.querySelector(".section__gallery-modal")
let previewImg = previewBox.querySelector(".box-img")
closeIcon = previewBox.querySelector(".section__gallery-modal-close")
const currentImgNr = previewBox.querySelector(".current-img")
const totalImgNr = previewBox.querySelector(".total-img")
const shadow = document.querySelector(".shadow");


// gallery.forEach( el =>  {
//  console.log(gallery[0])
//  el.addEventListener('click', () => {
//  let newSrc = el.getAttribute('src');
//  console.log(newSrc)
//  previewBox.classList.add('show-modal');
//  console.log(previewImg);
//  previewImg.src = newSrc
//  console.log(el.nextElementSibling)
// })
// });

for(let i=0; i < gallery.length; i++) {

 totalImgNr.textContent = gallery.length;
 let newIndex = i;
 let clickedImgIndex;

 gallery[i].addEventListener('click', () => {
  let clickedImgIndex = i;


  const showPhoto = () => {
   let selectedImg = gallery[newIndex].querySelector('img').src;
   previewImg.src = selectedImg;

   currentImgNr.textContent = newIndex+1;
  }
  showPhoto();
  
  previewBox.classList.add('show-modal');
  const next = previewBox.querySelector('.next');
  const prev = previewBox.querySelector('.prev');

  if(newIndex >= gallery.length-1) {
   next.style.display = 'none';
  }

  if(newIndex == 0) {
   prev.style.display = 'none';
  }

  next.addEventListener('click', () => {
   newIndex++;

   if(newIndex == gallery.length-1) {
    showPhoto();
    next.style.display = 'none';
   } else {
    showPhoto();
    prev.style.display = 'block';
   }
  })


  prev.addEventListener('click', () => {
   newIndex--;
   
   if(newIndex == 0) {
    showPhoto();
    prev.style.display = 'none';
   } else {
    showPhoto();
    next.style.display = 'block';
   }
  })


  closeIcon.addEventListener('click', () => {
   newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
   prev.style.display = 'block';
   next.style.display = 'block';
   previewBox.classList.remove('show-modal');
  })

 })
}
 console.log(gallery.length-1);











// window.onload = ()=>{
//     for (let i = 0; i < gallery.length; i++) {
//         totalImg.textContent = gallery.length; //passing total img length to totalImg variable
//         let newIndex = i; //passing i value to newIndex variable
//         let clickedImgIndex; //creating new variable
        
//         gallery[i].onclick = () =>{
//             clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
//             function preview(){
//                 currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
//                 let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
//                 previewImg.src = imageURL; //passing user clicked img url in previewImg src
//             }
//             preview(); //calling above function
    
//             const prevBtn = document.querySelector(".prev");
//             const nextBtn = document.querySelector(".next");
//             if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
//                 prevBtn.style.display = "none"; 
//             }
//             if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
//                 nextBtn.style.display = "none"; 
//             }
//             prevBtn.onclick = ()=>{ 
//                 newIndex--; //decrement index
//                 if(newIndex == 0){
//                     preview(); 
//                     prevBtn.style.display = "none"; 
//                 }else{
//                     preview();
//                     nextBtn.style.display = "block";
//                 } 
//             }
//             nextBtn.onclick = ()=>{ 
//                 newIndex++; //increment index
//                 if(newIndex >= gallery.length - 1){
//                     preview(); 
//                     nextBtn.style.display = "none";
//                 }else{
//                     preview(); 
//                     prevBtn.style.display = "block";
//                 }
//             }
//             document.querySelector("body").style.overflow = "hidden";
//             previewBox.classList.add("show"); 
//             shadow.style.display = "block"; 
//             closeIcon.onclick = ()=>{
//                 newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
//                 prevBtn.style.display = "block"; 
//                 nextBtn.style.display = "block";
//                 previewBox.classList.remove("show");
//                 shadow.style.display = "none";
//                 document.querySelector("body").style.overflow = "scroll";
//             }
//         }
        
//     } 
// }
