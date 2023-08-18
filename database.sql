CREATE TABLE user(
    id SERIAL PRIMARY KEY,
    login VARCHAR(255),
    password VARCHAR(255),
)

CREATE TABLE doctor(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
)

CREATE TABLE transaction(
    id SERIAL PRIMARY KEY,
    debit INTEGER,
    credit INTEGER,
    comment VARCHAR(255),
    status INTEGER,
    date DATE DEFAULT CURRENT_DATE,
    doctor_id INTEGER,
    FOREIGN KEY (doctor_id) REFERENCES doctor (id)
)