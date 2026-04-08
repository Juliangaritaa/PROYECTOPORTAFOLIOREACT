export const portfolioData = {
    name:"Julián Felipe Angarita Alarcón",
    title:"Software Analyst and Developer",
    location:"Sogamoso, Colombia",
    email:"julian.angarita0810@gmail.com",
    github:"https://github.com/Juliangaritaa",
    bio:"",

    skills: [
        { name: "React", level: 40 },
        { name: "TypeScript", level: 30 },
        { name: "HTML/CSS", level: 20 },
        { name: "Node.js", level: 30 },
        { name: "Git", level: 60 },
        { name: "C#", level: 50 },
        { name: "Java", level: 30 },
        { name: "PHP", level: 20 },
        { name: "SQL", level: 50 }
    ],

    projects: [
        {
            title: "Mobile Application NéctarRomano",
            description: "Mobile app for managing a store's inventory, viewing menu reports with spreadsheet export, and intuitive order management for users.",
            tech: ["C#", "Maui", "JavaScript"],
            github: "https://github.com/Juliangaritaa/ProyectAppNectarRomano.git",
            features: ["Full CRUD", "Category Filters", "Responsive desing", "Dynamic cards", "Report"],
            images: [
                {
                    url: "/images/NectarRomano-1.jpg",
                    alt: "Pantalla principal de la aplicación NéctarRomano",
                    caption: "Interfaz principal con filtros"
                },
                {
                    url: "/images/NectarRomano-2.jpg",
                    alt: "Gestión de inventario",
                    caption: "Módulo de creación de productos"
                },
                {
                    url: "/images/NectarRomano-3.jpg",
                    alt: "Reportes y filtros",
                    caption: "Modulo de Actualizacion de productos"
                },
                {
                    url: "/images/NectarRomano-4.jpg",
                    alt: "Pantalla principal de la aplicación NéctarRomano",
                    caption: "Modulo de creación de categoria"
                },
                {
                    url: "/images/NectarRomano-5.jpg",
                    alt: "Gestión de inventario",
                    caption: "Módulo de pedidos, con cards intuitivas y dinamicas"
                },
                {
                    url: "/images/NectarRomano-6.jpg",
                    alt: "Reportes y filtros",
                    caption: "Sistema de reportes"
                },
                {
                    url: "/images/NectarRomano-7.jpg",
                    alt: "Reportes y filtros",
                    caption: "Sistema de reportes"
                }
            ]
        },
        
        {
            title: "Personal Finance Web Application",
            description: "Personal finance management app with JWT registration and login. Manages expenses, income, and bank accounts and cards. Featuring a modern, intuitive, and user-friendly design.",
            tech: ["React", "Node.js", "TypeScript", "Tailwind CSS", "APIs"],
            github: "https://github.com/Juliangaritaa/ProyectAppNectarRomano.git",
            features: ["Full CRUD", "Filters", "Responsive desing", "Dynamic cards", "Report"],
            images: [
                {
                    url: "/images/finanzas-personales-1.jpg",
                    alt: "Pantalla principal de la aplicación NéctarRomano",
                    caption: "Login"
                },
                {
                    url: "/images/finanzas-personales-2.jpg",
                    alt: "Pantalla principal de la aplicación NéctarRomano",
                    caption: "Tablero Financiero"
                },
                {
                    url: "/images/finanzas-personales-3.jpg",
                    alt: "Pantalla principal de la aplicación NéctarRomano",
                    caption: "Registro Transacciones de Usuario"
                },
                {
                    url: "/images/finanzas-personales-4.jpg",
                    alt: "Pantalla principal de la aplicación NéctarRomano",
                    caption: "Historial de Transacciones"
                },
                {
                    url: "/images/finanzas-personales-5.jpg",
                    alt: "Pantalla principal de la aplicación NéctarRomano",
                    caption: "Categorias de Usuario"
                },
                {
                    url: "/images/finanzas-personales-6.jpg",
                    alt: "Pantalla principal de la aplicación NéctarRomano",
                    caption: "Cuentas de Usuario"
                }
            ]
        },
        
        {
            title: "Library Administration Web Application",
            description: "Web application developed for the management of a local library, featuring a complete resource for managing books, customers, authors, and the application's superadmin. It features a responsive and professional design, with a captcha check at login for authenticated users.",
            tech: ["JAVA", "CSS", "JavaScript"],
            github: "https://github.com/Juliangaritaa/BibliotecaProyectoJAVA.git",
            features: ["Full CRUD", "Filters", "Responsive desing", "Dynamic Tables", "Captcha"],
            images: [
                {
                    url: "/images/proyecto-biblioteca-1.jpg",
                    alt: "Pantalla principal de la aplicación NéctarRomano",
                    caption: "Catalogo Principal sin logueo"
                },
                {
                    url: "/images/proyecto-biblioteca-2.jpg",
                    alt: "Pantalla principal de la aplicación NéctarRomano",
                    caption: "Catalogo Principal con logueo"
                },
                {
                    url: "/images/proyecto-biblioteca-3.jpg",
                    alt: "Pantalla principal de la aplicación NéctarRomano",
                    caption: "Prestamos de Usuario"
                },
                {
                    url: "/images/proyecto-biblioteca-4.jpg",
                    alt: "Pantalla principal de la aplicación NéctarRomano",
                    caption: "Gestion de Libros"
                },
                {
                    url: "/images/proyecto-biblioteca-5.jpg",
                    alt: "Pantalla principal de la aplicación NéctarRomano",
                    caption: "Cuentas de Usuario"
                }
            ]
        },
        {
            title: "Heladería SKAY local Web Application",
            description: "Web application developed for the management of a icecream local, featuring a complete resource for managing products, categories, sales, boxes, reports, users. It features a responsive and professional design. The application has two roles, admin and seller, each role has different permissions.",
            tech: ["React", "Tailwind", "TypeScript", "Deno", "SQL"],
            github: "https://github.com/Juliangaritaa/SISTEMA_HELADERIA_SKAY_REACT.git",
            features: ["Full CRUD", "Filters", "Responsive desing", "Dynamic Tables"],
            images: [
                {
                    url: "/images/SKAY-login.PNG",
                    alt: "Login",
                    caption: "Login"
                },
                {
                    url: "/images/SKAY-productos.PNG",
                    alt: "Products module.",
                    caption: "Products table"
                },
                {
                    url: "/images/SKAY-categorias.PNG",
                    alt: "Categories module",
                    caption: "Categories table"
                },
                {
                    url: "/images/SKAY-ventas.PNG",
                    alt: "Sales module.",
                    caption: "Sales module."
                },
                {
                    url: "/images/SKAY-caja.PNG",
                    alt: "Boxes module.",
                    caption: "A daily box opened, with a initial amount."
                },
                {
                    url: "/images/SKAY-reportes.PNG",
                    alt: "Reports with sales analytics.",
                    caption: "Reports with sales analytics by period."
                },
                {
                    url: "/images/SKAY-reportes2.PNG",
                    alt: "Reports with sales analytics.",
                    caption: "Reports with sales analytics by period."
                },
                {
                    url: "/images/SKAY-reportes3.PNG",
                    alt: "Reports with sales analytics.",
                    caption: "Reports with sales analytics by period."
                },
                {
                    url: "/images/SKAY-usuarios.PNG",
                    alt: "Users module.",
                    caption: "List all the users in a table."
                }
            ]
        }
    ],

    education: [
        {
        degree: "Bachiller Técnico",
        institution: "Politécnico Álvaro Gonzáles Santana",
        year: "2022",
        description: "Formación bachiller técnica en desarrollo tanto conocimientos como habilidades, actitudes y valores en los estudiantes, preparándolos para la vida activa y el ejercicio de la ciudadanía."
        },
        {
        degree: "Tecnólogo en Análisi y Desarrollo de Software",
        institution: "SENA CIMM",
        year: "2023",
        description: "Formación técnica en programación y desarrollo de software."
        },
    ],

    certifications: [
        { name: "Certificación en básico de derecho de Autor y derechos conexos - Dirección Nacional de Derecho de Autor.", issuer: "Plataforma Online", year: "2025" },
        { name: "JavaScript Fundamentals", issuer: "Plataforma Online", year: "2025" },
        { name: "Scrum Fundamentals Certified - SCRUMStudy Fourth Edition", issuer: "Plataforma Online", year: "2025" }
    ]
};