var A, B, C, D, E, F, G;

function Equipo(_pais) {
    this.pais = _pais;
    this.puntos = 0;
    this.gf = 0;
    this.gc = 0
    this.grupo = A;

    function df() {
        return (gf - gc);
    }
}

function Team(_name, _team) {
    this.name = _name;
    this.team = _team;
}

//GRUPO 1
var uruguay = new Equipo("Uruguay"),
    rusia = new Equipo("Rusia"),
    arabiaSaudita = new Equipo("Arabia"),
    egipto = new Equipo("Egipto");
//GRUPO 2
var españa = new Equipo("España"),
    portugal = new Equipo("Portugal"),
    iran = new Equipo("Iran"),
    marruecos = new Equipo("Marruecos");
//GRUPO 3
var francia = new Equipo("Francia"),
    dinamarca = new Equipo("Dinamarca"),
    peru = new Equipo("Peru"),
    australia = new Equipo("Australia");
//GRUPO 4
var argentina = new Equipo("Argentina"),
    croacia = new Equipo("Croacia"),
    islandia = new Equipo("Islandia"),
    nigeria = new Equipo("Nigeria");
//GRUPO 5
var brasil = new Equipo("Brasil"),
    suiza = new Equipo("Suiza"),
    serbia = new Equipo("Serbia"),
    costaRica = new Equipo("Costa Rica");

//GRUPO 6
var suecia = new Equipo("Suecia"),
    mexico = new Equipo("Mexico"),
    coreaDelSur = new Equipo("Corea"),
    alemania = new Equipo("Alemania");
//GRUPO 7
var belgica = new Equipo("Belgica"),
    inglaterra = new Equipo("Inglaterra"),
    tunez = new Equipo("Tunez"),
    panama = new Equipo("Panama");
//GRUPO 8
var colombia = new Equipo("Colombia"),
    japon = new Equipo("Japon"),
    senegal = new Equipo("Senegal"),
    polonia = new Equipo("Polonia");

// Group = [team1, team2, team3, team4, nameGroup]
A = new Team("A", team = [uruguay, rusia, arabiaSaudita, egipto]);
B = new Team("B", team = [españa, portugal, iran, marruecos]);
C = new Team("C", team = [francia, dinamarca, peru, australia]);
D = new Team("D", team = [argentina, croacia, islandia, nigeria]);
E = new Team("E", team = [brasil, suiza, serbia, costaRica]);
F = new Team("F", team = [suecia, mexico, coreaDelSur, alemania]);
G = new Team("G", team = [belgica, inglaterra, tunez, panama]);
H = new Team("H", team = [colombia, japon, senegal, polonia]);

uruguay.grupo = A;
rusia.grupo = A;
arabiaSaudita.grupo = A;
egipto.grupo = A;

españa.grupo = B;
portugal.grupo = B;
iran.grupo = B;
marruecos.grupo = B;

francia.grupo = C;
dinamarca.grupo = C;
peru.grupo = C;
australia.grupo = C;

argentina.grupo = D;
croacia.grupo = D;
islandia.grupo = D;
nigeria.grupo = D;

brasil.grupo = E;
suiza.grupo = E;
serbia.grupo = E;
costaRica.grupo = E;

suecia.grupo = F;
mexico.grupo = F;
coreaDelSur.grupo = F;
alemania.grupo = F;

belgica.grupo = G;
inglaterra.grupo = G;
tunez.grupo = G;
panama.grupo = G;

colombia.grupo = H;
japon.grupo = H;
senegal.grupo = H;
polonia.grupo = H;

var ordenarFixture = function (a, b) {

    return b.puntos - a.puntos || b.df - a.df // || b.gf - a.gf;
}

argentina.grupo.team.sort(ordenarFixture);
console.log(A);


var sumarPuntos = function (team) {
    team.puntos += 3;
    actualizarTabla();
}

var actualizarGrupo = function (team) {
    team.grupo.team.sort(ordenarFixture);
    actualizarTabla(team.grupo);
}

var ganar = function (_equipo) {
    _equipo.puntos += 3;
    actualizarGrupo(_equipo);
}
var empatar = function (_team) {
    _team.puntos += 1;
    actualizarGrupo(_team);
}


