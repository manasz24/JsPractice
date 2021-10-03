(function(){
    'use strict'
    let convertType = "miles";
    let heading = document.querySelector('h1');
    let intro = document.querySelector('p');
    let answer = document.getElementById('answer');
    let form = document.getElementById('convert');

    document.addEventListener('keydown',function(event){
        let key = event.code;
        if(key =='KeyK'){
            convertType ='Kilometers';
            heading.innerHTML ='Kilometer to Miles Converter';
            intro.innerHTML = 'Type in a number of Kilometers and click the button to convert the distance to miles';
        }else if(key == 'KeyM'){
            convertType ='Miles';
            heading.innerHTML ='Mile to Kilometers Converter';
            intro.innerHTML = 'Type in a number of Miles and click the button to convert the distance to Kilometeres';

        }

    });

    form.addEventListener('submit',function(event){
            event.preventDefault();
        let distance = parseFloat(document.getElementById('distance').value);

        if(distance){
            if(convertType == 'Miles'){
                let converted = (distance * 1.609344).toFixed(3);
                answer.innerHTML=`${distance} miles converts to ${converted} kilometers`;
            }else{
                let converted = (distance * .621371192).toFixed(3);
                answer.innerHTML=`${distance} kilometers converts to ${converted} miles`;
            }
        }else{
            answer.innerHTML =`<h2>Please provide a number</h2>`;

        }



    });


})();