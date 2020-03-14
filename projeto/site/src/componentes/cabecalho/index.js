import React from 'react';

export const Cabecalho = props => (
    <header className="pb-2 mt-4 mb-2 border-bottom">
        <h2><strong>{props.titulo}</strong></h2>
        <small className="m1-1">{props.subTitulo}</small>

    </header>
)