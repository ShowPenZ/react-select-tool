# react-select-tool

> a select-text-tool component for React 

## Installation

```
$ npm install react-select-tool --save
$ yarn add react-select-tool
```

## Usage 
用法1 仅针对当前插入的SelectText dom
```javascript
import { SelectText, selectTextFn } from "react-select-tool";

class App extends React.Component {
  render() {
    ////这个回调拿到相应被选择的信息 txt: 选择的文本, target: 被选择的整个dom对象, num: 选择的文本字数
    const handler = (txt, target, num) => {
      console.log(txt, target, num);
    };

    return <SelectText handler={handler}>这是一个测试 文本!</SelectText>;
  }
}

export default App;

```
用法2 挂载方法到当前整个页面
```javascript
import { SelectText, selectTextFn } from "react-select-tool";

class App extends React.Component {
  componentDidMount() {
    const that = this;
    selectedText(document, that.handler);
  }

  //这个回调拿到相应被选择的信息
  handler = (txt, tar, num) => {
    console.log(txt, tar, num);
  };

  render() {
    return <div>这是一个测试 文本!</div>;
  }
}

export default App;

```


## Properties

```javascript
  static propTypes = {
    nickName: PropTypes.string,
    handler: PropTypes.func.isRequired, //选中文本后的回调
  };

  static defaultProps = {
    nickName: "",
  };
```

# License

MIT
