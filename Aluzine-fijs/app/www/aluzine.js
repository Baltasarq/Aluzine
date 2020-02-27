// Aluzine (c) 2020 Baltasarq MIT License <baltasarq@gmail.com>

/*
    generado por FI.JS@txtMap, v0.1/ v0.6 20140612
    Thu Feb 13 11:47:09 2020
    
    Aluzine v2: reescritura para fi.js en 2020.
    
    Aluzine v1: fue publicada en inform para la NanoComp4 en 2003,
                y  posteriormente pulida en 2016.
*/

ctrl.setTitle( "Aluzine" );
ctrl.setIntro( "<p>La aventura del trabajo diario de un programador...</p>\
                Trabajar hasta muy tarde parece que es el pan de cada día \
                últimamente. La empresa <b>PBCProyectos</b> está soportando \
                la mayor demanda de trabajo de los últimos meses. \
                Esta vez se trata de una aplicación de cálculo de superficies \
                que una empresa de arquitectura necesita urgentemente.\
                <br/>Y te ha tocado a tí, claro..." );
ctrl.setPic( "res/aluzine-title.jpg" );
ctrl.setAuthor( "baltasarq@gmail.com" );
ctrl.setVersion( "v2 20200229" );


// *** Cubicule ----------------------------------------------------------------

const locCubicle = ctrl.places.creaLoc(
    "Habitáculo",
    [ "puesto", "habitaculo" ],
    "En la oficina. O mejor dicho en tu parte de ella, \
     con su pequeña ${abertura lateral, sal} al resto del mundo. \
     La penumbra envuelve el pequeño habitáculo, ya que, exceptuándote a ti, \
     todos se han ido ya. ${El flexo, ex flexo}, \
     ilumina ${tu equipo, ex equipo}, cuyo suave ronroneo es ahora \
     tu única compañía.\
     Una ${estantería, ex estanteria} se sitúa por encima de tu cabeza."
);
locCubicle.pic = "res/workstation.jpg";

locCubicle.preExit = function() {
    ctrl.goto( locCorridor );
};

locCubicle.preExamine = function() {
    var toret = this.desc;
    
    if ( this.getTimesExamined() == 0 ) {
        toret = "<br/>Tienes tantas ganas de irte a casa \
                 que se te cierran los ojos. Los abres con fuerza, \
                 parpadeas un par de veces más, y tratas de fijar la vista \
                 en lo que hay a tu alrededor.</p><p>"
                + toret;
    }
    
    return toret;
};

const objLamp = ctrl.creaObj(
    "flexo",
    [ "flexo" ],
    "El flexo ilumina débilmente la ${pantalla, ex pantalla}.",
    locCubicle,
    Ent.Scenery
);

const objShelf = ctrl.creaObj(
    "estanteria",
    [ "estanteria" ],
    "Sobre la estantería ves importantes libracos: ${manuales, ex manuales}.",
    locCubicle,
    Ent.Scenery
);

const objManuals = ctrl.creaObj(
    "manuales",
    [ "manuales", "libros", "libracos" ],
    "Uno de tus libros de referencia es un ${manual de hardware, ex manual}, \
     uno de tantos recuerdos de la carrera.",
    locCubicle,
    Ent.Scenery
);

