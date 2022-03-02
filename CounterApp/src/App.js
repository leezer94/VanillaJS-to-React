import { $ } from './utils/util.js';
import Component from './core/Component.js';

import Counter from './components/Counter.js';
import DiffInput from './components/DiffInput.js';

export default class App extends Component {
  constructor(...rest) {
    super(...rest);
    this.initialState(); // 초기값 설정
  }

  async initialState() {
    this.setState({
      count: 0,
      diff: 1,
    });
  }

  componentDidMount() {
    // 컴포넌트가 렌더링 된 후, 관련된 이벤트를 등록하였다.
    const { handleIncrease, hadnleDecrease, handleSetDiff } = this;

    new Counter($('.counter-component'), {
      count: this.state && this.state.count,
      onIncrease: handleIncrease.bind(this),
      onDecrease: hadnleDecrease.bind(this),
    });

    new DiffInput($('.diff-form-component'), {
      diff: this.state && this.state.diff,
      onSetDiff: handleSetDiff.bind(this),
    });
  }

  template() {
    // 해당 카운터 컴포넌트의 UI 를 정의

    return `
      <h1>Counter</h1>
      <section class="diff-form-component"></section>
      <section class="counter-component"></section>
     `;
  }

  handleIncrease() {
    this.setState({
      ...this.state,
      count: this.state.count + this.state.diff,
    });
  }

  hadnleDecrease() {
    this.setState({
      ...this.state,
      count: this.state.count - this.state.diff,
    });
  }

  handleSubmit() {
    const diff = parseInt($('.diffInput').value, 10);

    this.setState({
      ...this.state,
      diff: diff,
    });
  }

  handleSetDiff(diff) {
    this.setState({
      ...this.state,
      diff,
    });
  }
}

// 자세하게 볼 내용은 template() 과 componentDidMount 를 보면 된다.
// template 을 각 컴포넌트를 root DOM 을 지정해줘야한다.
// 왜냐하면 하위 컴포넌트에서 해당 root DOM 사이에 해당(하위) 컴포넌트에 맞는 template 을 설정할 수 있기 때문이다.

// componentDidMount 메서드에는 해당 컴포넌트에 필요한 이벤트 또는 하위 컴포넌트를 생성해줘야한다.
