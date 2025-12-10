import { depositar } from "../modules/depositar.js";
import { retirarDinero } from "../modules/retirar.js";
import { mostrarSaldo } from "../modules/saldo.js";
let saldo = 0;
let operacion = "";
while (operacion !== '4') {
    operacion = prompt("Seleccione una operación: \n1. Depositar dinero \n2. Retirar dinero \n3. Consultar saldo \n4. Salir")
    switch (operacion) {
        case '1':
            depositar(saldo);
            saldo = depositar(saldo);
            break;
        case '2':
            retirarDinero(saldo);
            saldo = retirarDinero(saldo);
            break;
        case '3':
            mostrarSaldo(saldo);
            break;
        case '4':
            alert("Gracias por usar el sistema.");
            break;
        default:
            alert("Operación no válida.");
    }
}