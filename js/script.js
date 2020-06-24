$(document).ready(
  function(){

    // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome,
    // cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

    // Creazione oggetto di uno studente
    var studente = {
      "nome": 'Daniele',
      "cognome": 'Detommaso',
      "eta": 24
    }

    // Stampa a schermo dello studente
    for (var variable in studente) {
      console.log(studente[variable]);
    }

    // Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e
    // stampare per ognuno nome e cognome
    // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo
    // oggetto studente inserendo nell’ordine: nome, cognome e età.

    // Inserimento nuovo studente da tastiera
    var nomeInput = prompt('Inserisci il nome:');
    var cognomeInput = prompt('Inserisci il cognome:');
    var etaInput = parseInt(prompt("Inserisci l'etá:"));

    // Creazione oggetto di array studenti
    var studenti = {
      "nome": ['Daniele','Angelo','Miriam',nomeInput],
      "cognome": ['Detommaso','Riviello','Agatiello',cognomeInput],
      "eta": [24,24,21,etaInput]
    }

    // Implementazione Handlebars
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);

    // Inserimento di numero studenti in una variabile
    var numeroStudenti = studenti.nome.length;

    // Ciclo che comprende tutti gli studenti
    for (var i = 0; i < numeroStudenti; i++) {
      // Stampa a schermo dei dati studente
      console.log('Nome:' + studenti.nome[i] + ' Cognome:' + studenti.cognome[i] + ' Eta:' + studenti.eta[i]);
      // Inserimento valori nel template
      var context = {
        classe: 'red',
        indice: i + 1,
        nome: studenti.nome[i],
        cognome: studenti.cognome[i],
        eta: studenti.eta[i]
      };
      var html = template(context);

      // Inserimento del template nell'html
      $('.container').append(html);
    }

});
