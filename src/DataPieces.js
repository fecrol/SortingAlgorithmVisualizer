import React from 'react'
import DataPiece from './DataPiece'

export default function DataPieces({ data }) {

  return (
    data.map((dataPiece) => {
      return <DataPiece dataPiece={dataPiece} />
    })
  )
}
