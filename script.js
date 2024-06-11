document.getElementById('calculator-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const input1 = document.getElementById('input1').value;
    const basis1 = parseInt(document.getElementById('basis1').value);
    const input2 = document.getElementById('input2').value;
    const basis2 = parseInt(document.getElementById('basis2').value);
    const operasi = document.getElementById('operasi').value;

    let bilangan1 = parseInt(input1, basis1);
    let bilangan2 = parseInt(input2, basis2);
    let hasil;
    let valid = true;

    if (isNaN(bilangan1) || isNaN(bilangan2)) {
        alert("Input tidak valid untuk basis yang diberikan.");
        valid = false;
    }

    if (valid) {
        switch (operasi) {
            case '+':
                hasil = bilangan1 + bilangan2;
                break;
            case '-':
                hasil = bilangan1 - bilangan2;
                break;
            case '*':
                hasil = bilangan1 * bilangan2;
                break;
            case '/':
                if (bilangan2 !== 0) {
                    hasil = bilangan1 / bilangan2;
                } else {
                    alert("Error: Pembagian dengan nol tidak diperbolehkan.");
                    valid = false;
                }
                break;
            default:
                alert("Operasi tidak valid.");
                valid = false;
                break;
        }
    }

    if (valid) {
        document.getElementById('result').innerHTML = `
            <p>Hasil dalam desimal: ${hasil}</p>
            <p>Hasil dalam biner: ${hasil.toString(2)}</p>
            <p>Hasil dalam oktal: ${hasil.toString(8)}</p>
            <p>Hasil dalam hexadesimal: ${hasil.toString(16).toUpperCase()}</p>
        `;
    }
});
