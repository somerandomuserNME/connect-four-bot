import './Board.css'
import {rows, columns} from '../constants/constants'

const Board = () => {
    const board = 
        new Array(rows)
        .fill ()
        .map(_ => new Array(columns).fill (''))
    
    return <div className='board'>
        {board.map((row, i) => 
            row.map((column, j) => <div key={i+'-'+j}/>)
        )}
    </div>
}

export default Board