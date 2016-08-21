
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({
          name: 'EasySpeak',
          description: 'Augmentative speech app for persons with speaking deficiencies and disabilities.',
          url: 'easy-speak.herokuapp.com/dashboard',
          github: 'github.com/ansi6622/q3-react-starter',
          image_link: 'http://media.thecelebrityauction.co/picture/c/0c/CwMdBE5KXRIWEBcRB00ZEBAVDB4KCwYFFloAGARbBAoeHBUMHhwrBQRGRVpXQUdXVUJdWlJDXURNXEJCXVBTSh0OEEYcABECOggC/FQBbChoIExFLGAMCPBUAGkwTDAYdExMHDBUXFlsCBR0dFwkXLFNQR0pAW0FZRUddQ0dLCQIC.jpg'
        }),
        knex('projects').insert({
          name: 'trender.io',
          description: 'Data visualization for sentiment analysis on tweets realtime from the twitter streaming api.',
          url: 'trendster-io.herokuapp.com',
          github: 'github.com/ansi6622/Trender',
          image_link: 'http://media.thecelebrityauction.co/picture/c/0c/CwMdBE5KXRIWEBcRB00ZEBAVDB4KCwYFFloAGARbBAoeHBUMHhwrBQRGRVpXQUdXVUJdWlJDXURNXEJCXVBTSh0OEEYcABECOggC/FQBbChoIExFLGAMCPBUAGkwTDAYdExMHDBUXFlsCBR0dFwkXLFNQR0pAW0FZRUddQ0dLCQIC.jpg'
        }),
        knex('projects').insert({
          name: 'Stocker',
          description: 'US stock trade application that uses machine learning models to predict closing prices.',
          url: 'dragongiblets.herokuapp.com',
          github: 'github.com/ansi6622/dragonjiblets',
          image_link: 'http://media.thecelebrityauction.co/picture/c/0c/CwMdBE5KXRIWEBcRB00ZEBAVDB4KCwYFFloAGARbBAoeHBUMHhwrBQRGRVpXQUdXVUJdWlJDXURNXEJCXVBTSh0OEEYcABECOggC/FQBbChoIExFLGAMCPBUAGkwTDAYdExMHDBUXFlsCBR0dFwkXLFNQR0pAW0FZRUddQ0dLCQIC.jpg'
        }),
        knex('projects').insert({
          name: 'GeoCatch',
          description: 'Geolocation app that uses the IP Lookup API to identify hacker space locations and plot server coordinates on cesium.js globe.',
          url: 'site-globe.herokuapp.com',
          github: 'github.com/ansi6622/site-globe',
          image_link: 'http://media.thecelebrityauction.co/picture/c/0c/CwMdBE5KXRIWEBcRB00ZEBAVDB4KCwYFFloAGARbBAoeHBUMHhwrBQRGRVpXQUdXVUJdWlJDXURNXEJCXVBTSh0OEEYcABECOggC/FQBbChoIExFLGAMCPBUAGkwTDAYdExMHDBUXFlsCBR0dFwkXLFNQR0pAW0FZRUddQ0dLCQIC.jpg'
        }),
      ]);
    });
};