const objHardwareManual = ctrl.creaObj(
    "manual de hardware",
    [ "manual", "libro" ],
    "Sabes que ahí suelen estar todas las respuestas a tus problemas... \
    normalmente. El manual de hardware tiene recuerdos especiales para tí. \
    Tomas el volumen y echas una ojeada al glosario de términos.</p>\
    <p class='monopar'>RAM  : Lugar del ordenador donde se almacena \
    la información, en bloques de \"palabras\", de ancho fijo.\
    </p><p class='monopar'>Bit  : Las palabras están formadas por \
    un número variable de bytes, siendo actualmente \
    el ancho más actualizado el de 4 bytes. \
    Cada byte está formado siempre por 8 bits, \
    que pueden contener el valor 0 ó 1. \
    </p><p class='monopar'>ULA  : Parte del procesador central encargada \
    de realizar cálculos.\
    </p><p class='monopar'>I/O  : Entrada o salida (input/output).\
    </p><p class='monopar'>Caché: Lugar de memoria, similar a la RAM, \
    pero más rápida, que se utiliza para guardar los datos de mayor uso.\
    </p><p class='monopar'>CPU  : Unidad central de procesamiento.\
    </p><p class='monopar'>BUS  : Pistas que interconectan \
    los componentes del ordenador. \
    El bus de datos (DATA BUS), interconecta la memoria con la CPU. \
    El de control permite que se manden señales de control \
    a la RAM (p.ej., lectura/escritura) y otros componentes, como la ROM. \
    El de direcciones se utiliza única y exclusivamente \
    para gestionar direcciones de memoria. \
    Así, si la CPU necesita leer un dato en la dirección ABBFFFAA, \
    mandará ABBFFFAA por el bus de direcciones, \
    READ (leer) por el bus de control, \
    y obtendrá el valor por el bus de datos.\
    </p><p class='monopar'>DATA : Datos.\
    </p><p class='monopar'>DMA  : Dispositivo de acceso directo a memoria \
    (<i>Direct Memory Access</i>). Cuando el ordenador \
    debe leer/escribir del disco, por ejemplo, le encarga el trabajo al DMA, \
    indicándole en qué dirección de memoria debe poner/tomar los datos. \
    Cuando el chip de DMA termina, avisa a la CPU mediante \
    la activación de una línea IRQ exclusiva.\
    </p><p class='monopar'>IRQ  : Petición de interrupción (Interrupt Request).\
    </p><p class='monopar'>SHR  : Desplazamiento de bits, \
    de un byte o una palabra, a la derecha.\
    </p><p class='monopar'>SHL  : Desplazamiento de bits, \
    de un byte o una palabra, a la izquierda.\
    </p><p class='monopar'>ADD  : Sumar dos números.\
    </p><p class='monopar'>MUL  : Multiplicar dos números.\
    </p><p class='monopar'>MOV  : Carga de datos en registro o memoria.\
    </p><p class='monopar'>IN, OUT : Interfaz de entrada/salida.</span>\
    </p><p>Este manual lo conservas desde tus tiempos de estudiante. \
    Te trae gratos recuerdos de aquella época.",
    locCubicle,
    Ent.Scenery );

objHardwareManual.preExamine = function() {
    
    if ( this.getTimesExamined() == 1 ) {
        ctrl.achievements.achieved( "documented" );
    }
    
    return this.desc;
};

const objMonitor = ctrl.creaObj(
    "pantalla",
    [ "pantalla", "monitor", "lcd" ],
    "En la pantalla, tu depurador marca la línea del programa \
    que será ejecutada a continuación. La función que contiene \
    el problema es la que estás depurando ahora: \"pideDatosAlUsuario()\":\
    </p><p class='monopar'><br/>void pideDatosAlUsuario()\
    <br/>{\
    <br/>&nbsp;&nbsp;&nbsp;&nbsp;int x = pideLongitudPlano();\
    <br/>&nbsp;&nbsp;&nbsp;&nbsp;int y = pideLongitudProfundidad();\
    <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;return x * y;\
    <br/>}\
    </p><p>En el visor de variables, se lee:\
    </p><p class='monopar'>x(0x0AB7DEFF): 0</p>\
    <p class='monopar'>y(0x0AB7DFFF): 0</p>\
    <p>La barra de estado reza: \"Pulse F7 para entrar en la función\". \
    La barra marcadora está situada en: \"int x = pideLongitudPlano();\"",
    locCubicle,
    Ent.Scenery );

const objComputer = ctrl.creaObj(
    "ordenador",
    [ "equipo", "computadora" ],
    "Tu potente equipo de desarrollo, formado por: CPU, \
    ${teclado, ex teclado}, y ${pantalla, ex pantalla}.",
    locCubicle,
    Ent.Scenery );

const objKeyboard = ctrl.creaObj(
    "teclado",
    [],
    "El teclado, sí, de esos llenos de teclas.",
    locCubicle,
    Ent.Scenery );

objKeyboard.preExamine = function() {
    var toret = this.desc;
    
    if ( objMonitor.getTimesExamined() > 0 ) {
        toret += " Podrías ${pulsar F7, empuja teclado}...";
    }
    
    return toret;
};

objKeyboard.prePush = function() {
    // Empieza el viaje.
    
    ctrl.personas.changePlayer( playerAsWord );
    ctrl.goto( locExpansionBus );
};


// *** Corridor ----------------------------------------------------------------

