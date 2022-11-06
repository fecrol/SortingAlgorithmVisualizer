import React, { useRef } from 'react'
import DataPieces from './DataPieces'
import { useContainerResize } from './useContainerResize'
import { useInterruptSort } from './useInterruptSort'
import { useRandData } from './useRandData'
import { bubbleSortBtnClick, generateBtnClick } from './utilities'

export default function Content() {

  const contentBodyRef = useRef()
  const generateBtnRef = useRef()
  const bubbleSortBtnRef = useRef()
  const selectionSortBtnRef = useRef()
  const insertionSortBtnRef = useRef()
  const buttons = [bubbleSortBtnRef, selectionSortBtnRef, insertionSortBtnRef]

  const dimensions = useContainerResize(contentBodyRef)
  const [data, setData] = useRandData(dimensions)
  const sorting = useInterruptSort(dimensions, data)

  return (
    <div className="flex-container centre">
        <div className="content-container centre">
          <div className="content-header">
            <h1 className="content-title">
                Sorting Algorithm Visualizer
            </h1>
          </div>
          <div className="content-body" ref={contentBodyRef}>
            <DataPieces data={data} />
          </div>
          <div className="content-footer">
            <div className="buttons">
              <button id="generate-btn" className="button" ref={generateBtnRef} onClick={() => generateBtnClick(setData, dimensions)}>Generate</button>
              <button id="bubble-sort-btn" className="button" ref={bubbleSortBtnRef} onClick={() => bubbleSortBtnClick(buttons, sorting, dimensions)}>Bubble Sort</button>
              <button id="selection-sort-btn" className="button" ref={selectionSortBtnRef}>Selection Sort</button>
              <button id="insertion-sort-btn" className="button" ref={insertionSortBtnRef}>Insertion Sort</button>
            </div>
          </div>
        </div>
    </div>
  )
}
