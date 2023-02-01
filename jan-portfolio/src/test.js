import HelloMessage from './test';

class HelloMessage extends React.Component {
    render() {
      return <div>Hello {this.props.name}</div>;
    }
  }

  export default HelloMessage;