const locCorridor = ctrl.places.creaLoc(
    "Pasillo",
    [ "pasillo" ],
    "El pasillo está envuelto en penumbra. \
    Aunque sabes que un poco más atrás está tu ${cubículo, entra}, \
    a la izquierda está el ${ascensor, ex ascensor}, \
    y la ${máquina de café, ex maquina} está ahí mismo, enfrente de ti."
);
locCorridor.pic = "res/corridor.jpg";

locCorridor.preEnter = function() {
    ctrl.goto( locCubicle );
};

locCorridor.preExamine = function() {
    var toret = this.desc;
    
    if ( playerAsHuman.travelled ) {
        toret = "Puedes (¿debes?) volver a tu habitáculo. \
                 Una curiosa atracción te hace mirar hacia atrás, \
                 hacia tu habitáculo, como si fuera la última vez... \
                 La pantalla parpadea ligeramente \
                 cuando no miras directamente hacia ella. \
                 Todo parece normal... tan normal...</p><p>"
                + toret;
    }
    
    return toret;
};

locCorridor.preExit = function() {
    var msg = "Te introduces en el ascensor.";
    
    if ( playerAsHuman.travelled ) {
        msg += " Afrontémoslo, en el estado en el que te encuentras, \
                tras tu experiencia hipersensorial, \
                no eres de mucha utilidad para la empresa.";
    } else {
        msg += " ¿Para qué seguir haciendo horas extras? Mejor descansar.";
    }
    
    endGame( msg );
};

const objCoffeeMachine = ctrl.creaObj(
    "máquina de café",
    [ "maquina" ],
    "Es una máquina de café sencilla. \
    Es de la empresa, por lo que no es necesario utilizar monedas, \
    y tiene un ${botón, enciende maquina} que hace que salga café.",
    locCorridor,
    Ent.Scenery
);
objCoffeeMachine.numCoffees = 3;
objCoffeeMachine.preStart = function() {
    ++this.numCoffees;

    var toret = "Coges un vasito del dispensador y pulsas el botón... \
                 el deseado líquido marrón oscuro comienza a destilarse \
                 hasta convertirse en un delgado chorro derramándose \
                 por el fondo del vaso. Pronto el chorro se debilita \
                 y se convierte en unas gotitas que terminan de surgir \
                 al punto.</p><p>Bebes con ansia esperando que del \
                 líquido surja la claridad mental. Ahora a esperar el efecto. \
                 </p><p>Llevas ya " + this.numCoffees + " cafés.";
    
    if ( this.numCoffees > 9 ) {
        toret += "</p><p>Repentinamente, notas un sudor frío... \
                  y algo más: palpitaciones. El corazón te va a mil. \
                  Te asustas muchísimo... ¿qué está pasando?";
        
        endGame( "Con los dedos templorosos, \
                  pulsas el botón de la planta baja." );
        
        ctrl.achievements.achieved( "panic" );
    }
    else
    if ( this.numCoffees > 6 ) {
        toret += "</p><p>Repentinamente, empiezan a temblarte las manos... \
                  mala combinación: ansiedad por exceso de café por un lado, \
                  y sigues igual de atontado por el cansancio, por el otro...";
        ctrl.achievements.achieved( "anxiety" );
    }
    else {
        ctrl.achievements.achieved( "coffeeholic" );
    }
    
    return toret;
};

const objElevator = ctrl.creaObj(
    "ascensor",
    [ "ascensor" ],
    "El ascensor está ${abierto, sal} en esta planta.",
    locCorridor,
    Ent.Scenery
);


// *** Expansion Bus -----------------------------------------------------------
const locExpansionBus = ctrl.places.creaLoc(
    "Bus de expansión",
    [ "bus", "expansion" ],
    "Viajas a toda velocidad por el Bus de Expansión, en una especie \
     de ${carrito, sal}." );
locExpansionBus.pic = "res/expansion_bus.jpg";

locExpansionBus.preExamine = function() {
    var toret = this.desc;
    
    if ( this.getTimesExamined() == 0 ) {
        toret = "De repente, todo cambia... \
                 Un destello cegador parece provenir de la pantalla... \
                 El destello de luz te envuelve, bañando \
                 las paredes del habitáculo, cegándote... \
                 y lo siguiente que puedes percibir es como si viajaras \
                 a gran velocidad...<br/>...la pantalla aparece de nuevo \
                 frente a tí, apróximándose vertiginosamente...\
                 <br/>...los puntos de la pantalla aparecen cada vez más \
                 definidos...<br/>...cada vez más separados...\
                 </p><p>Una transformación que no puedes describir \
                 tiene lugar en ti... ${te notas extraño, ex yo}... \
                 ¡plano!</p><p>"
            + toret;
    }
    
    return toret;
};

