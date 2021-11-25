import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0
    }
  }

  // 公開状態を反転させる関数
  togglePublished = () => {
    this.setState( {
      isPublished: !this.state.isPublished
    })
  };

  render() {
    return (
      <>
        <Article 
          title={"Reactの使い方"} 
          isPublished={this.state.isPublished} 
          toggle={() => this.togglePublished()}
          count={this.state.count}
        />
      </>
    )
  }
}

export default Blog