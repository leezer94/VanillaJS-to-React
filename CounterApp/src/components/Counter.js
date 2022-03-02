import Component from '../core/Component.js';
import { $ } from '../utils/util.js';

export default class Counter extends Component {
  constructor(...rest) {
    super(...rest);
  }

  // binding of EventListeners
  componentDidMount() {
    const { onIncrease, onDecrease } = this.props;

    $('.increaseBtn').addEventListener('click', onIncrease);
    $('.decreaseBtn').addEventListener('click', onDecrease);
  }

  template() {
    const { count } = this.props;

    return `
      <h2 class="counter">${count}</h2>
      <button class="increaseBtn">+1</button>
      <button class="decreaseBtn">-1</button>
    `;
  }
}

// 중요한 점은 App 컴포넌트에서 props로 count 값과 onIncrease, onDecrease 기능을 넘겨준 점이다.
