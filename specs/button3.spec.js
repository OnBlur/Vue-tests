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

  test('button validator works', () => {
    const validTypes = ['green', 'red', 'orange']
    const validator = Button.props.color.validator

    validTypes.forEach((valid) => expect(validator(valid)).toBe(true))
    expect(validator('yellow')).toBe(false)
  })

  test('should render button as disabled', () => {
    wrapper = mount(Button, {
      propsData: { ...buttonPlaceHolder, disabled: true },
    })

    expect(wrapper.attributes().disabled).toBe('disabled')
  })

  test('should render button with saving text', () => {
    wrapper = mount(Button, {
      propsData: { ...buttonPlaceHolder, isSaving: true },
    })

    const button = wrapper.find('button')
    expect(button.text()).toBe('Saving...')
  })
})
