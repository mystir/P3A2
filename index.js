/* eslint-disable linebreak-style */
/* eslint-disable eol-last */

const img = document.createElement('img');
const imgInfo = document.createElement('p');
const arr = [];
const amtImages = 100;

// get 100 images from lorem picsum and oush to array
for (let i = 0; i < amtImages; i++) {
  const randomImage = `https://picsum.photos/id/${i}/600`;
  const info = `https://picsum.photos/id/${i}/info`;
  console.log(info);
  arr.push({image: randomImage, info: info});
}

const rand = Math.floor(Math.random() * amtImages);

// read from json
fetch(arr[rand].info)
    .then((res) => res.json())
    .then((out) => {
      imgInfo.innerHTML = `<span style="font-weight:bold">ID:</span> ${out.id} 
<span style="font-weight:bold">Author:</span> ${out.author}`;
    }).catch((err)=> console.error(err));


imgInfo.style.marginRight = '20px';
imgInfo.style.fontSize = '20px';
img.src = arr[rand].image;


document.querySelector('body').appendChild(imgInfo);
document.querySelector('body').appendChild(img);

