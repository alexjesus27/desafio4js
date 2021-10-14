const valorHelado = 3000;
let helado1 = 0;
let helado2 = 0;
let helado3 = 0;
let helado4 = 0;
let helado5 = 0;
let helado6 = 0;
let pagar = 0;

function seleccionarHelado(){
    let agregar = prompt("Desea agregar un helado: si/no");
    while(agregar != "no"){

        let saborHelado = prompt("Que sabor de helado vas a ordenar: helado1, helado2, helado3, helado4, helado5, helado6");
        switch (saborHelado){
            case "helado1":
                helado1 = helado1 + 1;
                agregar = prompt("Desea agregar otro helado: si/no");
                break;
            case "helado2":
                helado2 = helado2 + 1;
                agregar = prompt("Desea agregar otro helado: si/no");
                break;
            case "helado3":
                helado3 =helado3 + 1;
                agregar = prompt("Desea agregar otro helado: si/no");
                break;
            case "helado4":
                helado4 = helado4 + 1;
                agregar = prompt("Desea agregar otro helado: si/no");
                break;
            case "helado5":
                helado5 = helado5 + 1;
                agregar = prompt("Desea agregar otro helado: si/no");
                break;
            case "helado6":
                helado6 = helado6 + 1;
                agregar = prompt("Desea agregar otro helado: si/no");
                break;

        }
    }
}

function sumarHelados(){
    let totalHelados = helado1 + helado2 + helado3 + helado4 + helado5 + helado6;
    return totalHelados;
}

function totalPagar(){
    pagar = sumarHelados() * valorHelado;
    alert("El monto a pagar por los helados sera de: "+ pagar);

}
seleccionarHelado();
sumarHelados();
totalPagar();