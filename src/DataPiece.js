import React from 'react'

export default function DataPiece({dataValue}) {

  const height = dataValue.value * 17
  
  return (
    <div className="data-piece" style={{"height": `${height}px`,"backgroundColor": dataValue.colour}}></div>
  )
}
