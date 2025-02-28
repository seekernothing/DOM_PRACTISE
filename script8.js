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
