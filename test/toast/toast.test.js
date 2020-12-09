import { render } from '@testing-library/svelte'
import {Toast} from '../../src'

it('Toast component', async()=>{
    const { getByText, getByTestId, container } = render(Toast)
    expect(container).toContainHTML("<div></div>");
})