locExpansionBus.preExit = function() {
    ctrl.goto( locDma );
    return "El carrito te ha depositado en el destino...";
};


// *** RAM ---------------------------------------------------------------------

const locRam = ctrl.places.creaLoc(
    "RAM",
    [ "ram" ],
    "El lugar en el que ahora reposas... \
    sí, reposar sería la mejor forma de decirlo... \
    es una ${gran caja, ex caja} llamada \"RAM\" en la que existen \
    un montón de divisiones. ${Tú, ex yo} ocupas \
    ${una de ellas, ex recipiente}. \
    Desde aquí puedes ver las ${líneas de IRQ, ex irq}, \
    además de un ${cartel, ex cartel} y una ${etiqueta, ex etiqueta}."
);
locRam.pic = "res/ram.jpg";
locRam.needsExitPreparation = true;

locRam.preExamine = function() {
    var toret = this.desc;
    
    if ( this.getTimesExamined() == 0 ) {
        this.objs.push( objRecipients );
    }
    
    if ( this.needsExitPreparation ) {
        this.prepareExit();
        this.needsExitPreparation = false;
        
        toret = "El viaje termina en una gran estructura...</p><p>"
                + toret;
    }
    
    return toret;
};

locRam.prepareExit = function() {
    ctrl.setAlarm( 6, function() {
        locRam.needsExitPreparation = true;
        locBus.target = locCache;
        ctrl.goto( locBus );
        ctrl.print( "De repente, te das cuenta de que la línea de IRQ \
                     que estaba activa... se ha apagado..." );
    });
};

const objCaja = ctrl.creaObj(
    "caja",
    [ "caja" ],
    "Tiene un montón de divisiones, donde hay otras \"cosas\" igualitas a ti.",
    locRam,
    Ent.Scenery
);

const objCartel = ctrl.creaObj(
    "cartel",
    [ "cartel" ],
    "El cartel indica: \"bank 3BF\". Debajo de él hay varias etiquetas. \
    Una de ellas está justamente enfrente a tí.",
    locRam,
    Ent.Scenery
);

const objEtiqueta = ctrl.creaObj(
    "etiqueta",
    [ "etiqueta" ],
    "Hay varias, secuenciales, cada una con su número, en hexadecimal. \
     La que está enfrente de ti, reza: #0AB7DEFF",
    locRam,
    Ent.Scenery
);

const objIrq = ctrl.creaObj(
    "irq",
    [ "irq" ],
    "Hay varias líneas de IRQ, cada una etiquetada con su número.",
    locRam,
    Ent.Scenery
);

objIrq.preExamine = function() {
    var toret = this.desc;
    
    if ( ctrl.places.getCurrentLoc() != locCache ) {
        toret += " Una de ellas está activada.";
    }
    
    return toret;
};


// *** DMA2 --------------------------------------------------------------------

const locDma2 = ctrl.places.creaLoc(
    "DMA2",
    [ "dma2" ],
    "Te encuentras en un lugar extraño llamado \"DMA\", \
    aunque... un momento... ¡ya has estado aquí antes! \
    ...pero no en esta parte... ...es como una especie de túnel, \
    en el que puedes ver un ${destello de luz al final, sal}."
);
locDma2.pic = "res/dma.jpg";

locDma2.preExit = function() { 
    ctrl.goto( locBusExpansion2 );
};


// *** Bus de expansión 2 ------------------------------------------------------

