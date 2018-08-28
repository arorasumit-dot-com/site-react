import * as React from 'react';
export namespace About {
  export interface Props {}
}

export class About extends React.Component<About.Props> {
  constructor(props: About.Props, context?: any) {
    super(props, context);
  }

  render() {
    return <h1>About</h1>;
  }
}
