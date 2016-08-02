
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({
          name: 'EasySpeak',
          description: 'Augmentative speech app for persons with disabilities/difficulties speaking',
          url: 'easy-speak.herokuapp.com/dashboard',
          github: 'github.com/ansi6622/q3-react-starter',
          image_link: 'http://media.thecelebrityauction.co/picture/c/0c/CwMdBE5KXRIWEBcRB00ZEBAVDB4KCwYFFloAGARbBAoeHBUMHhwrBQRGRVpXQUdXVUJdWlJDXURNXEJCXVBTSh0OEEYcABECOggC/FQBbChoIExFLGAMCPBUAGkwTDAYdExMHDBUXFlsCBR0dFwkXLFNQR0pAW0FZRUddQ0dLCQIC.jpg'
        }),
      ]);
    });
};
