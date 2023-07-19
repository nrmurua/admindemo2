import mongoose from "mongoose"

export const dataUser = [
        {
          "nombre": "Juan Pérez",
          "correo": "juanperez@gmail.com",
          "contrasena": "password",
          "ciudad": "Santiago",
          "region": "Metropolitana",
          "cargo": "Gerente",
          "telefono": "+56912345678",
          "rol": "admin",
          "empresa": "644b60fb26316cd7bf24014c"
        },
        {
          "nombre": "María González",
          "correo": "mariagonzalez@gmail.com",
          "contrasena": "password",
          "ciudad": "Santiago",
          "region": "Metropolitana",
          "cargo": "Analista",
          "telefono": "+56912345679",
          "rol": "usuario",
          "empresa": "644b60fb26316cd7bf24014c"
        },
        {
          "nombre": "Pedro Flores",
          "correo": "pedroflores@hotmail.com",
          "contrasena": "password",
          "ciudad": "Concepción",
          "region": "Bío Bío",
          "cargo": "Gerente",
          "telefono": "+56912345680",
          "rol": "admin",
          "empresa": "644b60fb26316cd7bf24014f"
        },
        {
          "nombre": "Ana Martínez",
          "correo": "anamartinez@hotmail.com",
          "contrasena": "password",
          "ciudad": "Concepción",
          "region": "Bío Bío",
          "cargo": "Analista",
          "telefono": "+56912345681",
          "rol": "usuario",
          "empresa": "644b60fb26316cd7bf24014f"
        },
        {
          "nombre": "Felipe González",
          "correo": "felipeg@gmail.com",
          "contrasena": "password",
          "ciudad": "Valparaíso",
          "region": "Valparaíso",
          "cargo": "Gerente",
          "telefono": "+56912345682",
          "rol": "admin",
          "empresa": "644b60fb26316cd7bf240152"
        },
        {
          "nombre": "Carla Sánchez",
          "correo": "carlasanchez@gmail.com",
          "contrasena": "password",
          "ciudad": "Valparaíso",
          "region": "Valparaíso",
          "cargo": "Analista",
          "telefono": "+56912345683",
          "rol": "usuario",
          "empresa": "644b60fb26316cd7bf240152"
        },
        {
          "nombre": "Jorge Fernández",
          "correo": "jorgef@hotmail.com",
          "contrasena": "password",
          "ciudad": "Antofagasta",
          "region": "Antofagasta",
          "cargo": "Gerente",
          "telefono": "+56912345684",
          "rol": "admin",
          "empresa": "644b60fb26316cd7bf240152"
        },
]

export const dataBodegas = 
[
    {
      "nombre": "Bodega 1",
      "capacidad": 1000,
      "ocupado": 200,
      "empresa": "644b60fb26316cd7bf240152",
    },
    {
      "nombre": "Bodega 2",
      "capacidad": 500,
      "ocupado": 250,
      "empresa": "644b60fb26316cd7bf240152",
    },
    {
      "nombre": "Bodega 3",
      "capacidad": 750,
      "ocupado": 400,
      "empresa": "644b60fb26316cd7bf240152",
    },
    {
      "nombre": "Bodega 4",
      "capacidad": 1500,
      "ocupado": 750,
      "empresa": "644b60fb26316cd7bf240152",
    },
    {
      "nombre": "Bodega 5",
      "capacidad": 1000,
      "ocupado": 400,
      "empresa": "644b60fb26316cd7bf24014f",
    },
    {
      "nombre": "Bodega 6",
      "capacidad": 500,
      "ocupado": 200,
      "empresa": "644b60fb26316cd7bf24014f",
    },
    {
      "nombre": "Bodega 7",
      "capacidad": 750,
      "ocupado": 300,
      "empresa": "644b60fb26316cd7bf24014f",
    },
    {
      "nombre": "Bodega 8",
      "capacidad": 1000,
      "ocupado": 600,
      "empresa": "644b60fb26316cd7bf24014f",
    },
    {
      "nombre": "Bodega 9",
      "capacidad": 500,
      "ocupado": 250,
      "empresa": "644b60fb26316cd7bf24014f",
    },
    {
      "nombre": "Bodega 10",
      "capacidad": 750,
      "ocupado": 400,
      "empresa": "644b60fb26316cd7bf24014c",
    }
  ]
  

