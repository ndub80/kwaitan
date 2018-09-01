import styled from 'styled-components'
import Text from './text'

const Button = styled.div`
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: 2px 2px 4px 2px #cfd8dc;
  background-color: #333;
  color: #fff;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  font-family: 'arial';
`
Button.Text = Text

export default Button
