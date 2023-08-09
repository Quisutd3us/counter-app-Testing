import {getByText, render} from "@testing-library/react";
import FirstApp from "../FirstApp.jsx";

describe('Test for component <FirstApp/>',()=>{
  test('Must be match with the snapshot',()=>{
    const title = 'Hi Iam Roku'
    const {
      container,
      getByText,
      getByTestId} =render(<FirstApp title={title}/>)
    expect(getByText(title)).toBeTruthy()
    const h1= container.querySelector('h1')
    expect(h1.innerHTML).toContain(title)
    expect(getByTestId('test-title').innerHTML).toContain(title)
    /*expect(container).toMatchSnapshot()*/
  })

  test('Must be watch with prop:subtitle ',()=>{
    const title = 'Im a test title'
    const subTitle = 'Im a test subtitle'
    const {getByTestId}=render(
        <FirstApp
            title={title}
            subTitle={subTitle}
        />
    )
    expect(getByTestId('test-subtitle').innerHTML).toContain(subTitle)
  })
})