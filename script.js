document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("drawingCanvas");
    const ctx = canvas.getContext("2d");
    const togglePaletteButton = document.getElementById("togglePalette");
    const palette = document.getElementById("palette");
    const redSlider = document.getElementById("red");
    const greenSlider = document.getElementById("green");
    const blueSlider = document.getElementById("blue");
    const colorDisplay = document.getElementById("colorDisplay");

    canvas.width = 800;
    canvas.height = 600;

    let drawing = false;
    let currentColor = "rgb(0,0,0)";

    canvas.addEventListener("mousedown", () => { drawing = true; });
    canvas.addEventListener("mouseup", () => { drawing = false; ctx.beginPath(); });
    canvas.addEventListener("mousemove", draw);

    togglePaletteButton.addEventListener("click", () => {
        palette.classList.toggle("hidden");
        togglePaletteButton.textContent = palette.classList.contains("hidden") ? "Mostrar Paleta de Cores" : "Esconder Paleta de Cores";
    });

    redSlider.addEventListener("input", updateColor);
    greenSlider.addEventListener("input", updateColor);
    blueSlider.addEventListener("input", updateColor);

    function draw(event) {
        if (!drawing) return;

        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.strokeStyle = currentColor;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    function updateColor() {
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;
        currentColor = `rgb(${red},${green},${blue})`;
        colorDisplay.style.backgroundColor = currentColor;
    }

    updateColor();
}); 