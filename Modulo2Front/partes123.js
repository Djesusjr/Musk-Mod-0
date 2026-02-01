// Parte 1: Fundamentos de las Cookies

let fecha = new Date()

fecha.setDate(fecha.getDate()+7)

document.cookie = "userType=premium; expires="+ fecha.toUTCString()+";path/"

document.cookie = "username=juan perez; path=/"



function getCookie(nombre) {
  let cookies = document.cookie;

  if (cookies === "") return null;

  let arrayCookies = cookies.split("; ");

  for (let i = 0; i < arrayCookies.length; i++) {
    let cookie = arrayCookies[i].split("=");
    if (cookie[0] === nombre) {
      return cookie[1];
    }
  }

  return null;
}

document.cookie = "authToken=abc123; path=/"

let authToken = getCookie('authToken')

if (authToken) {
    console.log('usuario autenticado')
}else{
    console.log('usuario no autenticado')
}

// Parte 2: Modificación y Eliminación de Cookies

document.cookie = "username=Maria Gomez; path=/;"

let nuevaFecha = new Date()

nuevaFecha.setDate(nuevaFecha.getDate()+3)

document.cookie = "userType=standard; expires="+nuevaFecha.toUTCString()+"; path=/";

function deleteCookie(cookie){
  let expiresDate = new Date()
  expiresDate.setDate(expiresDate.getDate()-10)
  document.cookie = ""+cookie+"=; expires="+expiresDate.toUTCString()+"; path=/"
}

  
if( document.cookie.includes('cookie')){
  console.log('no eliminada')
}else
  console.log('eliminada')

// Parte 3: Aplicaciones Prácticas y Retos

function setTheme(theme) {
  let fecha = new Date()

  fecha.setDate(fecha.getDate()+30)

  document.cookie = "theme="+theme+"; expires="+fecha.toUTCString()+"; path=/"

}

function getTheme() {
  return getCookie('theme')
}

function addPage(page) {

  let pages = getCookie('pages')

  let arrayPages = []

  if (pages) {
    arrayPages = pages.split(',')
  }
  
  arrayPages.push(page)

  if (arrayPages.length >= 5) {
    arrayPages.shift()
  }

  let fecha = new Date()

  fecha.setDate(fecha.getDate()+7)

  document.cookie = "pages="+arrayPages.join(",")+"; expires="+fecha.toUTCString()+"; path=/"
}

function getPages() {
  let pages = getCookie('pages')

  if (!pages) {
    return []
  }return pages.split(",")
}

function showPreferences(){
  
  let theme = getTheme()
  let history = getPages()

  console.log('Theme: ', theme ? theme : 'Theme no definido')
  
  console.log('Historial de paginas: ')

  if(history.length === 0){
    console.log('Sin historial')
  }else{
    history.forEach((page) => console.log('- '+ page))
  }
}


function logIn(user) {
  document.cookie = "user="+user+"; path=/"
}

logIn('musk')

let sesion = getCookie("user")

if (sesion) {
  console.log('Usuario autenticado')
}else {
  console.log('Usuario no autenticado')
}

function logOut() {
  let fecha = new Date()
  fecha.setDate(fecha.getDate()-1)
  document.cookie = "user=; expires="+fecha.toUTCString()+"; path=/"
  sesion = getCookie("user")
}

logOut()

if (sesion) {
  console.log('Usuario autenticado')
}else {
  console.log('Usuario no autenticado')
}
