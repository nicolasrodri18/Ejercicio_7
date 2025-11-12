export function depositar(saldo) {
    let deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"))
    if (!isNaN(deposito) && deposito > 0) {
        saldo += deposito;
        alert(`Depósito exitoso. Saldo actual: ${saldo}`);
        return saldo;
    }
    else {
        alert("Cantidad inválida.");
    }
}