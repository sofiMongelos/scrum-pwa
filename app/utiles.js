function blockUI() {
    $.blockUI.defaults.css = {};
    $.blockUI({
        message: '<div class="preloader">' +
            '<svg class="circular" viewBox="25 25 50 50">' +
            '<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" /> </svg>' +
            '</div>'
    });
}

function unBlockUI() {
    $.unblockUI();
}

function formatear(num) {
    if (num == null) {
        return ('');
    } else {
        const separador = '.';
        num += '';
        const splitStr = num.split('.');
        let splitLeft = splitStr[0];

        const regx = /(\d+)(\d{3})/;
        while (regx.test(splitLeft)) {
            splitLeft = splitLeft.replace(regx, `$1${separador}$2`);
        }
        return splitLeft;
    }
};

function generarFechas() {
    var listFechas = [];
    var today = new Date();
    var anho = today.getFullYear();
    var mes = today.getMonth() + 1;
    for (var i = mes; i >= 1; i--) {
        var jsonFecha = {};
        jsonFecha.mes = anho.toString() + ";" + i.toString();
        jsonFecha.descripcion = getMes(i) + '-' + anho;
        listFechas.push(jsonFecha);
    }
    for (var i = 12; i >= mes; i--) {
        var jsonFecha = {};
        jsonFecha.mes = (anho - 1).toString() + ";" + i.toString();
        jsonFecha.descripcion = getMes(i) + '-' + (anho - 1);
        listFechas.push(jsonFecha);
    }
    return listFechas;
}

function getMes(mesNum) {
    if (mesNum === 1) {
        return "Enero";
    } else if (mesNum === 2) {
        return "Febrero";
    } else if (mesNum === 3) {
        return "Marzo";
    } else if (mesNum === 4) {
        return "Abril";
    } else if (mesNum === 5) {
        return "Mayo";
    } else if (mesNum === 6) {
        return "Junio";
    } else if (mesNum === 7) {
        return "Julio";
    } else if (mesNum === 8) {
        return "Agosto";
    } else if (mesNum === 9) {
        return "Septiembre";
    } else if (mesNum === 10) {
        return "Octubre";
    } else if (mesNum === 11) {
        return "Noviembre";
    } else if (mesNum === 12) {
        return "Diciembre";
    }
}

function getMesExtracto(input) {
    var month = parseInt(input.slice(5, 7));
    if (month < 10) {
        month = '0' + month;
    }
    return month;
}

function getAnhoExtracto(input) {
    var year = parseInt(input.slice(0, 4));
    return year;
}

function format(input) {
    var num = input.value.replace(/[^0-9]/g, '');
    if (!isNaN(num)) {
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        num = num.split('').reverse().join('').replace(/^[\.]/, '');
        input.value = num;
    }
}

function formatoMonto(input) {
    monto = input.replace(/\./g, '');
    return parseInt(monto);
}

function getFecha() {
    var d = new Date;
    dia = d.getDate();
    mes = d.getMonth() + 1;
    hh = d.getHours();
    mm = d.getMinutes();
    ss = d.getSeconds();
    if (dia < 10) {
        dia = '0' + dia;
    }
    if (mes < 10) {
        mes = '0' + mes;
    }
    if (hh < 10) {
        hh = '0' + hh;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    if (ss < 10) {
        ss = '0' + ss;
    }
    dformat = dia + "/" + mes + "/" + d.getFullYear() + ' ' + hh + ":" + mm + ":" + ss;
    return dformat;
}