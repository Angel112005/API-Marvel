import { Event } from "../models/Event.js";
import { listEvent } from "./dependencies.js";


let api = document.getElementById("btn-api");
api.addEventListener("click", async function () {
  let url =
    "http://gateway.marvel.com/v1/public/events?ts=1000&apikey=bd04fc4819920ed0329740552bcd0d6b&hash=9f64d17e8accbb7b3644af997b8811e3";
  await fetch(url)
    // Convertir una Promesa a formato Json
    .then((response) => response.json())
    // Accediendo al json creado, a través de una variable a que tu llamaste
    .then((data) => {
      data.data.results.forEach((result) => {
        let event = new Event();
        event.setId(result.id);
        event.setTitle(result.title);
        event.setDescription(result.description);

        event.setImage(result.thumbnail.path+"."+result.thumbnail.extension)
        console.log(result.thumbnail.path+"."+result.thumbnail.extension)
          
        
        // result.characters.items.forEach((elements) => {
        //   event.setCharacters(elements.name);
        //   console.log(elements.name)
        // });

        
        const characterResult = result.characters.items.map((elements) => {
            return elements.name;
        });
        event.setCharacters(characterResult);
        
        const comicResult = result.comics.items.map((elements) =>{
            return elements.name;
        })
        event.setComics(comicResult)

        const creatorResult = result.creators.items.map ((elements) => {
            return elements.name
        })
        event.setCreators(creatorResult)

        const serieResult = result.series.items.map ((elements) => {
            return elements.name
        })
        event.setSeries(serieResult)

        const storyResult = result.stories.items.map ((elements) => {
            return elements.name
        })
        event.setStories(storyResult)

        console.log("Current event:", event);
        listEvent.addEvent(event);
      });
    })
    .catch((e) => {
      console.error("Error detected at", e);
    });
});

const btnView = document.getElementById("btn-view");
btnView.addEventListener("click", () => {
  const div = document.getElementById("contenedor_eventos");
  console.log(listEvent.getListEvents());
  listEvent.getListEvents().forEach((item) => {
    let contenedor = document.createElement("div");

    
    let id = document.createElement("p");
    let title = document.createElement("p");
    
    let img = document.createElement("img")

    let description = document.createElement("p");
    let characters = document.createElement("ol");
    let comics = document.createElement("ul")
    let creators = document.createElement("ol")
    let series = document.createElement("ul")
    let stories = document.createElement("ol")
    // let episodeButton = document.createElement("button");

    id.innerText = item.getId();
    title.innerText = item.getTitle();

    img.src = item.getImage();

    description.innerText = item.getDescription();

    item.getCharacters().forEach(element => {
        let lista = document.createElement ("li")
        lista.innerText = element
        characters.appendChild (lista)
    });

    item.getComics().forEach(element => {
        let lista = document.createElement ("li")
        lista.innerText = element
        comics.appendChild (lista)
    });

    item.getCreators().forEach(element => {
        let lista = document.createElement ("li")
        lista.innerText = element
        creators.appendChild (lista)
    });

    item.getSeries().forEach(element => {
        let lista = document.createElement ("li")
        lista.innerText = element
        series.appendChild (lista)
    });

    item.getStories().forEach(element => {
        let lista1 = document.createElement("li")
        lista1.innerText = element
        stories.appendChild(lista1)
    })

    // episodeButton.innerText = "Mostrar Episodios";
    // episodeButton.addEventListener("click", () => {
    //   item.getCharacters().forEach((element) => {
    //     let lista = document.createElement("li");
    //     lista.innerText = element;
    //     characters.appendChild(lista);
    //   });
    // });

    contenedor.appendChild(id)
    contenedor.appendChild(title)

    contenedor.appendChild(img)

    contenedor.appendChild(description)

    contenedor.appendChild(characters)
    contenedor.appendChild(comics)
    contenedor.appendChild(creators)
    contenedor.appendChild(series)
    contenedor.appendChild(stories)
    // contenedor.appendChild(episodeButton)

    div.appendChild(contenedor);
  
    div.classList.add("main-container")

    contenedor.classList.add("dates-container");
    description.classList.add("description-container")
    id.classList.add("id-date");
    title.classList.add("title-date");
    img.classList.add("img-container")

    characters.classList.add("class-list")
    comics.classList.add("class-list")
    creators.classList.add("class-list")
    series.classList.add("class-list")
    stories.classList.add("class-list")
  });
});





// import { Event } from "../models/Event.js";
// import { listEvent } from "./dependencies.js";
// import { Characters } from "../models/Characters.js"; 
// // import { Thumbnails } from "../models/Thumbnails.js";

// let api = document.getElementById("btn-api");
// api.addEventListener("click", async function () {
//   let url =
//     "http://gateway.marvel.com/v1/public/events?ts=1000&apikey=bd04fc4819920ed0329740552bcd0d6b&hash=9f64d17e8accbb7b3644af997b8811e3";
//   await fetch(url)
//     // Convertir una Promesa a formato Json
//     .then((response) => response.json())
//     // Accediendo al json creado, a través de una variable a que tu llamaste
//     .then((data) => {
//       data.data.results.forEach((result) => {
//         let event = new Event();
//         event.setId(result.id);
//         event.setTitle(result.title);
//         event.setDescription(result.description);

//         let character = new Characters (result.characters.items.name)
//         event.setCharacters(character)
        
//         // result.characters.items.forEach((elements) => {
//         //   event.setCharacters(elements.name);
//         //   // console.log(elements.name)
//         // });

//         // let thumbnail = new Thumbnails(
//         //   result.thumbnail.path,
//         //   result.thumbnail.extension
//         // );
//         // event.setThumbnail(thumbnail);
//         console.log("Current event:", event);
//         listEvent.addEvent(event);
//       });
//     })
//     .catch((e) => {
//       console.error("Error detected at", e);
//     });
// });
