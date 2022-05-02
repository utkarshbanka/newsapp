// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
let n = document.getElementById("navbar")
n.innerHTML = navbar();

import {serachnews, append} from "./fetch.js";


// let sidebar = document.getElementById("sidebar").children;
// console.log(sidebar)
// function csearch () {
//     serachnews(this.id).then((data) =>
//     {
//         console.log(data)
//         // window.location("search.html")
//         let container = document.getElementById("results")
//         append(data.articles, container)
//     })
// }

// for(let el of sidebar)
// {
//     el.addEventListener("click", csearch);
// }