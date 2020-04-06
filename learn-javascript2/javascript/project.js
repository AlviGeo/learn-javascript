const myContacts = [
    {
        id: 1,
        name: 'Alpha Avalon',
        phone: '+1 111 101010',
        email: 'alpha@avalon.org',
        favorite: true,
        rating: 9,
        tags: ['popular', 'cool']
    }, {
        id: 2,
        name: 'Betty Brave',
        phone: '+62 812 242424',
        email: 'betty@vraverian.com'
    }, {
        id: 3,
        name: 'Gamma Gacurio',
        phone: '+63 813 363636',
        email: 'gamma@gacurio.dev'
    }
]

// create contact console with method show contact, filter 
// contact and delete contact.


// show contact
console.log(myContacts[1].name);

// filter contact
const newContact = myContacts.filter(item => item.id > 2)
console.log(newContact);
console.log(newContact.length);

// delete contact
myContacts.pop()
console.log(myContacts);