const locBusExpansion2 = ctrl.places.creaLoc(
    "DMA2",
    [ "dma2" ],
    "Algo te empuja hacia el exterior... la luz va haciéndose más amplia \
    y brillante...</p><p>Te ves envuelto en la luz... una luz cegadora, \
    que te empuja y parece trasladarte, a algún lugar... \
    ...a una velocidad asombrosa ...notas el vértigo en tu estómago ...</p><p>\
    Notas un cambio en ti...</p><p>Ahora, ya no te mueves...</p><p>...</p><p>\
    Todo está oscuro. Estás desorientado. ¿Dónde estás ahora?</p><p>\
    Sin embargo, notas ahora todos tus miembros. ¡Vuelven a estar en su sitio!\
    </p><p>Repentinamente, convulsivamente, \
    aspiras una gran bocanada de aire, \
    como si no lo hubieras hecho por minutos...</p><p>\
    Te encuentras doblado en una situación que te resulta extraña...</p><p>\
    Instintivamente ... levantas la cabeza. \
    Y te das cuenta de que no veías nada \
    porque tenías la cara entre los brazos.</p><p>\
    Estás en el habitáculo. Todo vuelve a su sitio. \
    Todo está en su sitio, sí. \
    La pantalla, el teclado, el equipo, el flexo... todo normal.</p><p>\
    Tu respiración se normaliza, paulatinamente. Poco a poco... \
    tu cabeza empieza a funcionar.</p><p>Intentas buscar una explicación.\
    Debes haberte quedado dormido... Todo ha sido un sueño... ${¿No?, sal}"
);
locBusExpansion2.pic = "res/expansion_bus.jpg";

locBusExpansion2.preExit = function() { 
    ctrl.achievements.achieved( "adventurer" );
    ctrl.personas.changePlayer( playerAsHuman );
    playerAsHuman.travelled = true;
    ctrl.goto( locCubicle );
};

// *** ULA -------------------------------------------------------------------

function killedByULA()
{
    endGame( "La ULA es otra gran caja, pero que no te sitúa en una división \
              como en las otras, sino que estás en una cinta transportadora \
              que avanza rápidamente hacia... ¡Oh no...! ¡Unas ruedas \
              de sierra, martillos... es horrible, ¡horrible!</p><p>\
              La maquinaria te corta y te estira a voluntad... \
              el dolor es insoportable...</p><p>\
              ...</p><p>\
              Al día siguiente, encuentran tu cuerpo apoyado en la mesa, \
              con la cabeza reposando entre los brazos. \
              \"<i>Agotamiento extremo, que provocó un ataque al corazón</i>\", \
              dirá la autopsia...",
            "res/ula.jpg" );
}


// *** Cache -------------------------------------------------------------------

const locCache = ctrl.places.creaLoc(
    "Caché",
    [ "cache", "buffer" ],
    "Estás en otra gran caja, como la anterior, pero, en este caso, \
    no hay etiquetas, sino indicadores, que cada vez que se encienden, \
    provocan la salida de los otros como tú, tal y como ves constantemente \
    a tu alrededor. Hay un avisador, con las siglas \"CPU\" marcadas en blanco \
    en su parte superior. Es como un gran marcador, en el centro de esta caja, \
    que cambia, vertiginosa, contínuamente, y según puedes ver, \
    cada vez que cambia salen otros como tú de sus plazas hacia el DATA BUS. \
    No puedes saber cuál es su destino, pero supones que será distinto \
    para cada una de las operaciones.</p><p>Desde aquí puedes ver \
    ${las líneas de IRQ, ex irq}. También hay un ${indicador, ex indicador} \
    y ${un avisador, ex avisador}."
);
locCache.opcode = 0;
locCache.pic = "res/cache.jpg";

locCache.preExamine = function() {
    if ( this.getTimesExamined() == 0 ) {
        this.objs.push( objIrq );
    }
};

locCache.exitToUla = function() {
    killedByULA();
};

locCache.busTo = function(x) {
    locBus.target = x; ctrl.goto( locBus );
};

locCache.opcodes = [
    [ "SHL", locCache.exitToUla ],
    [ "SHR", locCache.exitToUla ],
    [ "IN", function() { locCache.busTo( locDma2 ); } ],
    [ "OUT", function() { locCache.busTo( locDma2 ); } ],
    [ "ADD", locCache.exitToUla ],
    [ "MUL", locCache.exitToUla ],
    [ "MOV", function() { ctrl.achievements.achieved( "moved_to_ram" );
                          locCache.busTo( locRam ); } ],
];

locCache.getCurrentOpcode = function() {
    return this.opcodes[ this.opcode ][ 0 ];
};

locCache.getExitProcessByCurrentOpcode = function() {
    return this.opcodes[ this.opcode ][ 1 ];
};

const objAvisador = ctrl.creaObj(
    "avisador",
    [ "avisador" ],
    "El avisador parece marcar contínuamente las operaciones de la CPU. \
    Cada vez que te fijas en él, ya no marca lo que marcaba antes...",
    locCache,
    Ent.Scenery
);

