import * as React from 'react';
export namespace Expertise {
  export interface Props {}
}

export class Expertise extends React.Component<Expertise.Props> {
  constructor(props: Expertise.Props, context?: any) {
    super(props, context);
  }

  render() {
    return <h1>Expertise</h1>;
  }
}
