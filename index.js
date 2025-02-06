let express = require('express');
let util = require('util');
let app = express();

app.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/plain');
    // Obtenir la date actuelle
    let currentDate = new Date();
    // Formater la date et l'heure en français
    let dateFormatted = currentDate.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    let timeFormatted = currentDate.toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Europe/Paris' });
    // Combinaison de la date et de l'heure
    let dateTimeFormatted = 'Nous sommes le ' + dateFormatted + ' et il est : ' + timeFormatted;
    res.end(util.format('%s - %s\n', dateTimeFormatted, 'Bravo votre conteneur Express fonctionne'));
});

app.listen(3333);