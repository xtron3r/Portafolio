import React from "react";
import Typewriter from 'typewriter-effect';

export default function InfoMe() {
    return (
        <Typewriter
        options={{
            strings: 
            [   '<span class="text-purple-600 text-4xl font-bold">Hola👋🏻, Soy Aron</span>',
                '<span class="text-purple-600 text-4xl font-bold">Freelancer</span>',
                '<span class="text-purple-600 text-4xl font-bold">Estudiante DuocUC</span>',
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