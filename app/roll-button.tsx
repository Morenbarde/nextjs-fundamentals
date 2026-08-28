'use client';

import { useState } from "react";

export default function RollDice() {

    const [die1, setDie1] = useState(1);
    const [die2, setDie2] = useState(1);

    async function handleClick() {
        const data = await fetch('/api/get-dice/');
        const json = await data.json();

        setDie1(json.die1);
        setDie2(json.die2)
    }
    
    return <button onClick={handleClick}>{die1} {die2}</button>;
}