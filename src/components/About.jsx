/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const About = () => (
  <div
    css={css`
      & p {
        font-size: 20px;
        line-height: 30px;
      }
    `}
  >
    <h1
      css={css`
        font-size: 48px;
        font-weight: 500;
        line-height: 60px;
      `}
    >
      About Us
    </h1>
    <p>
      Cupcake ipsum dolor sit amet. Dessert jelly beans liquorice tootsie roll
      sweet roll macaroon. Croissant lemon drops gummies candy jujubes muffin
      bonbon chocolate halvah.
    </p>
    <p>
      Cookie wafer pastry pie icing brownie marshmallow liquorice jujubes.
      Croissant cake bonbon muffin croissant chocolate bar chocolate. Bonbon
      toffee jelly-o sugar plum cheesecake bonbon jujubes. Bear claw sesame
      snaps jujubes gummi bears muffin pastry gummi bears.
    </p>
    <p>
      Shortbread sugar plum sesame snaps gummi bears cookie sugar plum cake
      lemon drops wafer. Icing apple pie sesame snaps fruitcake jelly fruitcake
      bear claw chocolate bar fruitcake. Oat cake cupcake candy candy canes
      biscuit carrot cake oat cake.
    </p>
    <p>
      Oat cake gummi bears powder halvah cupcake. Cupcake cheesecake marshmallow
      cupcake tart caramels lollipop marzipan. Tart tart croissant cake sweet.
    </p>
  </div>
)

export default About
