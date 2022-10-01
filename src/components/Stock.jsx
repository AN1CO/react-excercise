/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import noImage from '../static/no-image-icon.png'

const Stock = () => {
  const params = useParams()
  const [stock, setStock] = useState({})
  const loading = Object.keys(stock).length === 0

  useEffect(() => {
    axios
      .get('https://universal.hellopublic.com/exercises/stocks.json')
      .then((response) => {
        let res = response.data.stocks
        const data = res.find((stock) => stock.symbol === params.id)
        setStock(data)
      })
  }, [params])

  return (
    <div>
      {loading ? (
        <h3>Loading your stock...</h3>
      ) : (
        <>
          <h1
            css={css`
              font-size: 48px;
              font-weight: 500;
              line-height: 60px;
            `}
          >
            {stock.symbol}
          </h1>
          <div>
            {!stock.image ? (
              <img src={noImage} alt="missing logo" />
            ) : (
              <img src={stock.image} alt={`logo for ${stock.symbol}`} />
            )}{' '}
          </div>
        </>
      )}
    </div>
  )
}

export default Stock
