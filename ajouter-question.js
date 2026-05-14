document.getElementById('add-proposition').addEventListener('click', () => {
    const container = document.createElement('div');
    container.style.marginBottom = "10px";

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'is-correct';

    const inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.placeholder = 'Texte de la proposition';
    inputText.required = true;
    inputText.className = 'proposition-input'; 

    container.appendChild(checkbox);
    container.appendChild(inputText);

    document.getElementById('propositions').appendChild(container);
});

document.getElementById('form-question').addEventListener('submit', function(e) {
    e.preventDefault();

    const ownerName = document.getElementById('owner-name').value;
    const examName = document.getElementById('exam-name').value;
    const enonce = document.getElementById('enonce').value;
    const dureeQ = document.getElementById('duree-q').value;
    const pointsQ = document.getElementById('points').value;

    const props = [];
    document.querySelectorAll('.proposition-input').forEach(input => {
        props.push(input.value);
    });

    if (props.length === 0) {
        alert("Veuillez ajouter au moins une proposition !");
        return;
    }

    let examens = JSON.parse(localStorage.getItem('examens')) || [];
    let monExamen = examens.find(ex => ex.nom === examName && ex.proprietaire === ownerName);

    if (monExamen) {
        const nouvelleQuestion = {
            enonce: enonce,
            propositions: props,
            duree: dureeQ,
            points: pointsQ
        };
        
        if (!monExamen.questions) {
            monExamen.questions = [];
        }
        monExamen.questions.push(nouvelleQuestion);

        localStorage.setItem('examens', JSON.stringify(examens));
        
        alert("Question ajoutée avec succès !");
        this.reset();
        document.getElementById('propositions').innerHTML = '';
    } else {
        alert("Erreur : Aucun examen trouvé !");
    }
});