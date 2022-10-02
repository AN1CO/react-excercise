/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import axios from 'axios'
import { useEffect, useState } from 'react'
import StyledLink from './StyledLink'

const client = axios.create({
  baseURL: 'https://universal.hellopublic.com/exercises/stocks.json',
})

const Stocks = () => {
  const [stocks, setStocks] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    client
      .get()
      .then((response) => {
        setStocks(response.data.stocks)
      })
      .catch((err) => {
        if (err) {
          setError(!error)
        }
      })
  }, [setStocks, error])

  return (
    <div>
      <h1
        css={css`
          font-size: 48px;
          font-weight: 500;
          line-height: 60px;
        `}
      >
        Stocks
      </h1>
      {error && <p>Failed to fetch stocks.</p>}
      {!stocks.length && !error ? (
        <p>Loading your stocks...</p>
      ) : (
        stocks.map((stock) => (
          <ul
            css={css`
              padding: 0;
            `}
            key={stock.symbol}
          >
            <StyledLink to={`/stock/${stock.symbol}`}>
              {stock.symbol}
            </StyledLink>
          </ul>
        ))
      )}
    </div>
  )
}

export default Stocks
