import React, { useState, useEffect } from "react";

function Fetch2() {
    const [user, setUser] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const url = "https://randomuser.me/api/?results=10";

        const call = fetch(url);
        call
            .then((data) => data.json())

            .then((object) => setUser(object.results));
    }, []);

    const handleOnClick = () => {
        if (currentIndex < user.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };
    console.log(currentIndex)
    return (
        <>
            {user.length > 0 && (
                <div>
                    <h3>Usuario Actual</h3>
                    <p>Nombre: {user[currentIndex].name.first}</p>
                    <p>Apellido: {user[currentIndex].name.last}</p>
                    <p>Email: {user[currentIndex].email}</p>
                </div>
            )}
            <button onClick={handleOnClick}>Agregar usuario</button>
        </>
    );
}

export default Fetch2;
