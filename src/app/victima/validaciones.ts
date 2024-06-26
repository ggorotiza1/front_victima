
export function isValidCedula(cedula: string): boolean {
    if (cedula.length !== 10) {
        return false;
    }

    const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    let total = 0;

    for (let i = 0; i < 9; i++) {
        let valor = parseInt(cedula.charAt(i)) * coeficientes[i];
        if (valor > 9) {
            valor -= 9;
        }
        total += valor;
    }

    const nextTen = Math.ceil(total / 10) * 10;
    const digitoVerificador = nextTen - total;

    return digitoVerificador === parseInt(cedula.charAt(9));
}