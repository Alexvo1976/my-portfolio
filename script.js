/* script.js */
document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let text = document.getElementById('recommendation-text').value;
    if (text.trim() !== "") {
        let newRec = document.createElement('div');
        newRec.classList.add('recommendation');
        newRec.textContent = text;
        document.querySelector('.recommendations-container').appendChild(newRec);
        alert('Recommendation added successfully!');
        document.getElementById('recommendation-text').value = "";
    }
});
