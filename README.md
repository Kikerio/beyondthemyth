SUPSI 2026  
Corso d’interaction design, CV429.01  
Docenti: A. Gysin, G. Profeta  

Progetto 1: La conquista dello spazio

# Beyond the Myth — Editorial Archive
Autore: Michelle Chicherio \
[Beyond the Myth](https://kikerio.github.io/beyondthemyth/)


## Introduzione e tema
Sviluppato in occasione del 70° anniversario della NASA, "Beyond the Myth" è un archivio editoriale interattivo dedicato all'esplorazione dei paradigmi cosmologici — i miti, i modelli e le misurazioni — che hanno definito la comprensione umana del cosmo nel corso della storia. Il progetto affronta il tema della conquista dello spazio non come un evento puramente contemporaneo, ma come l'apice di un lungo percorso antropologico e scientifico. Attraverso una mappatura rigorosa, la piattaforma traccia la transizione cruciale dall'osservazione mistico-astronomica dei primi sacerdoti e filosofi dell'antichità fino alle frontiere della fisica quantistica e delle sonde spaziali. L'obiettivo centrale è decostruire l'antico mito celeste attraverso la lente della scienza moderna, mostrando come l'evoluzione degli strumenti matematici e ottici abbia permesso all'umanità di correggere i propri falsi miti e comprendere la reale natura dell'universo.


## Riferimenti progettuali
Il progetto affonda le sue radici concettuali ed estetiche nel contrasto tra la tradizione dei grandi archivi cartacei e la fluidità delle interfacce digitali contemporanee. Il principale riferimento tipografico e visivo è il contrasto tra l'autorevolezza storica del *Times New Roman* (utilizzato per la componente narrativa e d'archivio) e la precisione geometrica del font *Geist* (scelto per la componente strutturale dell'interfaccia UI). Dal punto di vista metodologico, la classificazione sistematica dei contenuti si ispira alla pulizia e al rigore geometrico dei manuali di Bruno Munari ed Enzo Mari, dove la complessità informativa viene ridotta a elementi strutturali essenziali e razionali. La struttura tecnica dei filtri incrociati riprende invece i modelli di data journalism dei moderni atlanti digitali (come le produzioni dello studio *Accurat* o della testata *The Pudding*), in cui l'utente non subisce una narrazione passiva ma esplora attivamente un ecosistema di dati strutturati.


## Design dell’interfaccia e modalità di interazione
L'interfaccia si sviluppa come un atlante spaziale notturno dal layout minimale ed elegante. La navigazione è rigorosamente scandita dall'uso di linee divisorie nette (*filetti*) che separano visivamente l'header, la sezione hero, il pannello di controllo e le sezioni di chiusura, definendo zone visive chiare ed eliminando ogni elemento decorativo superfluo. In linea con la direzione artistica del progetto, tutti i testi dell'header, i tag dei progetti e le etichette dei filtri sono formattati interamente in lettere maiuscole (*UPPERCASE*) ma configurati con un peso tipografico leggero (*lower font weight*), garantendo un aspetto estremamente tecnico e accademico.

L'interazione si articola su three livelli principali:
1. **Effetto Immersivo Hero:** Nella parte superiore della pagina, l'area di benvenuto è animata dall'effetto dinamico `#starshine`, che evoca visivamente la luce stellare e introduce l'utente nel mood dell'esplorazione cosmica.
2. **Control Board e Filtri Sfaccettati:** Il cuore dell'interazione risiede nel pannello di ricerca avanzata. L'utente ha a disposizione una barra di ricerca testuale in tempo reale per parole chiave e concetti, affiancata da un menu a comparsa contenente sei filtri selettivi tridimensionali (Historical Era, Cultural Tradition, Cosmic Scale, World Structure, Cosmic Dynamics, Methodology). 
3. **Feedback Visivo Reattivo:** I tag filtri e le *tag pills* attive sono volutamente sovradimensionati rispetto allo standard per facilitare il puntamento e la leggibilità. Al passaggio del mouse (hover) o al momento della selezione attiva, la singola pillola reagisce invertendo istantaneamente il proprio colore (passando da testo chiaro su fondo scuro a testo scuro su fondo chiaro), offrendo una risposta immediata all'azione dell'utente.

Completano l'esperienza una navigazione interna per approfondire le fonti in formato APA all'interno di un overlay modale responsivo e un sistema di visualizzazione immagini in modalità *Lightbox* per l'analisi dei dettagli iconografici storici.

<video src="assets/imgs/beyond_the_myth_video.mov" width="100%" controls></video>
![Anteprima Interfaccia Home](assets/imgs/01.png)
![Dettagli](assets/imgs/05.png)
![Dettagli](assets/imgs/02.png)
![Dettagli](assets/imgs/04.png)


## Tecnologia usata
La piattaforma è costruita utilizzando architetture web standard e pulite. La struttura portante e semantica è definita in HTML5, supportata da fogli di stile CSS3 strutturati tramite variabili globali per la gestione della palette cromatica e delle spaziature. La logica di programmazione per la gestione dell'archivio, il motore di ricerca testuale e il sistema di filtraggio combinatorio sfaccettato è interamente implementata in JavaScript, sfruttando la libreria *jQuery 3.7.1* per ottimizzare la manipolazione del DOM, l'ascolto degli eventi di input e le animazioni dei pannelli a comparsa (dropdown). L'intero database dei paradigmi e delle fonti storiche è modellato nativamente tramite un array strutturato di oggetti JSON, consentendo operazioni rapide di filtraggio logico e rendering dinamico all'interno della pagina.

```JavaScript
// CONFIGURAZIONE APPLICATIVA DEL TARGET E DEL CONTESTO D'USO
const APP_SETTINGS = {
    contextMode: "DESKTOP_KIOSK",       // Ottimizzato per postazioni fisse e consultazione desktop museale
    targetAudience: "STUDENTS_RESEARCHERS", // Target primario: Studenti, ricercatori e appassionati NASA
    enableKioskTimeout: true,           // Reset automatico dei filtri se l'utente abbandona la postazione
    idleTimeLimit: 60000                // 1 minuto di inattività prima del reset dell'archivio
};

$(document).ready(function() {
    // Inizializzazione dei parametri basati sul Contesto d'Uso
    if (APP_SETTINGS.contextMode === "DESKTOP_KIOSK") {
        console.log(`Piattaforma inizializzata per il target: ${APP_SETTINGS.targetAudience}`);
        setupKioskInteractivity();
    }

    // Gestione degli eventi sui menu di selezione dei filtri sfaccettati
    $('.cb-select').on('change', function() {
        executeArchiveFilter();
        resetKioskTimer(); // Monitora l'attività del target nel contesto museo
    });

    // Ascolto in tempo reale della barra di ricerca testuale
    $('#cb-search').on('input', function() {
        executeArchiveFilter();
        resetKioskTimer();
    });

    // Logica di inversione colore reattiva per le pillole dei filtri (tag pills) al click/hover
    $(document).on('mouseenter', '.tag-pill, .cb-select', function() {
        $(this).addClass('is-inverted');
    }).on('mouseleave', '.tag-pill, .cb-select', function() {
        if (!$(this).hasClass('is-active')) {
            $(this).removeClass('is-inverted');
        }
    });
});

// Funzione di utilità per gestire il comportamento dell'interfaccia nel contesto d'uso espositivo
let idleTimer;
function resetKioskTimer() {
    if (!APP_SETTINGS.enableKioskTimeout) return;
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function() {
        // Ripristina l'archivio per il prossimo utente del target
        $('#cb-clear-all').trigger('click');
        $('#cb-search').val('');
        console.log("Interfaccia resettata per inattività nel contesto installazione.");
    }, APP_SETTINGS.idleTimeLimit);
}
```


## Target e contesto d’uso
Il target primario è costituito da studenti universitari, ricercatori, designer e appassionati di astronomia e divulgazione scientifica. Il progetto si rivolge a utenti con un forte interesse per la storia delle idee e per l'evoluzione tecnologica dei sistemi di esplorazione spaziale. Il contesto d'uso nativo è la consultazione web su dispositivi desktop, configurandosi sia come piattaforma di approfondimento didattico individuale, sia come possibile interfaccia interattiva da installare su postazioni e chioschi digitali fisse all'interno di musei della scienza, planetari o mostre temporanee dedicate alle celebrazioni storiche della NASA.

