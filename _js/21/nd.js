const f = () => {fetch('https://picsum.photos/v2/list')
.then(response => response.json())
.then(data => data.forEach(el => {
    let a = document.createElement('a');
    a.setAttribute('href', el.download_url)
    a.setAttribute('target', '_blank');
    let img = document.createElement('img');
    img.setAttribute('title', el.author)
    img.setAttribute('src', el.download_url)
    a.appendChild(img);
    galerija.appendChild(a);
}))}  //console.log(data)

const galerija = document.querySelector('#gallery');
document.querySelector('button').addEventListener('click', f);


