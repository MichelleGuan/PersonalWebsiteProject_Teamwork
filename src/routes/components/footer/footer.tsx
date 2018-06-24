

import * as React from "react";
import { StyleAntiCollision } from "../../../tools/stylePrefix";
import {  Icon } from "antd";
import './index.less';


const s = new StyleAntiCollision('footer');
class Footer extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            current: 'mail',
        }
    }


    render() {
        return (
            <div className={s.suffix('footer_wrapper')}>
                <p><Icon type='github'/></p>
                <p> © ANTNOBERK {new Date().getFullYear()}</p>
            </div>
        );
    }
}

export default Footer;