export const dataEmpresa = [  
    {    
        "nombre": "Empresa 1",    
        "rut": "11111111-1",    
        "direccion": "Av. Ejemplo 123",    
        "ciudad": "Santiago",    
        "region": "Metropolitana"  
    },  
    {    
        "nombre": "Empresa 2",    
        "rut": "22222222-2",    
        "direccion": "Calle Ejemplo 456",    
        "ciudad": "Valparaíso",    
        "region": "Valparaíso"  
    }, 
    {    
        "nombre": "Empresa 3",    
        "rut": "33333333-3",    
        "direccion": "Pasaje Ejemplo 789",    
        "ciudad": "Concepción",    
        "region": "Bío Bío"  
    },  
    {    
        "nombre": "Empresa 4",    
        "rut": "44444444-4",    
        "direccion": "Av. Ejemplo 987",    
        "ciudad": "Arica",    
        "region": "Arica y Parinacota" 
    },  
    {    
        "nombre": "Empresa 5",    
        "rut": "55555555-5",    
        "direccion": "Calle Ejemplo 654",    
        "ciudad": "La Serena",    
        "region": "Coquimbo" 
    },  
    {    
        "nombre": "Empresa 6",    
        "rut": "66666666-6",    
        "direccion": "Pasaje Ejemplo 321",    
        "ciudad": "Temuco",    
        "region": "La Araucanía"  
    },  
    {    
        "nombre": "Empresa 7",    
        "rut": "77777777-7",    
        "direccion": "Av. Ejemplo 456",    
        "ciudad": "Antofagasta",    
        "region": "Antofagasta"  
    },  
    {    
        "nombre": "Empresa 8",    
        "rut": "88888888-8",    
        "direccion": "Calle Ejemplo 789",    
        "ciudad": "Viña del Mar",    
        "region": "Valparaíso"  
    },  
    {    
        nombre: "Empresa 9",    
        rut: "99999999-9",    
        direccion: "Pasaje Ejemplo 246",    
        ciudad: "Puerto Montt",    
        region: "Los Lagos"  
    },  
    {    
        nombre: "Empresa 10",    
        rut: "10101010-0",    
        direccion: "Av. Ejemplo 135",    
        ciudad: "Iquique",    
        region: "Tarapacá"  }]


export const dataCliente = 
[
    {
      "nombre": "Juan Perez",
      "rut": "12.345.678-9",
      "correo": "juanperez@example.com",
      "direccion": "Av. Libertador 123",
      "ciudad": "Santiago",
      "region": "Metropolitana",
      "telefono": "+56 9 1234 5678"
    },
    {
      "nombre": "María Rodriguez",
      "rut": "98.765.432-1",
      "correo": "maria.rodriguez@example.com",
      "direccion": "Calle Los Olmos 456",
      "ciudad": "Valparaiso",
      "region": "Valparaiso",
      "telefono": "+56 9 8765 4321"
    },
    {
      "nombre": "Pedro Ramirez",
      "rut": "11.223.344-5",
      "correo": "pedro.ramirez@example.com",
      "direccion": "Av. Providencia 789",
      "ciudad": "Santiago",
      "region": "Metropolitana",
      "telefono": "+56 9 4444 5555"
    },
    {
      "nombre": "Carla González",
      "rut": "44.332.221-8",
      "correo": "carla.gonzalez@example.com",
      "direccion": "Calle Los Pinos 456",
      "ciudad": "Concepcion",
      "region": "Bio-Bio",
      "telefono": "+56 9 1111 2222"
    },
    {
      "nombre": "Andres Maldonado",
      "rut": "77.665.544-3",
      "correo": "andres.maldonado@example.com",
      "direccion": "Av. Argentina 1234",
      "ciudad": "Antofagasta",
      "region": "Antofagasta",
      "telefono": "+56 9 7777 8888"
    },
]
  

