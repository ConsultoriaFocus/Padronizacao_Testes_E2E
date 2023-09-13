import {render} from '@testing-library/react'
import {Button} from '../components/Button'

test("teste de compenente",()=>{
  const { getByText } = render(<Button/>)
  expect(getByText("test")).toBeInTheDocument()
})