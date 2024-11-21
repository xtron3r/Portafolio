import React from "react";
import Typewriter from 'typewriter-effect';

export default function InfoMe() {
    return (
        <Typewriter
        className="text-4xl font-bold text-green-500"
        options={{
            strings: 
            [   '<span class="text-purple-600 text-4xl">Hola👋🏻, Soy Aron</span>',
                '<span class="text-purple-600 text-4xl">Freelancer</span>',
                '<span class="text-purple-600 text-4xl">Estudiante DuocUC</span>',
            ],
            loop: true,
            delay: 100,
            autoStart: true,
            showCursor: true,
            cursorBlink: true,
            deleteSpeed:80,
        }}/> 
    )
}