objAvisador.preExamine = function() {
    var toret = this.desc;
    
    locCache.opcode = ( locCache.opcode + 1 ) % locCache.opcodes.length;
    toret += " Ahora mismo indica: " + locCache.getCurrentOpcode();
    
    return toret;
};

const objIndicador = ctrl.creaObj(
    "indicador",
    [ "indicador" ],
    "Los indicadores son como bombillas, que, cuando se encienden, \
    provocan la salida de las otras \"cosas\" de sus plazas. \
    Tú tienes el tuyo. Sientes que, de alguna forma, directamente, \
    podrías ${activarlo, enciende indicador}.",
    locCache,
    Ent.Scenery
);

objIndicador.preStart = function() {
    const exitProcess = locCache.getExitProcessByCurrentOpcode();
    
    if ( exitProcess == null ) {
        const msg = "no exit process for opcode: "
                    + locCache.getCurrentOpcode();
                        
        ctrl.showError( msg );
        throw msg;
    }
    
    exitProcess();
    return "";
};

// *** DMA ---------------------------------------------------------------------

const locDma = ctrl.places.creaLoc(
    "DMA",
    [ "dma" ],
    "Este extraño lugar llamado \"DMA\" es como una especie de túnel, \
    en el que puedes ver un destello de luz al final. \
    A cada uno de los lados, cientos de ${recipientes, ex recipientes} \
    donde reposan otros como ${tú, ex yo}."
);
locDma.pic = "res/dma.jpg";

locDma.preExamine = function() {
    var toret = this.desc;
    
    if ( this.getTimesExamined() == 0 ) {
        toret = "Desaceleras lentamente, mientras los borrones a tu alrededor \
                 se transforman en formas definidas...</p><p>"
                + toret;
        
        ctrl.setAlarm( 3, function() {
            locBus.target = locRam;
            ctrl.goto( locBus );            
        });
    }
    
    return toret;
};

const objRecipients = ctrl.creaObj(
    "recipientes",
    [ "recipiente" ],
    "Cajas con divisiones...",
    locDma,
    Ent.Scenery );

// *** BUS ---------------------------------------------------------------------

const locBus = ctrl.places.creaLoc(
    "BUS",
    [],
    "Un brazo robotizado con una espátula \
     en su final te recoge... \
     para colocarte en una especie de ${carrito, sal}, \
     encima de un carril llamado DATA BUS.</p><p>\
     El carrito corre por el BUS, a una velocidad espantosa, \
     que, sorprendentemente, no te da miedo...</p><p>\
     Mientras te desplazas por el BUS, \
     puedes ver una línea roja que se activa, \
     con el indicador \"${IRQ, ex irq}\"." );
locBus.pic = "res/bus.jpg";
locBus.target = null;

locBus.preExamine = function() {
    if ( this.getTimesExamined() == 0 ) {
        this.objs.push( objIrq );
    }
};

locBus.preExit = function() {
    ctrl.goto( this.target );
    return "El carrito te ha depositado en el destino...";
};


// *** Ending ------------------------------------------------------------------
function amusing()
{
    return "<b>Aluzine</b> es una aventura escrita en un par de tardes, \
            para participar urgentemente en la NanoComp 4 (2003). \
            Posteriormente la pulí en 2016, y ahora la tienes aquí como \
            ficción interactiva, un modo de interacción más adecuado. \
            Como curiosidad, quizás te preguntarás \
            qué significan las siglas PBC ... bueno, \
            es un término acuñado en la universidad, que significa \
            \"Pu... Becario de los Coj...\". Encantador, ¿no?.\
            <br/><br/>Mándame tus comentarios a: <i>baltasarq@gmail.com</i>.";
}

const htmlRestartAmusingEnding = "<p align='right'>\
                         <a href='javascript: location.reload();'>\
                         <i>Comenzar de nuevo</i></a>.<br/>\
                         <i><a href='#' onClick=\"javascript: \
                         document.getElementById('pAmenity').\
                         style.display='block'; return false\">\
                         Ver curiosidades</a>.</i></p>\
                         <p id='pAmenity' align='right' style='display: none'>"
                         + amusing() + "</p>";
                         
const htmlRestartEnding = "<p align='right'>\
                         <a href='javascript: location.reload();'>\
                         <i>Comenzar de nuevo</i></a>.";
                         
