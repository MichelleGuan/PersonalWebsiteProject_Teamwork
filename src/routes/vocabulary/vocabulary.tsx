import * as React from "react";
import { take, DataUrl, takeText } from "../../data/fetch";
import './index.less';
import { StyleAntiCollision } from "../../tools/stylePrefix";

const s = new StyleAntiCollision('vocabulary');
interface VocabularyState {
  essay: string
}
class Vocabulary extends React.Component<any, VocabularyState> {
  constructor(props: any) {
    super(props)
    this.state = {
      essay: "eassy"
    }
    takeText(DataUrl.lession1, "text").then(text => {
      this.setState({ essay: text });
    })


  }
  render() {

    return (
      <div>
        <pre  className={s.prefix("preContent")}>
          {this.state.essay}
        </pre>
      </div>
    )

  }

}

export default Vocabulary;