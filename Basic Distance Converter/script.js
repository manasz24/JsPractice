(function(){

    "use scrict"

   let item = document.getElementById('convert');
   item.addEventListener('submit',function(event){
    event.preventDefault();
    let distance = parseFloat(document.getElementById('distance').value);
    let answer = document.getElementById('answer');
    
    if(distance){
        let converse = (distance*1.609344).toFixed(3);
        answer.innerHTML = `<h2>${distance} miles converts to ${converse}</h2>`;
    }else{

        answer.innerHTML = '<h2>Please provide a valid number!</h2>'
    }
   })

}());