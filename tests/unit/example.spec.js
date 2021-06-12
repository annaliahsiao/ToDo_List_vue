import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Todo from '@/components/Todo.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Todo.vue', () => {
  it('renders props.msg when passed', () => {
    const todo_msg = 'new message'
    const done_msg = 'new message'
    const wrapper = shallowMount(Todo, {
      propsData: { todo_msg,done_msg }
    })
    expect(wrapper.text()).toMatch(todo_msg,done_msg)
  })
})

