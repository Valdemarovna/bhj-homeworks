let timer = document.getElementById('timer')
setInterval(() => { if (timer.textContent > 0) { timer.textContent = Number(timer.textContent - 1) } else { alert('Вы победили в конкурсе!'); clearInterval(1); } }, 500)
