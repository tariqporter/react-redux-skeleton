import * as React from 'react';
import { CSSProperties } from 'react';

export class FxCol extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render() {

    const style: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: this.props.margin && this.props.margin.bottom ? this.props.margin.bottom * 10 : 0,
      marginLeft: this.props.margin && this.props.margin.left ? this.props.margin.left * 10 : 0,
      marginRight: this.props.margin && this.props.margin.right ? this.props.margin.right * 10 : 0,
      marginTop: this.props.margin && this.props.margin.top ? this.props.margin.top * 10 : 0,
    };

    return (
      <div className={this.props.className} style={style}>
        {this.props.children}
      </div>
    );
  }
}

export class FxRow extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render() {

    const style: CSSProperties = {
      alignItems: this.props.center ? 'center' : 'auto',
      display: 'flex',
      flex: this.props.end ? '0 1 auto' : '1 1 auto',
      flexDirection: 'row',
      marginBottom: this.props.margin && this.props.margin.bottom ? this.props.margin.bottom * 10 : 0,
      marginLeft: this.props.end ? 'auto' : this.props.margin && this.props.margin.left ? this.props.margin.left * 10 : 0,
      marginRight: this.props.margin && this.props.margin.right ? this.props.margin.right * 10 : 0,
      marginTop: this.props.margin && this.props.margin.top ? this.props.margin.top * 10 : 0,
    };

    return (
      <div className={this.props.className} style={style}>
        {this.props.children}
      </div>
      );
  }
}

export class FxChild extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render() {

    const center = this.props.center;

    const style: CSSProperties = {
      marginBottom: this.props.margin && this.props.margin.bottom ? this.props.margin.bottom * 10 : 0,
      marginLeft: this.props.margin && this.props.margin.left ? this.props.margin.left * 10 : center? 'auto' : 0,
      marginRight: this.props.margin && this.props.margin.right ? this.props.margin.right * 10 : center ? 'auto' : 0,
      marginTop: this.props.margin && this.props.margin.top ? this.props.margin.top * 10 : 0,
    };

    return (
      <div className={this.props.className} style={style}>
        {this.props.children}
      </div>
    );
  }
}