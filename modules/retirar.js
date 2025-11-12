export function retirarDinero(saldo) {
    let retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));
    if (!isNaN(retiro) && retiro > 0 && retiro <= saldo) {
        saldo -= retiro;
        alert(`Retiro exitoso. Saldo actual: ${saldo}`);
        return saldo;
    } 
    else {
        alert("Cantidad inválida o saldo insuficiente.");
    }
}