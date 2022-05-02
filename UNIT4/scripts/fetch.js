let serachnews = async(value) => {
    const url = `https://masai-mock-api.herokuapp.com/news?q=${value}`

    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
        console.log(data)
    } catch(err)
    {
        console.log(err)
    }
}
let serachnews1 = async(value) => {
    const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`

    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
        console.log(data)
    } catch(err)
    {
        console.log(err)
    }
}







let append = (data,container) => {
    console.log(data)
    data.forEach(({title,description,urlToImage})=>{
        let div  = document.createElement("div");
        div.setAttribute("class", "news")
        let img = document.createElement("img");
        let title1 = document.createElement("h3");
        let description1 = document.createElement("h3")
        img.src = urlToImage;
        title1.innerText = title;
        description1.innerText = description;
        div.append(img,title1,description1)
        container.append(div)
       div.addEventListener("click", function()
       {
           news(data)
       })
    })
}

function news(el)
{
  localStorage.setItem("news", JSON.stringify(data))

}


export {serachnews,append,serachnews1};