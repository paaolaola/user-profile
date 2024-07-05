"use client";

import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

// Función para barajar al azar los usuarios
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function UserProvider({ children }) {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Juan Pablo Perez",
            profileImage: "/images/juanpablo.jpeg",
            about: '"Soy Juan Pablo, un apasionado de la tecnología y amante de los deportes extremos. Me encanta viajar y descubrir nuevas culturas."',
            list: ["Programación", "Surf", "Fotografía"],
            imglist: ["/images/programacion.jpg", "/images/surf.jpg", "/images/fotografia.jpg"],
            instagram: "@juanpiperez",
        },
        {
            id: 2,
            name: "María Inés Tapia",
            profileImage: "/images/mariaines.jpeg",
            about: "¡Hola! Soy María Inés, una diseñadora gráfica apasionada por el arte y la moda. Disfruto de los libros de ciencia ficción y soy una entusiasta de la jardinería.",
            list: ["Diseño Gráfico", "Moda", "Jardinería"],
            imglist: ["/images/diseno.jpg", "/images/moda.jpg", "/images/jardineria.jpg"],
            instagram: "@marines",
        },
        {
            id: 3,
            name: "Denise Rodriguez",
            profileImage: "/images/denise.jpeg",
            about: "¡Hola! Soy Denise, una chef profesional con un amor profundo por la cocina italiana y la repostería creativa. Me encanta correr y practicar yoga en mi tiempo libre.",
            list: ["Cocina Italiana", "Repostería", "Yoga"],
            imglist: ["/images/cocina.jpg", "/images/reposteria.jpg", "/images/yoga.jpg"],
            instagram: "@dnisrod",
        },
    ]);
    // Baraja al azar el usuario al abrir la página
    useEffect(() => {
        setUsers(shuffleArray([...users]));
    }, []);

    return <UserContext.Provider value={{ users, setUsers }}>{children}</UserContext.Provider>;
}

export function useUser() {
    return useContext(UserContext);
}
