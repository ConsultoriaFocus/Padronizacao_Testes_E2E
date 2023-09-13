import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import {Button} from '../components/Button'
test("teste de compenente",()=>{
  const { getByText } = render(<Button/>)
  expect(getByText("test")).toBeInTheDocument()
})