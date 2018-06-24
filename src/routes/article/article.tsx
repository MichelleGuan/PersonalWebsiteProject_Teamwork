
import * as React from "react";
import { StyleAntiCollision } from "../../tools/stylePrefix";
import { Icon } from "antd";
import { take, DataUrl } from "../../data/fetch";
import './index.less';


export interface IArticle {
    title: string,
    createTime: string,
    comment: string;
    reader: number;
    type: string;
    tag: string[],
    content: string;
}
export interface IArticleState {
    data: IArticle[];
}

const s = new StyleAntiCollision('article');
class Article extends React.Component<any, IArticleState> {
    constructor(props: any) {
        super(props)


        this.state = {
            data: []
        }
        take<IArticle[]>(DataUrl.articleAddress).then(d => {
            this.setState({ data: d });
        })
    }
    createArticleList = (data: IArticle[]) => {
        if (data == undefined)
            return <div>loading</div>;

        var list = [];

        for (const item of data) {
            list.push(
                <li className={s.suffix('li')}>
                    <header>{item.title}</header>   
                     <p>
                         <span>{item.type}</span>
                         <span>{item.createTime}</span>
                         <span><Icon type='book'/>{item.reader}</span>
                         <span><Icon type='form'/>{item.comment}</span>
                     </p>
                </li>
            )
        }   
        return list;

    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <ul>
                    {this.createArticleList(data)}
                </ul>
            </div>
        );
    }
}

export default Article;
