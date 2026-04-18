let page =1;
const conatiner = document.getElementById("container");
async function loadData(){
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
    const data = await res.json();
    data.forEach(item => {
        const div = document.createElement("div");
        div.innerText = item.title;
        conatiner.appendChild(div);
    });

    page++;
}

window.addEventListener("scroll",()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight -10){
        loadData();
    }
});
loadData();