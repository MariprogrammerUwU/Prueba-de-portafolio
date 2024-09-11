// Seleccionamos los elementos de los círculos
const circles = document.querySelectorAll('circle');
const percentages = [70, 80, 90, 90]; // Los porcentajes para cada círculo

// Función para animar cada círculo
function animateCircle(circle, percentage, duration) {
    let start = null;
    const radius = 70; // Radio del círculo
    const circumference = 2 * Math.PI * radius; // Circunferencia del círculo

    // Función que se ejecutará en cada frame
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;

        // Calcular cuánto del círculo debería estar visible según el progreso
        const progressPercentage = Math.min(progress / duration, 1); // Se asegura de que no pase del 100%
        const offset = circumference * (1 - (percentage / 100) * progressPercentage);

        circle.style.strokeDashoffset = offset;

        // Si la animación no está completa, continuamos
        if (progressPercentage < 1) {
            window.requestAnimationFrame(step);
        }
    }

    // Iniciar la animación
    window.requestAnimationFrame(step);
}

// Aplicar la animación a cada círculo
circles.forEach((circle, index) => {
    animateCircle(circle, percentages[index], 2000); // 2000 ms = 2 segundos
});







