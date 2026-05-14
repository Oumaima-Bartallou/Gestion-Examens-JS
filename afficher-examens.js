document.getElementById('btn-afficher').addEventListener('click', function() {
    const owner = document.getElementById('owner-name').value;
    const key = 'examens_' + owner;
    

    const storedData = localStorage.getItem(key);
    const displayZone = document.getElementById('display-zone');
    

    displayZone.innerHTML = '';

    if (storedData) {
        const examens = JSON.parse(storedData);

      
        examens.forEach(exam => {
            
            const card = document.createElement('div');
            card.style.border = "1px solid #ccc";
            card.style.margin = "10px";
            card.style.padding = "10px";

          
            card.innerHTML = `
                <h3>📝 ${exam.nom}</h3>
                <p><strong>Durée:</strong> ${exam.duree} min</p>
                <p><strong>Description:</strong> ${exam.description}</p>
                <h4>Questions:</h4>
            `;

           
            const listQuestions = document.createElement('ul');
            exam.questions.forEach(q => {
                const item = document.createElement('li');
                item.innerHTML = `<strong>${q.enonce}</strong> (${q.points} pts)`;
                listQuestions.appendChild(item);
            });

            card.appendChild(listQuestions);
            displayZone.appendChild(card);
        });
    } else {
        displayZone.innerHTML = "<p>Aucun examen trouvé pour ce nom.</p>";
    }
});