exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('employees').insert([
        {
          usr: 'user1',
          display_name: 'User 1',
          pwd: 'pass123',
          email: 'user1@example.com',
          img_url: 'https://cats.com',
          active: false
        },
        {
          usr: 'user2',
          display_name: 'User 2',
          pwd: 'pass123',
          email: 'user2@example.com',
          img_url: 'https://cats.com',
          active: false
        },
        {
          usr: 'user3',
          display_name: 'User 3',
          pwd: 'pass123',
          email: 'user3@example.com',
          img_url: 'https://cats.com',
          active: false
        },
        {
          usr: 'user4',
          display_name: 'User 4',
          pwd: 'pass123',
          email: 'user4@example.com',
          img_url: 'https://cats.com',
          active: false
        },
        {
          usr: 'user5',
          display_name: 'User 5',
          pwd: 'pass123',
          email: 'user5@example.com',
          img_url: 'https://cats.com',
          active: false
        },
        {
          usr: 'user6',
          display_name: 'User 6',
          pwd: 'pass123',
          email: 'user6@example.com',
          img_url: 'https://cats.com',
          active: false
        },
        {
          usr: 'user7',
          display_name: 'User 7',
          pwd: 'pass123',
          email: 'user7@example.com',
          img_url: 'https://cats.com',
          active: false
        },
        {
          usr: 'user8',
          display_name: 'User 8',
          pwd: 'pass123',
          email: 'user8@example.com',
          img_url: 'https://cats.com',
          active: false
        },
        {
          usr: 'user9',
          display_name: 'User 9',
          pwd: 'pass123',
          email: 'user9@example.com',
          img_url: 'https://cats.com',
          active: false
        },
        {
          usr: 'user10',
          display_name: 'User 10',
          pwd: 'pass123',
          email: 'user10@example.com',
          img_url: 'https://cats.com',
          active: false
        },
        {
          usr: 'user11',
          display_name: 'User 11',
          pwd: 'pass123',
          email: 'user11@example.com',
          img_url: 'https://cats.com',
          active: false
        }
      ]);
    });
};
