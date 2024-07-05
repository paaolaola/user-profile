"use client";

import React from "react";
import { useState } from "react";
import styles from "../../styles/ContactForm.module.css";

const ContactForm = React.forwardRef((props, ref) => {
    //Estado para manejar el nombre, email y mensaje del formulario
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    //Función para manejar el cambio de nombre en el input
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    //Función para manejar el cambio de email en el input
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    //Función para manejar el cambio de mensaje en el input
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    //Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación de campos vacíos
        if (!name || !email || !message) {
            setError("Por favor completa todos los campos.");
            return;
        }
        // Validación de email inválido
        setIsSubmitted(true);

        // Limpia el formulario después de enviar
        handleReset();
    };

    //Función para manejar el reseteo del formulario
    const handleReset = () => {
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div ref={ref} id="contact" className={styles.containerForm}>
            <div className={styles.circleBlue}>{""}</div>
            <div className={` ${styles.box} ${props.isVisible ? styles.fadeIn : ""}`}>
                <h2 className={styles.title}>CONTACTO</h2>
                {!isSubmitted ? (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input className={styles.input} type="text" id="name" name="name" value={name} placeholder="Nombre" onChange={handleNameChange} />
                        <input className={styles.input} type="email" id="email" name="email" value={email} placeholder="Email" onChange={handleEmailChange} />
                        <textarea
                            className={styles.textarea}
                            id="message"
                            name="message"
                            value={message}
                            placeholder="Mensaje"
                            onChange={handleMessageChange}
                        ></textarea>
                        {error && <p className={styles.error}>{error}</p>}
                        <button className={styles.button} type="submit">
                            Enviar
                        </button>
                    </form>
                ) : (
                    <div className={styles.successMessage}>
                        <p>¡Mensaje enviado exitosamente!</p>
                        <button className={styles.button} onClick={() => setIsSubmitted(false)}>
                            Enviar otro mensaje
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
});

export default ContactForm;
