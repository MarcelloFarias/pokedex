import React from "react";
import './style.css';

const Header = ({ value, onChange }) => {
    return (
        <>
            <header>
                <img src='https://logosmarcas.net/wp-content/uploads/2020/05/Pokemon-Logo.png' alt='pokedex'/>
                <input type="text" value={value} onChange={onChange}/>
            </header>
        </>
    );
}

export default Header;