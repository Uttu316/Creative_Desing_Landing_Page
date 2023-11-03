(function () {
  const getTeams = async () => {
    try {
      showLoader();
      const res = await fetch("https://reqres.in/api/users");
      const data = await res.json();
      showList(data);
    } catch (e) {
      console.error(e);
    } finally {
      hideLoader();
    }
  };

  const showList = (response) => {
    const { data: users } = response;
    createUserList(users);
  };

  const createUserList = (users) => {
    const size = 150;
    users.forEach((user, index) => {
      const { avatar, id, first_name, last_name } = user;

      const article = document.createElement("article");
      article.classList.add("team-member");

      const img = document.createElement("img");
      img.setAttribute("src", avatar);

      if (window.innerWidth > 720) {
        if (users.length % 2 == 0) {
          const m = users.length / 2;

          if (m === index || m - 1 === index) {
            img.style.height = `${size}px`;
            img.style.width = `${size}px`;
          }
        } else {
          const m = users.length / 2;
          if (m === index) {
            img.style.height = `${size}px`;
            img.style.width = `${size}px`;
          }
        }
      }

      const nameEl = document.createElement("p");
      nameEl.innerHTML = first_name + " " + last_name;

      article.append(img, nameEl);

      article.addEventListener("click", function (e) {
        const url = window.location.href;
        window.location.href = url.replace("index.html", `teams.html?id=${id}`);
      });

      const list = document.getElementById("teams-list");
      list.append(article);
    });
  };

  const showLoader = () => {
    const loaderEl = document.querySelector(".loader");
    loaderEl.classList.remove("hide");
  };
  const hideLoader = () => {
    const loaderEl = document.querySelector(".loader");
    loaderEl.classList.add("hide");
  };

  getTeams();
})();
