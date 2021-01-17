import { mount } from '@vue/test-utils'
import ParentComponent from '@/components/ParentComponent'
import Button from '@/components/Button'

let wrapper

beforeEach(() => {
  wrapper = mount(ParentComponent)
})

afterEach(() => {
  wrapper.destroy()
})

describe('ParentComponent', () => {
  it('renders button', async () => {
    expect(wrapper.find(Button).exists()).toBe(true)
  })

  it("displays 'Emitted!' when save event is emitted", async () => {
    const buttonComponent = wrapper.findComponent(Button)

    const button = buttonComponent.find('button')

    await button.trigger('click')
    expect(wrapper.html()).toContain('Emitted!')
  })

  it('sets user data with emited data', async () => {
    const user = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@snakeware.nl',
      isActive: false,
    }

    const buttonComponent = wrapper.findComponent(Button)

    const button = buttonComponent.find('button')

    await button.trigger('click')
    expect(wrapper.vm.user).toEqual(user)
  })
})
