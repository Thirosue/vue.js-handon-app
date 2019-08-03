import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('タイトルが表示されること', () => {
    const wrapper = shallowMount(App)
    console.log(wrapper.text())
    expect(wrapper.text()).toContain('担当者一覧')
  })
})