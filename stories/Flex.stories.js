/*
* @Author: Just be free
* @Date:   2021-06-03 14:29:00
* @Last Modified by:   Just be free
* @Last Modified time: 2021-06-03 17:46:52
* @E-mail: justbefree@126.com
*/
import { VgFlex, VgFlexItem } from "@dullar/queen";
import MyFlex from "./flex/MyFlex.vue";
import "./flex/style.scss";

export default {
  title: 'Example/queen/Flex',
  component: MyFlex,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: {},
  },
};

const Template1 = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyFlex, VgFlex, VgFlexItem },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <vg-flex justifyContent="center" alignItems="center" class="face">
      <transition>
        <vg-flex-item class="dot"></vg-flex-item>
      </transition>
    </vg-flex>
  `,
});

export const Dot1 = Template1.bind({});
Dot1.args = {
  primary: true,
  label: 'Flex',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Flex',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Flex',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Flex',
// };
