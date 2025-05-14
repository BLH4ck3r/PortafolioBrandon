document.addEventListener("DOMContentLoaded", function() {
    // Efecto de glitch en el título
    const titulo = document.getElementById("glitch-title");
    setInterval(() => {
        titulo.style.textShadow = Math.random() > 0.5 ? "0 0 10px #ff0000" : "0 0 10px #00ff00";
    }, 500);

    // Lluvia de binarios en el fondo
    const canvas = document.getElementById("binaryCanvas");
    const ctx = canvas.getContext("2d");

    function ajustarCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    // Redimensionar cuando cambie el tamaño de la ventana
    window.addEventListener("resize", ajustarCanvas);
    ajustarCanvas();

    const binarySymbols = "01"; // Más simple para rendimiento en Edge
    const columns = Math.floor(canvas.width / 12);
    const positions = Array(columns).fill(0);

    function drawBinaryRain() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00ff00";
        ctx.font = "12px monospace";

        positions.forEach((y, i) => {
            const symbol = binarySymbols[Math.floor(Math.random() * binarySymbols.length)];
            ctx.fillText(symbol, i * 12, y);
            positions[i] = (y > canvas.height) ? 0 : y + 12;
        });

        setTimeout(() => requestAnimationFrame(drawBinaryRain), 50); // Ajuste para compatibilidad
    }

    drawBinaryRain();
});
