import React from 'react';
import Article from './Article';
import {Foo, Bar} from './components/FooBar';
import Hoge from './components/Hoge';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0
    }
  }

  componentDidMount(){
    // ボタンがクリックされたらいいねをカウントアップする
    document.getElementById("counter").addEventListener('click', this.countUp)
  }

  componentDidUpdate(){
    // カウントが10になったら0に戻る
    if (this.state.count >= 10) {
        this.setState({ count: 0})
    }
  }

  componentWillUnmount(){
    document.getElementById("counter").removeEventListener('click', this.countUp)
  }

  // 公開状態を反転させる関数
  togglePublished = () => {
    this.setState( {
      isPublished: !this.state.isPublished
    })
  };

  countUp = () => {
    this.setState( { count: this.state.count + 1 })
  }

  render() {
    return (
      <>
        <Article 
          title={"Reactの使い方"} 
          isPublished={this.state.isPublished} 
          toggle={() => this.togglePublished()}
          count={this.state.count}
        />
        <Foo />
        <Bar />
        <Hoge />
      </>
    )
  }
}

export default Blog