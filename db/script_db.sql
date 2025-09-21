/*
	File title: script_db
	description: script para la creación de la base de datos y las tablas
	datetime: 20/09/2025 12:21
	autor: rodrigo
*/

CREATE DATABASE civa_db;

\connect civa_db;

CREATE TABLE marca_bus(
	marca_id SERIAL PRIMARY KEY,
	nombre VARCHAR(50)
);

CREATE TABLE bus(
	bus_id SERIAL PRIMARY KEY,
	numero_bus INTEGER NOT NULL UNIQUE,
	placa VARCHAR(20) NOT NULL UNIQUE,
	fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	caracteristica TEXT,
	marca_id INTEGER NOT NULL REFERENCES marca_bus(marca_id) ON DELETE CASCADE,
	estado BOOLEAN DEFAULT TRUE
);

-- Insertar marcas de ejemplo
INSERT INTO marca_bus (nombre) VALUES 
('Volvo'),
('Scania'),
('Fiat'),
('Mercedes-Benz'),
('Hyundai');

-- Insertar buses de ejemplo
INSERT INTO bus (numero_bus, placa, caracteristica, marca_id, estado)
VALUES 
(101, 'ABC-123', 'Bus de dos pisos, aire acondicionado', 1, TRUE),
(202, 'DEF-456', 'Bus urbano, 40 asientos', 2, FALSE),
(303, 'GHI-789', 'Bus interprovincial, baño y WiFi', 3, TRUE),
(404, 'JKL-321', 'Bus turístico, ventanas panorámicas', 4, TRUE),
(505, 'MNO-654', 'Bus escolar, cinturones de seguridad', 5, FALSE);
