import { useState, useEffect } from "react";
import "./Fetch1.css";

function Fetch1() {
    const [joke, setJoke] = useState([]);

    const nextJoke = () => {
        setJoke([]);
        const url =
            "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10";
        const call = fetch(url);
        call
            .then((datos) => datos.json())
            .then((object) => {
                object.jokes.map((chistes) => {
                    setJoke((e) => [
                        ...e,
                        <div key={chistes.id} className="joke__container">
                            <p className="joke__pregunta">{chistes.setup}</p>
                            <p className="joke__respuesta">{chistes.delivery}</p>
                        </div>,
                    ]);
                });
            });
    };

    useEffect(() => {
        const url =
            "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10";
        const call = fetch(url);
        call
            .then((datos) => datos.json())
            .then((object) => {
                object.jokes.map((chistes) => {
                    setJoke((e) => [
                        ...e,
                        <div key={chistes.id} className="joke__container">
                            <p className="joke__pregunta">{chistes.setup}</p>
                            <p className="joke__respuesta">{chistes.delivery}</p>
                        </div>,
                    ]);
                });
            });
    }, []);

    return (
        <>
        <section className="joke__section">
            {joke}
            <button onClick={nextJoke} className="joke__btn">Siguiente</button>
        </section>
        </>
    );
}

export default Fetch1;
