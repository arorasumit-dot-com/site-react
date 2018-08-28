import * as React from 'react';
import * as style from './style.css';

export namespace Home {
  export interface Props {}
}

export class Home extends React.Component<Home.Props> {
  constructor(props: Home.Props, context?: any) {
    super(props, context);
  }

  render() {
    return (
      <div className={style.home}>
        <div className="ma0 pa0 home h-100 flex flex-column justify-center white w-100 vh-100">
          <p className="f-headline-ns f1 tc ma4">Hi, I am Sumit Arora</p>
          <p className="f-subheadline-ns f2 tc ma4">a full stack developer at rangle.io</p>
          <div className="tc ma4">
            <a href="https://twitter.com/arorasumit" target="_blank">
              <i className="fa fa-twitter fa-3x white" />
            </a>
            &nbsp;&nbsp;
            <a href="https://github.com/sumitarora" target="_blank">
              <i className="fa fa-github fa-3x white" />
            </a>
            &nbsp;&nbsp;
            <a href="https://linkedin.com/in/arorasumit85" target="_blank">
              <i className="fa fa-linkedin fa-3x white" />
            </a>
            &nbsp;&nbsp;
            <a href="mailto:er.sumitarora@gmail.com" target="_blank">
              <i className="fa fa-envelope-o fa-3x white" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
