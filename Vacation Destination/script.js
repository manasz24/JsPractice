(function(){
        'use strict'

        //pickout the Form 
    let detailsForm = document.querySelector('#destinations_details');
        // on Submit Behavior
    detailsForm.addEventListener('submit',handleSubmit);

    function handleSubmit(event){
        event.preventDefault();
    let destName = event.target.elements['name'].value;
    let destLocation = event.target.elements['location'].value;
    let destPhoto = event.target.elements['photo'].value;
    let destDescription = event.target.elements['description'].value;

    for(let i=0; i<detailsForm.length;i++){
        detailsForm.elements[i].value="";
    }

    let destcard = createDestinationCard(destName,destLocation,destPhoto,destDescription);

    let wishListContainer = document.getElementById('destinations_container');

    if(wishListContainer.children.length ===0){
        document.getElementById('title').innerHTML = "My WIsh List";
    }
    //wishListContainer.appendChild(destcard);
    document.querySelector('#destinations_container').appendChild(destcard);
    }

    function createDestinationCard(destName,destLocation,destPhoto,destDescription){

        let card = document.createElement("div");
        card.className = 'card';

        let img = document.createElement("img");
        img.setAttribute('alt', destName);

        let constantPhotoUrl = "images/signpost.jpg";
        
        if(destPhoto.length === 0){
            img.setAttribute('src', constantPhotoUrl);
        }else{
            img.setAttribute('src', destPhoto);
        }

        card.appendChild(img);

        let cardBody = document.createElement("div");
        cardBody.className ="card-body";

        let cardTitle = document.createElement("h3");
        cardTitle.innerText= destName;
        cardBody.appendChild(cardTitle);

        let cardSubTitle = document.createElement("h4");
        cardSubTitle.innerText= destLocation;
        cardBody.appendChild(cardSubTitle);

        if(destDescription.length!==0){
            let cardText = document.createElement("p");
            cardText.className="card-text";
            cardText.innerText=destDescription;
            cardBody.appendChild(cardText);
        }

        const cardDeleteButton = document.createElement("button");
        cardDeleteButton.innerText ="Remove";

        cardDeleteButton.addEventListener("click",function(evt){
                let cardDel = evt.target.parentElement.parentElement;
                cardDel.remove();
        });
        cardBody.appendChild(cardDeleteButton);
        card.appendChild(cardBody);
        return card;
    }
})();