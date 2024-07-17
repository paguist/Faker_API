const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

class Usuario {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Empresa {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.name();
        this.address = {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        };
    }
}

app.get('/api/users/new', (req, res) => {
    const newUser = new Usuario();
    res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
    const newCompany = new Empresa();
    res.json(newCompany);
});

app.get('/api/user/company', (req, res) => {
    const newUser = new Usuario();
    const newCompany = new Empresa();
    res.json({ user: newUser, company: newCompany });
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

