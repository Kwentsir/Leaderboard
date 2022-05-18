import './style.css';

const scores = [
    {name: 'Joseph', score: 55}
];

const scoreList = document.getElementById('scores-list');
scoreList.innerHTML = scores.map((score) => `<li>${score.name}: ${score.score} </li>`).join('');