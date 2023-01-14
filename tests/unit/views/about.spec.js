import { shallowMount } from "@vue/test-utils";
import AboutView from "@/views/AboutView"

describe("About test",() =>
{
    test("Debe coincidir con el spanshot",() =>
    {
        const wrap1 = shallowMount(AboutView)
        expect(wrap1.html()).toMatchSnapshot();
    })
})