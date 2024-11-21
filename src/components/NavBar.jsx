import React from 'react';
export default function Navbar(){ 

    return (
        <nav className="">
            <ul className="flex justify-center gap-4 py-4 text-white">
                <li><a href="#">Proyectos</a></li>
                <li><a href="#">Experiencia</a></li>
                <li><a href="#">Sobre Mí</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    );
}