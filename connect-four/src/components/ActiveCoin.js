import React, { useEffect, useState } from 'react';

const ActiveCoin = ({turn, dropped, setDropped, setTurn}) => {

    const [column, setColumn] = useState(5)
    const [row, setRow] = useState()

    const handleKeyDown = e => {
        if(e.keyCode === 37){
            if(column > 0){
                setColumn(column - 1);
            }
            else{
                setColumn(6);
            }
        }
        else if(e.keyCode === 39){
            if(column === undefined || column > 6){
                setColumn(1)
            }
            else{
                setColumn(column + 1);
            }
        }
        else if(e.keyCode === 32 || e.keyCode === 13){
            if(dropped.find(drop => drop.x === 0 && drop.y === (column || 0))){
                return
            }
            const length = 5 - dropped.filter(drop => drop.y === (column || 0)).length
            setRow(length);
            setTimeout(() => { 
                setDropped([
                    ...dropped,
                    {x: length, y: column || 0, player: turn}
                ])
                setTurn(turn === 1 ? 2 : 1);
            }, 500)
        }
    }

    useEffect(() => {
        setColumn()
        setRow()
    }, [turn])

    useEffect(() => {
        document.addEventListener('keyup',handleKeyDown,false);

        return () => document.removeEventListener('keyup',handleKeyDown,false);
    })

    return <div className={`active p${turn} column-${column||'-'} row-${row === undefined ? '-' : row}`}/>
}

export default ActiveCoin