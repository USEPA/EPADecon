// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface Element extends VNode {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface ElementClass extends Vue {}
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [elem: string]: any;
    }
  }
}
