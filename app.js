const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

function uploadImage(){
    let imgLink = URL.createObjectURL( inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent = "";
    imageView.style.border = 0;
}

inputFile.addEventListener("change", uploadImage);

dropArea.addEventListener("dragover", (e)=>{
    e.preventDefault();
});
dropArea.addEventListener("drop", (e)=>{
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    // when we drop the image that will be transfered to the inpuField
    uploadImage();
});
