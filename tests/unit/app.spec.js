import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import flushPromises from 'flush-promises'

//fetchのモック化
const results = require('./result.json')
window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    status: 200,
    ok: true,
    json: () => results
  })
)

describe('App.vue', () => {
  it('タイトルが表示されること', () => {
    const wrapper = shallowMount(App)
    console.log(wrapper.text())
    expect(wrapper.text()).toContain('担当者一覧')
  })

  it('全件検索を実行したとき、検索結果が0件以上となること', async () => {
    const wrapper = shallowMount(App)

    //検索ボタンクリック
    wrapper.find('#form-submit').trigger('click')

    await flushPromises() //非同期処理を終了させる

    const resultList = wrapper.findAll('#result-list tr')
    expect(resultList.length).not.toEqual(0) //0 以上
    console.log(resultList.at(2).text())
  })

  it("snapshot", () => {
    const wrapper = shallowMount(App)
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})