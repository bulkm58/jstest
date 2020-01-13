
// 2. le boolean:
let maBoolean = false;

// 3.L'array:
let monArray = ["bryan", "kadir"];

// 4.L'objet:

let monObjet = {
    prénom:"bryan" 
};

// 5.le string:
let monPrenom = "bryan";

// 6.l'integer:

let monInt = 4;

// 7.l'objet et sa méthode:

// let personne = {
//     pomme:'',
//     manger =() => {
    
//         this.pomme= this.pomme+1
//     }
// }
// personne.manger();
// console.log(personne)

// 8.la function 


let voler = (a,b) => {

    console.log(a+b)
}

voler("45","tele");


// 9. la condition

const monInteger = 3
if (monInt < 8) {
  console.log("monInt est plus petit que 8");
}

// 10.la boucle 

const nombreDeleve = 9;

for (let i = 0; i < nombreDeleve; i++) {
    console.log("eleve rentrer en classe !");
}

console.log("Tous les eleves sont en classe !");

// 11. objet date

let ladate=new Date()
console.log(ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear());


// 12.string to string

function maMaj(phrase){
    return phrase.charAt(0).toUpperCase();
}
console.log(maMaj("phrase"));

// 13. string to string    re verifiiiiiie !!!!

function mesMaj(bryane){
    return bryane.charAt(0,6).toUpperCase();
}
console.log(mesMaj("phrase"));


// 14. la longueur

// let longueuuurdeux = (a) => {

//     return (a).longueuuurdeux.length
// }
// longueuuurdeux()


// 15 . chiffre aléatore p1

function maFonction() {
    
    return alert(Math.floor((Math.random() * 100) + 1));
}
maFonction()

// 16.chiffre aléatoire p2   a revenir par la suite

function monaleatoire() {
    
    return console.log((Math.floor((Math.random() * 100) + 1)));
}
monaleatoire()

// 17.  le type  a finir

// typeof


// 18. les objets 1/1  a finir

let personnage = {
    nom:'',
    age:'',
    modeling (nom,age) {

    this.nom=this.nom
        this.age= this.age+10
    }
}
personnage.modeling();
console.log(personnage)

// 19.objet 2/2 a finir

let monrr = {

}




// La methode modeling a lexercice 18 réattribue la valeur existante, c'est a dire que dans ton cas le nom restera ''