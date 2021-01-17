import { mount } from '@vue/test-utils'
import Button from '@/components/Button'

let wrapper
const buttonPlaceHolder = {
  text: 'Save',
  color: 'green',
  disabled: false,
  isSaving: false,
}

beforeEach(() => {
  wrapper = mount(Button, {
    propsData: buttonPlaceHolder,
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('button', () => {
  test('wrapper is visible', () => {
    expect(wrapper.isVisible()).toBe(true)
  })

  test('renders button with correct props', () => {
    const button = wrapper.find('button')

    expect(button.attributes('class')).not.toBe('status--red')
    expect(button.attributes('class')).toBe('status--green')
    expect(button.text()).toBe('Save')
  })
})
