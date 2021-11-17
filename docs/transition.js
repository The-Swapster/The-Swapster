function delay (URL) {
    setTimeout( function() { window.location = URL }, 900 );
}

const buttons = document.getElementsByTagName("button");

for (const button of buttons) {
  button.addEventListener('click', () => {
     var id = button.getAttribute("id");
    
     var layerClass = "." + id+ "-layer";
     var layers = document.querySelectorAll(layerClass);
     for (const layer of layers) {
       layer.classList.toggle("active");
     }
  });
}