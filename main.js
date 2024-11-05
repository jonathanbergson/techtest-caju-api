const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const contacts = [];

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Hello World');
});

app.post('/api/contacts', (req, res) => {
  const { avatar, firstName, lastName, twitter, notes } = req.body;
  const contact = {
    id: Math.random().toString(36).substring(2, 9),
    avatar,
    firstName,
    lastName,
    favorite: false,
    twitter,
    notes,
    createdAt: Date.now()
  };
  contacts.push(contact);
  res.status(201).send(contact);
});

app.get('/api/contacts', (req, res) => {
  const { q } = req.query;
  const filteredContacts = q
    ? contacts.filter(contact =>
        contact.firstName.toLowerCase().includes(q.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(q.toLowerCase())
      )
    : contacts;
  res.status(200).send(filteredContacts);
});

app.get('/api/contacts/:id', (req, res) => {
  const { id } = req.params;
  const contact = contacts.find(contact => contact.id === id);
  if (contact) {
    res.status(200).send(contact);
  } else {
    res.status(404).send({ message: 'Contact not found' });
  }
});

app.put('/api/contacts/:id', (req, res) => {
  const { id } = req.params;
  const { avatar, favorite, firstName, lastName, twitter, notes } = req.body;
  const contact = contacts.find(contact => contact.id === id);
  if (contact) {
    contact.avatar = avatar || contact.avatar;
    contact.favorite = typeof favorite === 'boolean' ? favorite : contact.favorite;
    contact.firstName = firstName || contact.firstName;
    contact.lastName = lastName || contact.lastName;
    contact.twitter = twitter || contact.twitter;
    contact.notes = notes || contact.notes;
    res.status(200).send(contact);
  } else {
    res.status(404).send({ message: 'Contact not found' });
  }
});

app.delete('/api/contacts/:id', (req, res) => {
  const { id } = req.params;
  const index = contacts.findIndex(contact => contact.id === id);
  if (index !== -1) {
    contacts.splice(index, 1);
    res.status(200).send({ message: 'Contact deleted' });
  } else {
    res.status(404).send({ message: 'Contact not found' });
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});