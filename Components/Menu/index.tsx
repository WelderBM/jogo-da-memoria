import styled from './menu.module.css'
import { useState, useEffect } from 'react'

const Menu = () => {
    const [cardsValue, setCardsValue] = useState(0)

    useEffect(()=> {
        console.log(cardsValue)
    }, [cardsValue])

    return <>
        <h1 className={styled.title}>Jogo da Memória de Pokemón</h1>
        <p className={styled.paragraph}>Escolha a quantidade de duplas em seu jogo</p>
        <input className={styled.input} type="number" placeholder='Ex.: 5'/>
    </>
}

export default Menu