function endGame(msg, pic)
{
    const dvCmds = document.getElementById( "dvCmds" );
    
    if ( dvCmds != null ) {
        dvCmds.style.display = "none";
    }
    
    if ( arguments.length < 2 ) {
        pic = "res/elevator.jpg";
    }

    if ( arguments.length < 1 ) {
        msg = "Tu viaje ha llegado a su fin...";
    }
    
    msg += "<p>Logros:<br/>" + ctrl.logros.completadosComoTexto() + "</p>";
    
    if ( playerAsHuman.travelled ) {
        msg += "<br/>" + htmlRestartAmusingEnding;
    } else {
        msg += "<br/>" + htmlRestartEnding;
    }
    
    ctrl.endGame( msg, pic );
}


// *** Player =============================================================== 

const playerAsHuman = ctrl.personas.creaPersona(
    "Juan",
    [ "pbc", "programador" ],
    "Estás hecho un asco, necesitas una ducha y un buen sueñecito.",
    locCubicle );
playerAsHuman.travelled = false;

const playerAsWord = ctrl.personas.creaPersona(
    "Juan",
    [ "word", "dato", "data" ],
    "Tienes una forma alargada, rectangular... indescriptible. \
     Eso sí, dividido en 32 partes iguales.",
    ctrl.places.limbo );


// *** Achievements =========================================================

ctrl.achievements.add( "documented",
                       "Documentado (leiste el manual)." );

ctrl.achievements.add( "adventurer",
                       "Aventurero (hiciste el viaje)." );

ctrl.achievements.add( "moved_to_ram",
                       "RAM (volviste a la RAM)." );

ctrl.achievements.add( "coffeeholic",
                       "Adicto al café (bebiste al menos un café más)." );

ctrl.achievements.add( "anxiety",
                       "Ansioso (tanto café te puso nervioso)." );

ctrl.achievements.add( "panic",
                       "Pánico (bebiste demasiado café)." );

// *** Mood =================================================================

const tiredMsgList = new MsgList(
    [ "<i>Estoy deseando terminar para irme a casa.</i>",
        "<i>Se me cierran los ojos... pero debo terminar el trabajo.</i>",
        "<i>¡Proyecto puñetero!</i>",
        "<i>Ayyyy... qué cansadito estoy... ¡y qué poquito me quejo!</i>",
        "<i>Mmmm... estar ahora en camita... qué maravilla...</i>",
        "<i>No veo la hora de agarrar la cama.</i>",
        "<i>Yo aquí de pringao, solito, como siempre...</i>",
        "<i>¿Podría echar una cabezadita en el pasillo?</i>",
        "<i>Cuando acabe este proyecto, voy a dormir dos días enteros...</i>",
        "<i>¡Necesito unas vacaciones!</i>",
        "<i>Estoy que me caigo.</i>" ],
    true );

const scaredMsgList = new MsgList(
    [ "<i>¿Sucedería en la realidad?</i>",
        "<i>¿Habrá pasado de verdad?</i>",
        "<i>Fue un sueño... me quedé dormido delante de la pantalla... \
         y soñé... qué digo... ¡tuve una pesadilla!</i>",
        "<i>Mejor que me vaya. En estas condiciones no doy más de mí.</i>",
        "<i>Tuvo que ser un sueño... no pudo ser otra cosa...</i>",
        "<i>La verdad es que fue de lo más realista...</i>",
        "<i>Un momento... ¿Pulsé F7 o soñé que pulsé F7?</i>",
        "<i>Pulse o no pulsé F7... debería reflejarse en pantalla \
         si lo hice... estoy muy confuso...</i>",
        "<i>En fin... tampoco sé si todo esto tiene mucha importancia... \
         sólo fue un sueño, ¿no?</i>",
        "<i>Es como aquella película, TRON. \
         Una película para informáticos.</i>" ],
    true );

ctrl.addDaemon( "mood",
                  function() {
                    const player = ctrl.personas.getPlayer();  
                      
                    if ( player === playerAsHuman
                      && ctrl.getTurns() % 3 == 0 ) {
                        if ( playerAsHuman.travelled ) {
                            ctrl.print( scaredMsgList.nextMsg() );
                        } else {
                            ctrl.print( tiredMsgList.nextMsg() );
                        }
                    }
                  } );


// *** Boot ================================================================= 

ctrl.places.setStart( locCubicle );
ctrl.personas.changePlayer( playerAsHuman );
