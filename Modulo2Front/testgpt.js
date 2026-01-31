let fecha = new Date();

fecha.setDate(fecha.getDate()+5);

document.cookie="role=superuser; expires="+fecha.toUTCString()+"; path=/";

function getCokie(nombre){
    let cks = document.cookie;
    let arraysCks = cks.split('; ')
    if (cks === "") return null
    for (let i = 0; i < arraysCks.length; i++) {
        let ck = arraysCks[i].split('=')
        if(ck[0].trim()===nombre)
            return ck[1]
        
    }
    return null
}
let role = getCokie('role')
if (role === null) {
    console.log('usuario sin rol')
}else if (role != 'superuser') {
    console.log('Acceso limitado')
} else {
    console.log('acceso ilimitado')
}