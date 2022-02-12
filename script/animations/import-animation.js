var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
function previewImage(input){
    var reader = new FileReader();
    reader.onload = function (e){
        document.getElementById("preview").setAttribute("src", e.target.result);
    }
    reader.readAsDataURL(input.files[0])
}
function setImage(){
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    var image = document.getElementById("preview");
    context.drawImage(image, 0, 0, width, height)
    
}