var cargarGrupo = function (group) {
    var tabla = document.getElementById("tablaMayor");
    var elemento = document.createElement("td");
    var tabla2 = document.createElement("table");
    var tr = document.createElement("tr");
    tabla2.id = group.name;
    // CARGO LOS TEXTO BASE (GRUPO PUNTOS GF GC)
    var nPais = document.createElement("td"),
        nPuntos = document.createElement("td"),
        nGf = document.createElement("td"),
        nGc = document.createElement("td"),
        ncPais = document.createTextNode("Grupo " + group.name),
        ncPuntos = document.createTextNode("Puntos"),
        ncGf = document.createTextNode("GF"),
        ncGc = document.createTextNode("GC");

    nPais.appendChild(ncPais);
    nPuntos.appendChild(ncPuntos);
    nGf.appendChild(ncGf);
    nGc.appendChild(ncGc);

    tr.appendChild(nPais);
    tr.appendChild(nPuntos);
    tr.appendChild(nGf);
    tr.appendChild(nGc);
    tabla2.appendChild(tr);

    for (i = 0; i < 4; i++) {
        var team = group.team[i];
        var newTr = document.createElement("tr"),
            pais = document.createElement("td"),
            puntos = document.createElement("td"),
            gf = document.createElement("td"),
            gc = document.createElement("td"),
            cPais = document.createTextNode(team.pais),
            cPuntos = document.createTextNode(team.puntos),
            cGf = document.createTextNode(team.gf),
            cGc = document.createTextNode(team.gc);

        pais.appendChild(cPais);
        puntos.appendChild(cPuntos);
        gf.appendChild(cGf);
        gc.appendChild(cGc);

        newTr.appendChild(pais);
        newTr.appendChild(puntos);
        newTr.appendChild(gf);
        newTr.appendChild(gc);
        tabla2.appendChild(newTr);

    }


    elemento.appendChild(tabla2);
    tabla.appendChild(elemento);

}

var actualizarTabla = function (group) {
    var tabla2 = document.getElementById(group.name);
    tabla2.innerHTML = "";
    var tr = document.createElement("tr")
    var nPais = document.createElement("td"),
        nPuntos = document.createElement("td"),
        nGf = document.createElement("td"),
        nGc = document.createElement("td"),
        ncPais = document.createTextNode("Grupo " + group.name),
        ncPuntos = document.createTextNode("Puntos"),
        ncGf = document.createTextNode("GF"),
        ncGc = document.createTextNode("GC");

    nPais.appendChild(ncPais);
    nPuntos.appendChild(ncPuntos);
    nGf.appendChild(ncGf);
    nGc.appendChild(ncGc);

    tr.appendChild(nPais);
    tr.appendChild(nPuntos);
    tr.appendChild(nGf);
    tr.appendChild(nGc);
    tabla2.appendChild(tr);

    for (i = 0; i < 4; i++) {
        var team = group.team[i];
        var newTr = document.createElement("tr"),
            pais = document.createElement("td"),
            puntos = document.createElement("td"),
            gf = document.createElement("td"),
            gc = document.createElement("td"),
            cPais = document.createTextNode(team.pais),
            cPuntos = document.createTextNode(team.puntos),
            cGf = document.createTextNode(team.gf),
            cGc = document.createTextNode(team.gc);

        pais.appendChild(cPais);
        puntos.appendChild(cPuntos);
        gf.appendChild(cGf);
        gc.appendChild(cGc);

        newTr.appendChild(pais);
        newTr.appendChild(puntos);
        newTr.appendChild(gf);
        newTr.appendChild(gc);
        tabla2.appendChild(newTr);

    }
    // var mercedes = document.createElement("div");
    // tabla2.removeChild();
    // document.getElementById(group.name).innerHTML = ""
}

// var columnaTitulo = function () {
//     return

//     <tr style="font-weight: bold;">
//         <td>Equipo</td>
//         <td>Pt</td>
//         <td>GF</td>
//         <td>GC</td>
//     </tr>
// }

cargarGrupo(A);
cargarGrupo(B);
cargarGrupo(C);
cargarGrupo(D);
cargarGrupo(E);
cargarGrupo(F);
cargarGrupo(G);
cargarGrupo(H);