import React, { Component } from 'react';
 
export interface HelloMessageProps {name: string;}
 
class HelloMessage extends Component<HelloMessageProps, {}> {
    render() {
      return (
        <div>
          Hello World {this.props.name}
        </div>
      );
    }
  }
 
export default HelloMessage;