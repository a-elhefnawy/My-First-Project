function setCookie(key, value) {
    document.cookie = `${key}=${value}`;
  }
  
  function getCookies() {
    return document.cookie;
  }
  
  let cookies = getCookies().split(";");
  
  function getCookie(key) {
    for (var i = 0; i < cookies.length; i++) {
      if (cookies[i].split("=")[0].trim() == key) {
        return cookies[i].split("=")[1];
      }
    }
  }
  
  function hasCookie() {
    for (var i = 0; i < cookies.length; i++) {
      if (!cookies[i].split("=")[1]) return false;
    }
    return true;
  }
  
  function deleteCookie(key, value) {
    let myDate = new Date();
    myDate.setDate(myDate.getDate() - 1);
  
    setCookie(key, value, myDate);
  }


