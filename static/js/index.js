let boutonInscription = document.getElementById('inscription')
let boxRegister = document.querySelector('.container-form-register')
let boxConnexion = document.querySelector('.container-form-connexion')
let boutonConnexion = document.getElementById('connexion')

console.log(boutonConnexion)



boutonInscription.addEventListener('click', () => {
    boxConnexion.style.display = "none";
    boxRegister.style.display = "flex";
})

boutonConnexion.addEventListener('click', () => {
    boxRegister.style.display = "none";
    boxConnexion.style.display = "flex";
})