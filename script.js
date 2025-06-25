document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const largura = parseFloat(document.getElementById('largura').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(largura) || isNaN(altura) || largura <= 0 || altura <= 0) {
        document.getElementById('resultado').textContent = "Por favor, insira valores válidos!";
        return;
    }

    const area = largura * altura;
    document.getElementById('resultado').textContent = `Área do retângulo: ${area.toFixed(2)} cm²`;
});
