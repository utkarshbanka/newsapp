// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
let n = document.getElementById("navbar")
n.innerHTML = navbar();

import {serachnews, append,serachnews1} from "./fetch.js";

let serach = (e) => {
    if(e.key ==="Enter")
    {
        let value = document.getElementById("search_input").value;
        serachnews(value).then((data) =>
        {
            console.log(data)
            // data.preventDefault();
            // window.location= ("search.html")
            let container = document.getElementById("results")
            container.innerHTML = null;
            append(data.articles, container)
        })
    }
}

document.getElementById("search_input").addEventListener("keydown", serach)

let sidebar = document.getElementById("sidebar").children;
console.log(sidebar)
function csearch () {
    serachnews1(this.id).then((data) =>
    {
        console.log(data)
        // window.location("search.html")
        let container = document.getElementById("results")
        container.innerHTML = null;
        append(data.articles, container)
    })
}

for(let el of sidebar)
{
    el.addEventListener("click", csearch);
}

