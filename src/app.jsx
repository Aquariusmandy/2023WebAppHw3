import React from 'react';
import ReactDOM from 'react-dom';

import BottomLine from './textDeco';
import TextColor from './textColor';
import TextColorGray from './textColorGray';
import Center from './Center';
import TextCenter from './textCenter';

function Experience() {
  return (
    <div>
      <div>
        <h1> experience </h1>
        <div>
          <h3> 機器學習相關課程 </h3>
          <TextColorGray>
            <h4> 資料檢索與文字探勘</h4>
          </TextColorGray>
        </div>
        <TextColorGray>
          <ul>
            <li>製作以文字內容為基礎的電影推薦系統</li>
            <li>python</li>
            <li>multinomial NB classifier</li>
          </ul>
        </TextColorGray>
        <div>
          <h3> 實驗設計 </h3>
          <TextColorGray>
            <h4> 線上評論的撰寫動機對於評論品質與可信度影響 </h4>
          </TextColorGray>
        </div>
        <TextColorGray>
          <ul>
            <li>熟悉心理學、資訊行為的實驗設計</li>
            <li>了解實驗設計的邏輯與技巧</li>
          </ul>
        </TextColorGray>
        <div>
          <h3> 資訊管理專題 </h3>
          <TextColorGray>
            <h4> 觀眾對 YOUTUBE 業配影片信賴度與影片資訊、品牌的關係 </h4>
          </TextColorGray>
        </div>
        <TextColorGray>
          <ul>
            <li>運用 SEM model 解釋上述因素對於信賴度的影響</li>
            <li>負責其中的模型與統計分析</li>
          </ul>
        </TextColorGray>
        <div>
          <h3> 食歸祭｜音樂品牌創立｜創辦成員 </h3>
          <TextColorGray>
            <h4> 以世代交流為題的舊市音樂祭 </h4>
          </TextColorGray>
        </div>
        <TextColorGray>
          <ul>
            <li>彙整工作與資源需求，安排適當流程規劃與分工</li>
            <li>運用曾皆處各領域的經驗，換位思考不同部門的需求，協助跨部門溝</li>
            <li>成功協助團隊解決兩次解散危機</li>
          </ul>
        </TextColorGray>
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img style={{height:150, borderRadius:'100%', backgroundSize:'cover'}}
         src='../assets/F24076085-1.jpg'
         alt={props.user} />
  );
}

function UserSchool(props) {
  return (
    <div>
      <div className="Master">
          {props.school.master} 
      </div>
      <div className="Bachelor">
          {props.school.bachelor}
      </div>
    </div>
  );
}

class Display extends React.Component {
  constructor(props) {
      super(props);
  }



  render() {
    return (
      <Center>
      <BottomLine>
        <TextCenter>
        <div>
          <Avatar user={this.props.enname} />
        </div>
        <h3 style={{flex:1, alignItems:'center'}}>
          {this.props.chname}
          {this.props.enname}
        </h3>
        <h3>
          < UserSchool school = {this.props.school} />
        </h3>
        <TextColor>
          <h5 onClick={() => window.location = 'mailto:yourmail@domain.com'}> {this.props.email} </h5>
        </TextColor>
        <div>
          學習能力強，要求自己不犯相同錯誤，能善用資源自我精進 <br />
          邏輯清晰，迅速掌握對話重點，理清順序和因果關係 <br />
          樂於溝通合作，擅長傾聽、覺察情緒，也能夠清楚理解與表達 
        </div>
        </TextCenter>
        <div>
          < Experience />
        </div>
      </BottomLine>
      </Center>
    );
  }
}

const person ={
  chname: '李名涵',
  enname:'MandyLi',
  school:{
    master:'國立台灣大學 資訊管理所',
    bachelor:'國立成功大學 都市計劃系'
  },
  email:'aquariusmandy1122@gmail.com'
}

const domContainer = document.querySelector('#app');
ReactDOM.render(
  <Display 
    chname={person.chname} 
    enname={person.enname} 
    school={person.school}
    email={person.email} />,
  domContainer
);