(function () {
  "use strict";

  const myFavBooks = [
    "frantz_fanon_black_skin_white_masks",
    "jose_saramago_seeing",
    "fyodor_dostoyevsky_crime_and_punishment",
    "fethullah_gülen_pearls_of_wisdom",
    "john_verdon_think_of_a_number",
    "adam_fawer_improbable",
    "iskender_pala_between_two_coups",
    "said_nursi_words",
    "elif_safak_the_forty_rules_of_love",
    "orhan_pamuk_my_name_is_red"
  ];

  const infoContain = {
    frantz_fanon_black_skin_white_masks: {
      title: "Black Skin, White Masks",
      author: "Frantz Fanon",
      language: "Turkish"
    },
    jose_saramago_seeing: {
      title: "Seeing",
      author: "Jose Saramago",
      language: "Turkish"
    },
    fyodor_dostoyevsky_crime_and_punishment: {
      title: "Crime and Punishment",
      author: "Fyodor Dostoyevsky",
      language: "Turkish"
    },
    fethullah_gülen_pearls_of_wisdom: {
      title: "Pearls of Wisdom",
      author: "Fethullah Gülen",
      language: "Turkish"
    },
    john_verdon_think_of_a_number: {
      title: "Think of A Number",
      author: "John Verdon",
      language: "Turkish"
    },
    adam_fawer_improbable: {
      title: "Improbable",
      author: "Adam Fawer",
      language: "Turkish"
    },
    iskender_pala_between_two_coups: {
      title: "Between Two Coups",
      author: "Iskender Pala",
      language: "Turkish"
    },
    said_nursi_words: {
      title: "Words",
      author: "Bediuzzaman Said Nursi",
      language: "Turkish"
    },
    elif_safak_the_forty_rules_of_love: {
      title: "The Forty Rules of Love",
      author: "Elif Safak",
      language: "Turkish"
    },
    orhan_pamuk_my_name_is_red: {
      title: "My Name is Red",
      author: "Orhan Pamuk",
      language: "Turkish"
    }
  };

  const covers = {
    frantz_fanon_black_skin_white_masks: "images/siyah-deri-beyaz-maske.jpg",

    jose_saramago_seeing: "images/gormek.jpg",

    fyodor_dostoyevsky_crime_and_punishment: "images/Suc-ve-Ceza.jpg",

    fethullah_gülen_pearls_of_wisdom: "images/PearlsOfWisdom.jpg",

    john_verdon_think_of_a_number: "images/ThinkOfANumber.jpg",

    adam_fawer_improbable: "images/Improbable.jpg",

    iskender_pala_between_two_coups: "images/ikiDarbearasinda.jpg",

    said_nursi_words: "images/Words.jpg",

    elif_safak_the_forty_rules_of_love: "images/ask.jpg",

    orhan_pamuk_my_name_is_red: "images/MyNameIsRed.jpg"
  };

  // const moreInfo = {
  //   frantz_fanon_black_skin_white_masks: 'https://en.wikipedia.org/wiki/Black_Skin,_White_Masks',

  //   fyodor_dostoyevsky_crime_and_punishment: 'https://en.wikipedia.org/wiki/Crime_and_Punishment'
  // };

  function renderHtml() {

    let myHead = document.createElement("header");
    myHead.textContent = 'My Favorite 10 Books'
    document.body.appendChild(myHead);

    // for (let i = 0; i <= moreInfo.length; i++) {
    //   let links = moreInfo[i];
    //   let myIframe = document.createElement('iframe');
    //   myHead.appendChild(myIframe);
    //   myIframe.setAttribute("src", moreInfo[links]);
    // };

    let div = document.getElementById("bookList");

    let myFoot = document.createElement("footer");
    document.body.appendChild(myFoot);

    for (let i = 0; i < myFavBooks.length; i++) {
      let id = myFavBooks[i];

      const ul = document.createElement("ul");
      div.appendChild(ul);

      const h1 = document.createElement("h1");
      let bookTitle = infoContain[id].title;
      h1.innerHTML = bookTitle;
      ul.appendChild(h1);

      const img = document.createElement("img");
      img.setAttribute("src", covers[id]);
      ul.appendChild(img);

      const li1 = document.createElement("li");
      let bookAuthor = infoContain[id].author;
      li1.innerHTML = bookAuthor;
      ul.appendChild(li1);

      const li2 = document.createElement("li");
      let bookLanguage = infoContain[id].language;
      li2.innerHTML = bookLanguage;
      ul.appendChild(li2);
    }
  }

  renderHtml();
})();