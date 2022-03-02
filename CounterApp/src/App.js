import { $ } from './utils/util.js';
import Component from './core/Component.js';
import { POSITION } from './utils/constant.js';

export default class App extends Component {
  constructor(...rest) {
    super(...rest); // 추후에 하위로 컴포넌트를 렌더링할 때 필요한 부분
    this.initialState(); // 초기값 설정
  }

  async initialState() {
    this.setState({
      count: 0,
      diff: 1,
    });
  }

  template() {
    // 해당 카운터 컴포넌트의 UI 를 정의

    return `
      <div class="container">
        <h1>Counter</h1>
        <form class="setDiffForm">
          <input class="diffInput" type="number" placeholder="1" value="${
            this.state.diff || 1
          }"/>
          <button class="diffSubmit" type="submit">diff 설정</button>
        </form> 
        <h2 class="counter">${this.state.count}</h2>
        <button class="increaseBtn">+1</button>
        <button class="decreaseBtn">-1</button>
      </div>
     `;
  }

  componentDidMount() {
    // 컴포넌트가 렌더링 된 후, 관련된 이벤트를 등록하였다.
    const { handleIncrease, hadnleDecrease, handleSubmit } = this;

    $('.increaseBtn').addEventListener('click', handleIncrease.bind(this));
    $('.decreaseBtn').addEventListener('click', hadnleDecrease.bind(this));
    $('.setDiffForm').addEventListener('submit', handleSubmit.bind(this));
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

  handleSubmit(event) {
    event.preventDefault();
    const diff = parseInt($('.diffInput').value, 10);
    this.setState({
      ...this.state,
      diff: diff,
    });
  }
}
