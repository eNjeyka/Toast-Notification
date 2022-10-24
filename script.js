const buttonError = document.getElementById("button-error");
const buttonDanger = document.getElementById("button-danger");
const buttonSuccess = document.getElementById("button-success");
const toasts = document.getElementById("toasts");

const messages = {
    success: "Success message",
    error: "Error message",
    danger: "Danger message",
}

buttonError.addEventListener('click', () => createNotification('error'))
buttonDanger.addEventListener('click', () => createNotification('danger'))
buttonSuccess.addEventListener('click', () => createNotification('success'))

function createNotification(status) {
    const notif = document.createElement('div')
    notif.classList.add('toast', `toast-${status}`)

    notif.innerText = messages[status]

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}