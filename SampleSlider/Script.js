(function(){
    "use Scrict"
 let img = document.getElementById('myimage');
 //console.log(img);
 let imgarray = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
 let variab = 0; 
 
document.getElementById('previous').addEventListener("click",function(){
    variab--;
    if(variab<0){variab = imgarray.length-1;}
    console.log(imgarray[variab]);
    img.src = imgarray[variab];
});

document.getElementById('next').addEventListener("click",function(){
    variab++;
    if(variab>imgarray.length-1){variab = 0;}
    console.log(imgarray[variab]);
    img.src = imgarray[variab];

});

})();