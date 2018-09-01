import styled from 'styled-components'

import Header from './header'
import Image from './image'
import Text from './text'
import Title from './title'

const Card = styled.div`
  background-position: left;
  width: 100%;
  background-size: cover;
  border-radius: 2px;
  margin: 5px 5px 10px;
  padding: 20px;
  position: relative;
  box-shadow: 2px 2px 4px 2px #cfd8dc;
`

Card.Header = Header
Card.Image = Image
Card.Text = Text
Card.Title = Title

export default Card
