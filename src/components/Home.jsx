/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Home = () => (
  <div>
    <h1
      css={css`
        font-size: 48px;
        font-weight: 500;
        line-height: 60px;
      `}
    >
      Cupcake ipsum dolor sit amet liquorice liquorice croissant. Wafer marzipan
      lollipop cake bonbon chocolate liquorice dessert cake.
    </h1>
    <p
      css={css`
        font-size: 20px;
        line-height: 30px;
        > strong {
          font-weight: 500;
        }
      `}
    >
      <strong>Cupcake ipsum dolor sit amet.</strong> Soufflé pudding macaroon
      muffin wafer. Tootsie roll gingerbread bonbon topping cotton candy dragée.
      Topping marzipan pudding muffin tootsie roll. Liquorice muffin gingerbread
      dragée jujubes. Chocolate bar pastry soufflé chupa chups dessert lemon
      drops dessert. Marshmallow biscuit chocolate jujubes cookie sweet pie oat
      cake. Bear claw sweet roll powder tootsie roll sugar plum. Candy pudding
      bear claw wafer pie.
    </p>
  </div>
)

export default Home
