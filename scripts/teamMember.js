(function () {
  const getUserId = () => {
    const search = location.search;
    const obj = new URLSearchParams(search);
    return obj.get("id");
  };

  const showUserDetails = (userDetails) => {
    const { avatar, first_name, last_name, email } = userDetails;
    const img = document.getElementById("userAvatar");
    img.setAttribute("src", avatar);

    const nameEl = document.getElementById("userName");
    nameEl.innerHTML = first_name + " " + last_name;

    const emailEl = document.getElementById("userEmail");
    emailEl.innerHTML = email;
  };
  const userNotFound = () => {
    const h1 = document.createElement("h1");
    h1.innerHTML = "User not found";
    const container = document.getElementById("team-member-details");
    container.append(h1);
  };

  const getUser = async (userId) => {
    try {
      showLoader();
      const res = await fetch(`https://reqres.in/api/users/${userId}`);
      if (res.status >= 400) {
        throw res;
      }
      const data = await res.json();
      showUserDetails(data.data);
    } catch (e) {
      const { status } = e;
      if (status === 404) {
        userNotFound();
      }
      console.error(e);
    } finally {
      hideLoader();
    }
  };

  const getMemberDetail = () => {
    const userId = getUserId();
    if (userId) {
      getUser(userId);
    } else {
      userNotFound();
    }
  };

  const showLoader = () => {
    const loaderEl = document.querySelector(".loader");
    loaderEl.classList.remove("hide");
  };
  const hideLoader = () => {
    const loaderEl = document.querySelector(".loader");
    loaderEl.classList.add("hide");
  };

  getMemberDetail();
})();