export const dataProducto = [
    
  {
    "nombre": "Troza",
    "espesor": 0,
    "ancho": 0,
    "largo": 250,
    "diametro": 30,
    "tipo": "madera",
    "valor": 100
  },
  {
    "nombre": "Madera1",
    "espesor": 10,
    "ancho": 20,
    "largo": 200,
    "diametro": 0,
    "tipo": "lateral",
    "valor": 50
  },
  {
    "nombre": "Madera2",
    "espesor": 15,
    "ancho": 30,
    "largo": 250,
    "diametro": 0,
    "tipo": "lateral",
    "valor": 70
  },
  {
    "nombre": "Troza",
    "espesor": 0,
    "ancho": 0,
    "largo": 300,
    "diametro": 35,
    "tipo": "madera",
    "valor": 120
  },
  {
    "nombre": "Madera1",
    "espesor": 12,
    "ancho": 25,
    "largo": 220,
    "diametro": 0,
    "tipo": "lateral",
    "valor": 55
  },
  {
    "nombre": "Madera2",
    "espesor": 18,
    "ancho": 35,
    "largo": 260,
    "diametro": 0,
    "tipo": "central",
    "valor": 75
  },
  {
    "nombre": "Troza",
    "espesor": 0,
    "ancho": 0,
    "largo": 270,
    "diametro": 40,
    "tipo": "lateral",
    "valor": 130
  },
  {
    "nombre": "Madera1",
    "espesor": 8,
    "ancho": 15,
    "largo": 180,
    "diametro": 0,
    "tipo": "central",
    "valor": 40
  },
  {
    "nombre": "Madera2",
    "espesor": 20,
    "ancho": 40,
    "largo": 280,
    "diametro": 0,
    "tipo": "madera",
    "valor": 80
  },
  {
    "nombre": "Troza",
    "espesor": 0,
    "ancho": 0,
    "largo": 290,
    "diametro": 45,
    "tipo": "madera",
    "valor": 140
  },
  {
    "nombre": "Madera1",
    "espesor": 9,
    "ancho": 18,
    "largo": 190,
    "diametro": 0,
    "tipo": "madera",
    "valor": 45
  },
  {
    "nombre": "Madera2",
    "espesor": 16,
    "ancho": 32,
    "largo": 240,
    "diametro": 0,
    "tipo": "madera",
    "valor": 72
  }
]

export const dataPedidos = [
    
]

export const dataMovimientos = [
    {
        _id: "987987987987987987987987",
        bodega_procedencia: "000000000000000000000001",
        bodega_destino: "000000000000000000000002",
        fecha: "2023-02-15",
        productos: [
            {
                id_producto: "5555555555eeeeeeeeee1236",
                cantidad: 400,
            },
            {
                id_producto: "5555555555eeeeeeeeee1235",
                cantidad: 20,
            },
        ]
    },
    {
        _id: "987987987987987987987989",
        bodega_procedencia: "000000000000000000000001",
        bodega_destino: "000000000000000000000002",
        fecha: "2023-02-15",
        productos: [
            {
                id_producto: "5555555555eeeeeeeeee1236",
                cantidad: 400,
            },
            {
                id_producto: "5555555555eeeeeeeeee1235",
                cantidad: 20,
            },
        ]
    },
    {
        _id: "987987987987987987987988",
        bodega_procedencia: "000000000000000000000001",
        bodega_destino: "000000000000000000000002",
        fecha: "2023-02-15",
        productos: [
            {
                id_producto: "5555555555eeeeeeeeee1236",
                cantidad: 400,
            },
            {
                id_producto: "5555555555eeeeeeeeee1235",
                cantidad: 20,
            },
        ]
    }
]
