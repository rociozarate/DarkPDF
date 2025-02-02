var _a;
(_a = document.getElementById("upload-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a, _b;
    var fileInput = document.getElementById("pdf-file");
    if ((_a = fileInput === null || fileInput === void 0 ? void 0 : fileInput.files) === null || _a === void 0 ? void 0 : _a.length) {
        var file = fileInput.files[0];
        // Muestra la barra de carga
        (_b = document.getElementById("loading-container")) === null || _b === void 0 ? void 0 : _b.style.display = "block";
        // Simula el proceso de carga (puedes reemplazarlo con la carga real del archivo)
        simulateFileUpload(file);
    }
    else {
        alert("Por favor, selecciona un archivo PDF.");
    }
});
function simulateFileUpload(file) {
    var progressBar = document.getElementById("progress-bar");
    var progress = 0;
    // Intervalo para simular la carga del archivo
    var interval = setInterval(function () {
        progress += 10;
        progressBar.style.width = "".concat(progress, "%");
        if (progress >= 100) {
            clearInterval(interval);
            processFile(file);
        }
    }, 500); // Simula la carga cada 500ms
}
function processFile(file) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var _a;
        var pdfData = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
        showPreview(pdfData);
    };
    reader.readAsDataURL(file);
}
function showPreview(pdfData) {
    var _a;
    var previewContainer = document.getElementById("preview");
    if (previewContainer) {
        previewContainer.innerHTML = "<embed src=\"".concat(pdfData, "\" width=\"100%\" height=\"500px\" type=\"application/pdf\">");
    }
    // Oculta la barra de carga después de procesar
    (_a = document.getElementById("loading-container")) === null || _a === void 0 ? void 0 : _a.style.display = "none";
}
