import * as React from 'react';
export namespace Journey {
  export interface Props {}
}

export class Journey extends React.Component<Journey.Props> {
  constructor(props: Journey.Props, context?: any) {
    super(props, context);
  }

  render() {
    return <h1>Journey</h1>;
  }
}
