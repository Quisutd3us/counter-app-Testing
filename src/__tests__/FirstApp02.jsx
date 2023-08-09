import {render, screen} from "@testing-library/react";
import FirstApp from "../FirstApp.jsx";

describe('Test for component <FirstApp/>', () => {
  const title = 'This is the Title ..'
  const subTitle = 'This is the SubTitle ..'
  test('Must be Match with the Snapshot', () => {
    const {container} = render(
        <FirstApp
            title={'title'}
        />
    )
    expect(container).toMatchSnapshot()
  })

  test('Must be the message "This is the Title .."', () => {
    render(
        <FirstApp
            title={title}
        />
    )
    expect(screen.getByText(title)).toBeTruthy()
  })
  test('Must be show the title on H1 tag', () => {
    render(
        <FirstApp
            title={title}
        />
    )
    expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title)
  })

  test('Must be show the subtitle send by props',()=>{
    render(
        <FirstApp
            title={title}
            subTitle={subTitle}
        />
    )
    expect(screen.getByText(subTitle).innerHTML).toContain(subTitle)
  })
})