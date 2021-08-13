import { classNames } from '../src/utils'

it('classNames test', () => {
    expect(classNames({ button: false })).toBe('')
    expect(classNames({ button: true })).toBe('button')
    expect(classNames('some','   class   ',{ red: true, button: true, floated:'left', aligned:true })).toBe('some class red button left floated aligned')
})