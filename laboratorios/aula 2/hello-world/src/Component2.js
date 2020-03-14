import React, { useEffect, useState } from "react";
import { Lista } from './Lista';

export const Component2 = _ => {

    const [nome, setNome] = useState('');
    const [categorias, setCategorias] = useState(['lista de corno', 'asd']);

    useEffect(() => {
        setTimeout(_ => setNome("matheus"), 3000)
        setTimeout(_ => setNome(''), 8000);

        return(() => {

        })
    }, [])
    const renderLista = () => {
        return (
            categorias.map((cat, index) =>
                <Lista key={index} texto={cat} />)
        )
    }
    return <div>   <h1>{nome}</h1>
        <ul>
            {renderLista()}
        </ul>
    </div>
}