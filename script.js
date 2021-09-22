const completeTasks = document.querySelector('.completeTask');
const timeDisplay = document.querySelector('#time');
const task = document.querySelector('#tarefa');
const startTimer = document.querySelector('.start');
const tempoInput = document.querySelector('#tempoInput');

tempoInput.focus();

let tasksList = [];

/* Função timer que decrementa de acordo com o input do usuário, injeta o tempo no HTML e renderiza as tarefas concluídas quando o tempo se esgota */
function runTimer(duration, display) {
    var timer = duration, minutes, seconds;
    let intervalo = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        display.innerHTML = `<span>${minutes}:${seconds}</span>`;
        
        if (--timer < 0) {
            clearInterval(intervalo);
            display.innerHTML = '<span>00:00</span>';
            tasksList.push(task.value);
            completeTasks.innerHTML = '';
            renderizarTasks();
            task.value = '';
            tempoInput.value = '';
            tempoInput.focus();
            alert('Tire uma pausa!');
        }
    }, 1000);
}

/* Botão de início do timer */
startTimer.addEventListener('click', () => {
    tempoCronometro = tempoInput.value;
    tempoSegundos = tempoCronometro * 60;
    runTimer(tempoSegundos, timeDisplay);
})

function renderizarTasks() {
    tasksList.forEach(elemento => {
        completeTasks.innerHTML += `<p>${elemento}</p>`;
    })
}