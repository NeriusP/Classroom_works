// Gauti id numerį iš
    //https://in3.dev/vinted/api/news/ ir kreiptis su juo į produktą
    //https://in3.dev/vinted/api/products/---id
    //jame susirasti main_img, pasiimti pagal nr. iš masyvo img, ir jš atvaizduoti, po juo atvaizduoti title ir price

//  šalia pav parašyti userio vardą iš čia https://in3.dev/vinted/api/users/4



// const f = () => {fetch('https://in3.dev/vinted/api/news/')
// .then(response => response.json())
// .then(data => data.forEach(el => {
//     let a = document.createElement('a');
//     a.setAttribute('href', el.download_url)
//     a.setAttribute('target', '_blank');
//     let img = document.createElement('img');
//     img.setAttribute('title', el.author)
//     img.setAttribute('src', el.download_url)
//     a.appendChild(img);
//     galerija.appendChild(a);
// }))}  //console.log(data)

 const galerija = document.querySelector('#gallery');
// document.querySelector('button').addEventListener('click', f);

fetch('https://in3.dev/vinted/api/news/')
.then(response => response.json())
.then(data => {
    console.log(data)
    data.forEach(id => {fetch('https://in3.dev/vinted/api/products/'+id.id)
                        .then(response1 => response1.json())
                        .then(data1 => {
                                let img_container = document.createElement('div'); 
                                img_container.id = 'img_container';
                                let img = document.createElement('img');
                                let name = document.createElement('span');
                                name.innerText = data1.title;
                                let price = document.createElement('span');
                                price.innerText = 'Kaina:'+data1.price+' €';
                                console.log(data1)
                                let avatar = document.createElement('img');
                                let user = document.createElement('span');
                                fetch('https://in3.dev/vinted/api/users/'+data1.user)
                                .then(response1 => response1.json())
                                .then(data2 =>  {
                                    if (data2.avatar) {
                                        avatar.setAttribute('src', data2.avatar);
                                        avatar.className = 'avatar';
                                    }
                                    else {
                                        avatar.className = 'no_avatar';
                                        avatar.setAttribute('src', 'https://i1.wp.com/talentedfish.com/wp-content/uploads/2019/04/no-avatar.jpg?ssl=1')
                                        }
                                    user.innerText = data2.name;

                                });

                                img.setAttribute('src', data1.img[data1.main_img]);
                                img_container.appendChild(img);
                                img_container.appendChild(name);
                                img_container.appendChild(price);
                                img_container.appendChild(avatar);
                                img_container.appendChild(user);
                                galerija.appendChild(img_container);

                            });
                        })
});



// data1.forEach(el => {
//     let img_container = document.createElement('div'); 
//     let img = document.createElement('img');
//     img.setAttribute('src', el.url[el.main.img]);
//     img_container.appendChild(img);
//     galerija.appendChild(img_container);
// })