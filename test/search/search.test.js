import { render } from '@testing-library/svelte'
import { Search } from '../../src'

it('Search component', async () => {
    const { getByText, getByTestId, container } = render(Search)
    expect(container).toContainHTML("<div></div>");
})