import React from 'react'

export default function DataPiece({ dataPiece }) {
  
  return (
    <div className="data-piece" style={{width: dataPiece.width + "px", height: dataPiece.height + "px", marginRight: dataPiece.margin + "px"}}></div>
  )
}
