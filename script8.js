document.addEventListener("DOMContentLoaded", function () {
  let input = document.querySelector("input");

  let data = [
    {
      name: "Tanjiro",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_OURkMaE6Jb9kmzVfF4OKHiqGZyHfZkQwOA&s",
    },
    {
      name: "Tokito",
      src: "https://staticg.sportskeeda.com/editor/2023/11/9d6a7-17011434322843-1920.jpg?w=640",
    },
    {
      name: "Rengoku",
      src: "https://mir-s3-cdn-cf.behance.net/projects/404/51279c145922055.Y3JvcCwxNTk1LDEyNDcsMCwzNTE.jpg",
    },
    {
      name: "Zenitsu",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVn20gDEs5CG_H0rBnJvuJWAVuK3B_wnC-tg&s",
    },
    {
      name: "Inosuke",
      src: "https://poggers.com/cdn/shop/articles/875ae4a49482e4a03f8015eabce194ae_1827x1028_crop_center.webp?v=1708120938",
    },
    {
      name: "Nezuko",
      src: "https://cdn.caveduck.io/charim/037e0f69-96e9-4976-a621-584397f824fa",
    },
    {
      name: "Muzan",
      src: "https://cdn.oneesports.gg/cdn-data/2023/04/Anime_DemonSlayer_Muzan_3.jpg",
    },
    {
      name: "Shinobu",
      src: "https://images3.alphacoders.com/136/1362044.png",
    },
    {
      name: "Gyomei",
      src: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/gyomei-himejima-the-demon-slayer-corps.jpg",
    },
    {
      name: "Mitsuri",
      src: "https://i.pinimg.com/736x/b1/7b/6a/b17b6adaf77cec49cdf9bf6cd26bd298.jpg",
    },
    {
      name: "Giyu",
      src: "https://preview.redd.it/whats-your-favourite-thing-about-giyu-tomioka-v0-m5burkjiysab1.jpg?auto=webp&s=b72e54720c815d8512661ea41a246cecdce531fb",
    },
    {
      name: "Obanai",
      src: "https://i.pinimg.com/736x/26/12/f1/2612f1ed0b3d241c2a278e51073fcd2d.jpg",
    },
    {
      name: "Sanemi",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1kaF_Optl3GCDox2FtdqPBnUL1CRe4Cl5MA&s",
    },
    {
      name: "Kanao",
      src: "https://i.redd.it/kanao-tysuri-this-is-kanao-in-a-a-u-where-she-is-a-flower-v0-stky4ak2v1ib1.jpg?width=968&format=pjpg&auto=webp&s=387a30948f840665e01ce0a133bb132e4794f073",
    },
    {
      name: "Yorichi",
      src: "https://imagedelivery.net/LBWXYQ-XnKSYxbZ-NuYGqQ/e22749fa-839b-4d11-e77a-310a21b3f200/avatarhd",
    },
  ];
  let pers = "";
  data.forEach(function (element) {
    pers += `<div class="person">
                <div class="img">
                  <img
                    src="${element.src}"
                  />
                </div>

                <h4>${element.name}</h4>
              </div>`;
  });

  document.querySelector(".people").innerHTML = pers;

  input.addEventListener("input", function () {
    let matching = data.filter(function (e) {
      // Convert both strings to lowercase for better matching
      return e.name.toLowerCase().startsWith(input.value.toLowerCase());
    });

    let newusers = "";

    matching.forEach(function (element) {
      newusers += `<div class="person">
                <div class="img">
                  <img
                    src="${element.src}"
                  />
                </div>

                <h4>${element.name}</h4>
              </div>`;
    });

    document.querySelector(".people").innerHTML = newusers;
  });
});
