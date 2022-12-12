import React,{useState} from 'react';
import "./Board.css";
import Square from '../square/Square';

const Board = () => {

  const [value, setValue]= useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  
  const handleClick=(index)=> {
    if(value[index] !== null)
    {
       return;
    }
    const copyState= [...value];
    copyState[index]= xTurn ? "X": "O";
    setValue(copyState);
    setXTurn(!xTurn);
  }
  
  const checkWinner=()=> {

    const winnerLogic =  [
       [0,1,2],
       [3,4,5],
       [6,7,8],
       [0,3,6],
       [1,4,7],
       [2,5,8],
       [0,4,8],
       [2,4,6]
  ];

  for(let logic of winnerLogic)
  {
    const [a,b,c]= logic;

    if(value[a] !== null && value[a] == value[b] && value[a] == value[c])
    {
        return value[a];
    }
    
  }
  }

  const isWinner= checkWinner();

  return (
    <div className='board-container'>
        {isWinner ? (
          <>
          <h1>{isWinner} won the game <button onClick={()=> setValue(Array(9).fill(null))} style={{borderR: "10px", paddidng: "10px", backgroundColor: "red",color: "white"}}>Play Again</button></h1></>) : (<>
            <h4 style={{color: "red", fontSize: "20px",fontWeight: "bolder"}}>Player {xTurn ? "X":"O"} please move</h4>
        <div className="board-row">
        <Square value={value[0]} onClick={()=> handleClick(0)} />
        <Square value={value[1]} onClick={()=> handleClick(1)}/>
        <Square value={value[2]} onClick={()=> handleClick(2)}/>
        </div>
        <div className="board-row">
        <Square value={value[3]} onClick={()=> handleClick(3)}/>
        <Square value={value[4]} onClick={()=> handleClick(4)}/>
        <Square value={value[5]} onClick={()=> handleClick(5)}/>
        </div>
        <div className="board-row">
        <Square value={value[6]} onClick={()=> handleClick(6)}/>
        <Square value={value[7]} onClick={()=> handleClick(7)}/>
        <Square value={value[8]} onClick={()=> handleClick(8)}/>
        </div></>)}
    </div>
  )
}

export default Board;
