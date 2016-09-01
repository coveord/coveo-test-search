(function() {
  var dict = {
      "Unknown": "Sconosciuto",
      "And": "E",
      "Authenticating": "Autenticazione di {0}...",
      "Clear": "Cancella {0}",
      "CompleteQuery": "Query completa",
      "Exclude": "Escludi {0}",
      "EnterTag": "Aggiungi tag",
      "Next": "Avanti",
      "Last": "Ultima",
      "Link": "Link",
      "Or": "O",
      "Previous": "Indietro",
      "QueryDidntMatchAnyDocuments": "La query non ha trovato documenti corrispondenti.",
      "QueryException": "La query contiene un errore: {0}.",
      "Me": "Io",
      "Remove": "Rimuovi",
      "Search": "Cerca",
      "SearchFor": "Cerca {0}",
      "ShareQuery": "Condividi query",
      "Preferences": "Preferenze",
      "LinkOpeningSettings": "Impostazioni apertura link",
      "Reauthenticate": "Riautentica {0}",
      "ResultsFilteringExpression": "Espressioni filtro risultati",
      "FiltersInYourPreferences": "Filtri nelle preferenze",
      "Create": "Crea",
      "SearchIn": "Cerca in {0}",
      "Seconds": "tra {0} second<sn>o</sn><pl>i</pl>",
      "ShowingResultsOf": "Risultat<sn>o</sn><pl>i</pl> {0}<pl>-{1}</pl> di {2}",
      "SwitchTo": "Passa a {0}",
      "Unexclude": "Annulla Escludi {0}",
      "ClearAllFilters": "Cancella tutti i filtri",
      "SkipLogin": "Ometti login",
      "LoginInProgress": "Login in corso, attendere...",
      "Login": "Login",
      "GetStarted": "Inizio",
      "More": "Altro",
      "Less": "Meno",
      "Settings": "Impostazioni",
      "Score": "Punteggio",
      "ScoreDescription": "Il punteggio viene calcolato sia in base al numero di occorrenze che alla posizione nella serie di risultati.",
      "Occurrences": "Occorrenze",
      "OccurrencesDescription": "Ordina in base al numero di occorrenze, con i valori più alti visualizzati per primi.",
      "Label": "Etichetta",
      "Of": "di",
      "LabelDescription": "Ordina alfabeticamente in base ai valori dei campi.",
      "Value": "Valore",
      "ValueDescription": "Ordina in base ai valori del primo campo calcolato.",
      "AlphaAscending": "Valore ascendente",
      "AlphaDescending": "Valore discendente",
      "ChiSquare": "Chi quadro",
      "Nosort": "Nessun ordinamento",
      "RelativeFrequency": "Frequenza relativa",
      "RelativeFrequencyDescription": "Ordina in base alla frequenza relativa dei valori. I valori meno comuni vengono visualizzati per primi.",
      "DateDistribution": "Distribuzione date",
      "Custom": "Personalizzato",
      "CustomDescription": "Ordina in base a un ordinamento personalizzato",
      "ComputedField": "Campo calcolato",
      "Ascending": "Ascendente",
      "Descending": "Discendente",
      "noResultFor": "Nessun risultato per {0}",
      "autoCorrectedQueryTo": "Query corretta automaticamente con {0}",
      "didYouMean": "Si intendeva forse: {0}",
      "SuggestedResults": "Risultati suggeriti",
      "SuggestedQueries": "Query suggerite",
      "MostRelevantItems": "Elementi più rilevanti:",
      "AllItems": "Tutti gli elementi:",
      "ShowLess": "Mostra meno",
      "ShowMore": "Mostra altro",
      "HideFacet": "Nascondi facet",
      "ShowFacet": "Mostra facet",
      "AndOthers": "e {0} altr<sn>o</sn><pl>i</pl>",
      "Others": "{0} altr<sn>o</sn><pl>i</pl>",
      "MostRelevantPosts": "Post più rilevanti:",
      "CompleteThread": "Thread completo:",
      "ShowCompleteThread": "Mostra thread completo",
      "ShowOnlyTopMatchingPosts": "Mostra solo migliori corrispondenze di post",
      "MostRelevantReplies": "Risposte più rilevanti:",
      "AllConversation": "Intera conversazione:",
      "ShowAllConversation": "Mostra intera conversazione",
      "ShowAllReplies": "Mostra tutte le risposte",
      "ShowOnlyMostRelevantReplies": "Mostra solo risposte più rilevanti",
      "Close": "Chiudi",
      "Open": "Apri",
      "OpenInOutlookWhenPossible": "Apri in Outlook (se possibile)",
      "AlwaysOpenInNewWindow": "Apri sempre risultati in nuova finestra",
      "QuickView": "Anteprima",
      "ErrorReport": "Rapporto errori",
      "OopsError": "Attenzione! Problema del server.",
      "ProblemPersists": "Se il problema persiste, contattare l'amministratore.",
      "GoBack": "Indietro",
      "Reset": "Reimposta",
      "Retry": "Riprova",
      "MoreInfo": "Maggiori informazioni",
      "Username": "Nome utente",
      "Password": "Password",
      "PostedBy": "Pubblicato da",
      "CannotConnect": "Impossibile collegarsi all'indirizzo del server.",
      "BadUserPass": "La password non è associata al nome utente.",
      "PleaseEnterYourCredentials": "Immettere le credenziali personali per {0}.",
      "PleaseEnterYourSearchPage": "Immettere l'URL della pagina di ricerca",
      "Collapse": "Comprimi",
      "Collapsable": "Comprimibile",
      "Expand": "Espandi",
      "Today": "Oggi",
      "Yesterday": "Ieri",
      "Tomorrow": "Domani",
      "Duration": "Durata: {0}",
      "IndexDuration": "Durata indice: {0}",
      "ProxyDuration": "Durata proxy: {0}",
      "ClientDuration": "Durata client: {0}",
      "Unavailable": "Non disponibile",
      "Reply": "Rispondi",
      "ReplyAll": "Rispondi a tutti",
      "Forward": "Inoltra",
      "From": "Da",
      "Caption": "Didascalia",
      "Expression": "Espressione",
      "Tab": "Scheda",
      "Tabs": "Schede",
      "EnterExpressionName": "Immettere nome espressione",
      "EnterExpressionToFilterWith": "Immettere espressione per filtrare risultati con",
      "SelectTab": "Seleziona scheda",
      "SelectAll": "Seleziona tutto",
      "PageUrl": "Cerca in pagina URL",
      "ErrorSavingToDevice": "Errore di salvataggio delle informazioni sul dispositivo",
      "ErrorReadingFromDevice": "Errore di lettura delle informazioni dal dispositivo",
      "AppIntro": "Rivolgersi a uno specialista del prodotto in grado di rispondere a domande relative a Coveo e di assistere nella scelta della soluzione Coveo più adatta. In alternativa, provare una demo dal vivo,",
      "TryDemo": "Prova demo",
      "ContactUs": "Contattaci",
      "NewToCoveo": "Utente nuovo di Coveo?",
      "LetUsHelpGetStarted": "Siamo qui per fornire assistenza",
      "LikesThis": "A {0} piace questo.",
      "CannotConnectSearchPage": "Impossibile collegarsi alla pagina di ricerca",
      "AreYouSureDeleteFilter": "Eliminare il filtro {0} con l'espressione {1}",
      "OnlineHelp": "Aiuto online",
      "Done": "Fatto",
      "SaveFacetState": "Salva questo stato di facet",
      "ClearFacetState": "Cancella stato facet",
      "DisplayingTheOnlyMessage": "Visualizzazione dell'unico messaggio in questa conversazione",
      "NoNetworkConnection": "Nessuna connessione di rete",
      "UnknownConnection": "Connessione sconosciuta",
      "EthernetConnection": "Connessione Ethernet",
      "WiFi": "Connessione WiFi",
      "CELL": "Connessione cellulare",
      "CELL_2G": "Connessione cellulare 2G",
      "CELL_3G": "Connessione cellulare 3G",
      "CELL_4G": "Connessione cellulare 4G",
      "Relevance": "Rilevanza",
      "Date": "Data",
      "Amount": "Quantità",
      "QueryExceptionNoException": "Nessuna eccezione",
      "QueryExceptionInvalidSyntax": "Sintassi non valida",
      "QueryExceptionInvalidCustomField": "Campo personalizzato non valido",
      "QueryExceptionInvalidDate": "Data non valida",
      "QueryExceptionInvalidExactPhrase": "Frase esatta non valida",
      "QueryExceptionInvalidDateOp": "Operatore data non valido",
      "QueryExceptionInvalidNear": "Operatore NEAR non valido",
      "QueryExceptionInvalidWeightedNear": "NEAR ponderato non valido",
      "QueryExceptionInvalidTerm": "Termine non valido",
      "QueryExceptionTooManyTerms": "Troppi termini",
      "QueryExceptionWildcardTooGeneral": "Carattere jolly troppo generico",
      "QueryExceptionInvalidSortField": "Campo ordinamento non valido",
      "QueryExceptionInvalidSmallStringOp": "Operatore stringa piccola non valido",
      "QueryExceptionRequestedResultsMax": "Limite massimo risultati richiesti",
      "QueryExceptionAggregatedMirrorDead": "La copia mirror aggregata è offline",
      "QueryExceptionAggregatedMirrorQueryTimeOut": "Timeout di query di copie mirror aggregate",
      "QueryExceptionAggregatedMirrorInvalidBuildNumber": "Numero build non valido di copia mirror aggregata",
      "QueryExceptionAggregatedMirrorCannotConnect": "Impossibile collegare copia mirror aggregata",
      "QueryExceptionNotEnoughLeadingCharsWildcard": "Carattere jolly con caratteri iniziali insufficienti",
      "QueryExceptionSecurityInverterNotFound": "Invertitore sicurezza non trovato",
      "QueryExceptionSecurityInverterAccessDenied": "Accesso a invertitore sicurezza negato",
      "QueryExceptionAggregatedMirrorCannotImpersonate": "Impossibile rappresentare copia mirror aggregata",
      "QueryExceptionUnexpected": "Imprevisto",
      "QueryExceptionAccessDenied": "Accesso negato",
      "QueryExceptionSuperUserTokenInvalid": "Token superutente non valido",
      "QueryExceptionSuperUserTokenExpired": "Token superutente scaduto",
      "QueryExceptionLicenseQueriesExpired": "Licenza query scaduta",
      "QueryExceptionLicenseSuperUserTokenNotSupported": "Token superutente licenze non supportato",
      "QueryExceptionInvalidSession": "Sessione non valida",
      "QueryExceptionInvalidDocument": "Documento non valido",
      "QueryExceptionSearchDisabled": "Ricerca disattivata",
      "FileType": "Tipo di file",
      "ShowAttachment": "Mostra allegato",
      "OnFeed": "su feed di {0}.",
      "Author": "Autore",
      "NoTitle": "Nessun titolo",
      "CurrentSelections": "Selezioni correnti",
      "AllContent": "Intero contenuto",
      "CancelLastAction": "Annulla ultima azione",
      "SearchTips": "Suggerimenti per ricerca",
      "CheckSpelling": "Verificare l'ortografia delle parole chiave.",
      "TryUsingFewerKeywords": "Provare a usare meno parole chiave o parole chiave diverse e più generiche.",
      "SelectFewerFilters": "Selezionare meno filtri per ampliare la ricerca.",
  }
  var locales = String["locales"] || (String["locales"] = {});
  locales["it"] = _.extend({}, locales["it"], dict);
  String["toLocaleString"].call(this, { "it": dict });
  String["locale"] = "it";
  String["defaultLocale"] = "en";
})();
/*
 * Globalize Culture it
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "it", "default", {
	name: "it",
	englishName: "Italian",
	nativeName: "italiano",
	language: "it",
	numberFormat: {
		",": ".",
		".": ",",
		"NaN": "Non un numero reale",
		negativeInfinity: "-Infinito",
		positiveInfinity: "+Infinito",
		percent: {
			pattern: ["-n%","n%"],
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-$ n","$ n"],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],
				namesAbbr: ["dom","lun","mar","mer","gio","ven","sab"],
				namesShort: ["do","lu","ma","me","gi","ve","sa"]
			},
			months: {
				names: ["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre",""],
				namesAbbr: ["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"d.C.","start":null,"offset":0}],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd d MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd d MMMM yyyy HH:mm",
				F: "dddd d MMMM yyyy HH:mm:ss",
				M: "dd MMMM",
				Y: "MMMM yyyy"
			}
		}
	}
});

}( this ));
