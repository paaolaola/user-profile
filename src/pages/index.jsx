"use client";

import { useRef, useState, useEffect } from "react";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import List from "../components/List/List";
import ContactForm from "../components/ContactForm/ContactForm";
import { UserProvider } from "../context/UserContext";

export default function Home() {
    //Se crean referencias para cada sección
    const aboutRef = useRef(null);
    const listRef = useRef(null);
    const contactRef = useRef(null);

    //Se crean estados para saber si la sección está visible
    const [aboutVisible, setAboutVisible] = useState(false);
    const [listVisible, setListVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);

    //Se crea un observer para saber si la sección está visible
    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    switch (entry.target) {
                        case aboutRef.current:
                            setAboutVisible(true);
                            setListVisible(false);
                            setContactVisible(false);

                            break;
                        case listRef.current:
                            setAboutVisible(false);
                            setListVisible(true);
                            setContactVisible(false);

                            break;
                        case contactRef.current:
                            setAboutVisible(false);
                            setListVisible(false);
                            setContactVisible(true);

                            break;
                        default:
                            break;
                    }
                }
            });
        };

        //Se crea un observer para cada sección
        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

        //Se observa cada sección
        if (aboutRef.current) observer.observe(aboutRef.current);
        if (listRef.current) observer.observe(listRef.current);
        if (contactRef.current) observer.observe(contactRef.current);

        return () => {
            //Se deja de observar cada sección
            if (aboutRef.current) observer.unobserve(aboutRef.current);
            if (listRef.current) observer.unobserve(listRef.current);
            if (contactRef.current) observer.unobserve(contactRef.current);
        };
    }, []);

    return (
        <UserProvider>
            <Header aboutRef={aboutRef} listRef={listRef} contactRef={contactRef} />
            <About ref={aboutRef} isVisible={aboutVisible} />
            <List ref={listRef} isVisible={listVisible} />
            <ContactForm ref={contactRef} isVisible={contactVisible} />
        </UserProvider>
    );
}
