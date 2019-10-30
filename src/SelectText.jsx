import React from 'react';
import ClassName from 'classnames';
import PropTypes from 'prop-types';

function selectTextFn(t, fn) {
  t.onmouseup = e => {
    const event = window.event || e;
    const target = event.srcElement ? event.srcElement : event.target;

    if (/input|textarea/i.test(target.tagName) && /firefox/i.test(navigator.userAgent)) {
      const staIndex = target.selectionStart;
      const endIndex = target.selectionEnd;

      if (staIndex !== endIndex) {
        let sText = target.value.substring(staIndex, endIndex);
        sText = sText.replace(/\s*/g, '');

        const num = sText.length;

        fn(sText, target, num);
      }
    } else {
      let sText =
        document.selection === undefined ? document.getSelection().toString() : document.selection.createRange().text;

      if (sText !== '') {
        sText = sText.replace(/\s*/g, '');

        const num = sText.length;

        fn(sText, target, num);
      }
    }
  };
}

class SelectText extends React.Component {
  static propTypes = {
    nickName: PropTypes.string,
    handler: PropTypes.func.isRequired,
  };

  static defaultProps = {
    nickName: '',
  };

  componentDidMount() {
    const that = this;
    const { handler } = that.props;

    selectedText(document, handler);
  }

  render() {
    const that = this;
    const { nickName, children } = that.props;

    return <div className={ClassName('Container', nickName)}>{children}</div>;
  }
}

export { SelectText, selectTextFn };
