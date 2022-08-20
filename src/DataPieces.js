import React from 'react'
import DataPiece from './DataPiece'

export default function DataPieces({data}) {
  return (
    data.map(dataValue => {
        return <DataPiece dataValue={dataValue} />
    })
  )
}
