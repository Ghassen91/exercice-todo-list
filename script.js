var btn = document.querySelector('.btn');
var todoList = document.querySelector('.todo-list-items');
var list = document.querySelector('.list-items');
var containerList = document.querySelector('.div2');
var compteur = 1;
var croix = document.createElement('ion-icon');
var liste = document.createElement('li');


btn.addEventListener('click', function(event){
    event.preventDefault();
    if(todoList.value == ""){
        todoList.placeholder = "Vous devez saisir une tâche !";
        todoList.classList.add('tache')
    }else{
    todoList.placeholder = "Veuillez saisir une tâche..."
    var valeurSaisie = todoList.value; // on prend la valeur écrite par utilisateur
    var liste = document.createElement('li'); //on crée l'élément li
    liste.textContent = compteur++ + ". " + valeurSaisie; //on met la valeur saisie dans le nouvel element crée
    list.append(liste); //on l'ajoute
    var croix = document.createElement('ion-icon');
    croix.setAttribute('name', 'close-circle-outline');
    croix.setAttribute('id', 'croix')
    liste.append(croix);
    todoList.value = ""; // on vide le champs input
    //containerList.style.overflowY = "auto"; // pour faire féfiler quand la liste dépasse la div2
    //on crée l'évènement sur la croix rouge
    croix.addEventListener('click', function(){
        liste.remove(); //enleve l'élément li
        if (list.childElementCount === 0){
            console.log("vide");
            compteur = 1;
        }
    })
    }
})

// on ajoute un evenement a l'input
todoList.addEventListener('click', function(){
    todoList.classList.remove('tache')//on enlève la classe tache qui donne la couleur rouge au placeholder
    todoList.placeholder = "Veuillez saisir une tâche..."
    //remettre le placeholder initial
})
