// Gauti id numerį iš
//https://in3.dev/vinted/api/news/ ir kreiptis su juo į produktą
//https://in3.dev/vinted/api/products/---id
//jame susirasti main_img, pasiimti pagal nr. iš masyvo img, ir jš atvaizduoti, po juo atvaizduoti title ir price
//  šalia pav parašyti userio vardą iš čia https://in3.dev/vinted/api/users/4






const galerija = document.querySelector('#gallery');

// pasiimam id numerį 
const f = () => fetch('https://in3.dev/vinted/api/news/')
        .then(response => response.json())
        .then(data => {
            console.log(data)
// pasiimam produkto objektą ir kiekvienam produktui kuriam html: img_conteinerį, swiper elementus
    data.forEach(id => {fetch('https://in3.dev/vinted/api/products/'+id.id)
                        .then(response1 => response1.json())
                        .then(data1 => {
                          
                            let img_container = document.createElement('div'); 
                            img_container.classList.add('img_container');
                            let swiper_container = document.createElement('div'); 
                            swiper_container.classList.add('swiper-container', 'mySwiper');
                            let swiper_wrapper = document.createElement('div')
                            swiper_wrapper.classList.add('swiper-wrapper');
                            // let swiper_slide = document.createElement('div'); 
                            // swiper_slide.classList.add('swiper-slide');
                            // let img = document.createElement('img');
                            // img.setAttribute('src', data1.img[data1.main_img]);
                            // swiper_slide.appendChild(img);
                            // swiper_wrapper.appendChild(swiper_slide);
                            
// į swiper_wrapper sukeliam visus img, sudėtus į div.swiper-slide 
                            data1.img.forEach((el, i) => {
                                // if(i !== data1.main_img) {
                                    let swiper_slide = document.createElement('div'); 
                                    swiper_slide.classList.add('swiper-slide');
                                    let img = document.createElement('img');
                                    img.setAttribute('src', el);
                                    //patikrinam, kuris img bus pirmas
                                    swiper_slide.appendChild(img);
                                    if (data1.main_img === i && i === 0){
                                        swiper_wrapper.appendChild(swiper_slide);
                                    }
                                    else if (data1.main_img === i && i !== 0) {
                                        swiper_wrapper.insertBefore(swiper_slide, swiper_wrapper.firstChild);
                                    }  
                                    else {
                                        swiper_wrapper.appendChild(swiper_slide);
                                    }
                                    
                                // }

                            })
                            // sukeliam swiper_wrapper į swiper_container ir pridedam buttonus, jei yra daugiau nei 1 pav
                            swiper_container.appendChild(swiper_wrapper);  
                            let swiper_button = document.createElement('div')
                            if(data1.img.length > 1) {
                                swiper_button.classList.add('swiper-button-next');
                                swiper_container.appendChild(swiper_button);
                                swiper_button = document.createElement('div')
                                swiper_button.classList.add('swiper-button-prev');
                                swiper_container.appendChild(swiper_button);
                            }
                             // sukuriam pavadinimo ir kainos tagus
                                let name = document.createElement('span');
                                name.innerText = data1.title;
                                let price = document.createElement('span');
                                price.innerText = 'Kaina:'+data1.price+' €';
                                //console.log(data1)
                              // sukuriam avataro ir username tagus ir juos užpildom  
                                let avatar = document.createElement('img');
                                let user = document.createElement('span');
                              //pasiimam userį, tikrinam ar turi avatarą, jei ne - užpildom defaultiniu img  
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

                                    let swiper = new Swiper('.swiper-container', {
                                        // Optional parameters
                                        // direction: 'vertical',
                                        // loop: true,
                                      
                                        // If we need pagination
                                        // pagination: {
                                        //   el: '.swiper-pagination',
                                        // },
                                      
                                        // Navigation arrows
                                        navigation: {
                                          nextEl: '.swiper-button-next',
                                          prevEl: '.swiper-button-prev',
                                        },
                                      
                                        // And if we need scrollbar
                                        // scrollbar: {
                                        //   el: '.swiper-scrollbar',
                                        // },
                                      });

                                });

                                // sudedam visus elementus į image_container
                                img_container.appendChild(swiper_container);
                                img_container.appendChild(name);
                                img_container.appendChild(price);
                                img_container.appendChild(avatar);
                                img_container.appendChild(user);
                                 // sudedam  image_container į galeriją 
                                galerija.appendChild(img_container);

                            });
                        })
});

document.querySelector('button').addEventListener('click', f);



