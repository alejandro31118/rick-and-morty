import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Card extends Component {
    NEXT_PAGE = 1;

    API_BASE_URL = 'https://rickandmortyapi.com/api/';
    API_CHARACTERS_URL = `${API_BASE_URL}character/`;
    API_GET_CHARACTERS_BY_PAGE_URL = `${API_CHARACTERS_URL}?page=${NEXT_PAGE}`;
    API_GET_CHARACTER_BY_NAME = `${API_CHARACTERS_URL}?name=`;

    /* DOM */
    cards_container = document.querySelector('.js-card-container');
    load_more_btn = document.querySelector('.js-load-more-btn');
    /*  Modal */
    modal_character_image = document.querySelector('.js-modal-character-image');
    modal_character_name = document.querySelector('.js-modal-character-name');
    modal_character_species = document.querySelector('.js-modal-character-species');
    modal_character_gender = document.querySelector('.js-modal-character-gender');
    modal_character_origin = document.querySelector('.js-modal-character-origin');
    modal_character_location = document.querySelector('.js-modal-character-location');
/* === END Const and vars === */

/* Get data from API */
 getDataFromUrl = (url) => {
  fetch( url )
    .then( response => response.json() )
    .then( data => generateCards( data ) );
}

/* Generate Cards */
    generateCards( cards ) {

        /* And now, generate cards*/
        cards['results'].forEach(card => {

            let status_custom_class = '';

            switch ( card.status ) {
            
            case 'Alive':
                break;
            case 'Dead':
                status_custom_class = 'isDead';
                break;
            case 'unknown':
                status_custom_class = 'isUnknown';
                break;

            }

            let card_info = `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                <div onclick="getCharacterInformation(${card.id})" class="c-card" data-bs-toggle="modal" data-bs-target="#characterInformationModal">
                <div class="c-card__head">
                    <img src="${card.image}">
                </div>
                <div class="c-card__body">
                    <p class="c-card__name mb-1">${card.name}</p>
                    <p class="c-card__specie">${card.species}</p>
                    <p class="c-card__status ${status_custom_class}">${card.status}</p>
                    <p class="c-card__origin">${card['origin'].name}</p>
                </div>
                </div>
            </div>
            `;

            root.innerHTML += card_info;

  });

  /* Increment value of load more btn*/
  load_more_btn.setAttribute( 'data-next-page', NEXT_PAGE );

}

/* Load next page */
    loadMore(page) {
        /* Set next page */
        NEXT_PAGE = parseInt(page) + 1;

        /* Get data from API */
        getDataFromUrl(`https://rickandmortyapi.com/api/character/?page=${NEXT_PAGE}`);
    }

/* Remove all childres */
    removeAllChildNodes(parent) {
        while ( parent[0] ) {
            parent[0].parentNode.removeChild(parent[0]);
        }
    }

/* Add data to root container */
    writeText(text) {
    root.innerHTML += `<p>${text}</p>`;
    }

/* Get data from character by ID and modify modal before showing */
    getCharacterInformation(character_id) {
        fetch(API_CHARACTERS_URL + character_id)
            .then(response => response.json())
            .then(data => {
                modal_character_image.setAttribute( 'src', data.image )
                modal_character_name.innerHTML = data.name;
                modal_character_species.innerHTML = `Specie: ${data.species}`;
                modal_character_gender.innerHTML = `Gender: ${data.gender}`;
                modal_character_origin.innerHTML = `Origin: ${data['origin'].name}`;
                modal_character_location.innerHTML = `Current location: ${data['location'].name}`;
            });
    }

/* Init get data */
    getDataFromUrl(API_GET_CHARACTERS_BY_PAGE_URL);

  render (

    <main class="c-main">

        <div class="container mb-5">

            <div id="root" class="row card-container js-card-container"></div>
            <div class="d-grid gap-2">
                <button class="btn btn-purple js-load-more-btn" onclick="loadMore( this.getAttribute( 'data-next-page' ) )" data-next-page="1" type="button">Load more</button>
            </div>

        </div>

        
        <div class="modal fade" id="characterInformationModal" tabindex="-1" aria-labelledby="characterInformationModal" aria-hidden="true">

            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">

                        <div class="c-modal__img text-center mb-3">
                            <img class="rounded-pill js-modal-character-image" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez" class="js-modal-character-img" />
                        </div>

                        <div class="c-modal__content">

                            <h2 class="c-modal__name js-modal-character-name mb-3">Rick Sanchez</h2>

                            <div class="c-modal__info">
                                <p class="c-modal__purple js-modal-character-species">Human</p>
                                <p class="c-modal__purple js-modal-character-gender">Male</p>
                                <p class="c-modal__purple js-modal-character-origin">Earch (C-137)</p>
                                <p class="c-modal__purple js-modal-character-location">Earth (Replacement Dimension)</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>


    </main>

  );
};

export default Card;

