import * as React from "react";
import { take, DataUrl } from "../../../data/fetch";
import { $img } from "../../../tools/config";
import { StyleAntiCollision } from "../../../tools/stylePrefix";

import './index.less';

const Fragment = React.Fragment
const s = new StyleAntiCollision('weather');
export type WeatherDetails = { time: string, list: [{ station_Name: string, tem: number }] };
interface IWeatherProps {
}
interface IWeatherState {
    weatherData?: WeatherDetails
}
export default class Weather extends React.Component<IWeatherProps, IWeatherState> {
    constructor(props: IWeatherProps) {
        super(props)
        this.state = {
            weatherData: undefined
        }

        take<WeatherDetails>(DataUrl.weatcherAddress).then(d => {
            this.setState({ weatherData: d });
        })

    }

    render() {
        const { weatherData } = this.state

        if (weatherData == undefined) {
            return <span>LOADING ...</span>
        }
        return (
            <span className={s.suffix('weather_span')}>
                {weatherData.list[0].station_Name} <img src={`${$img}could.png`}/>： 今日気温 {weatherData.list[0].tem}
            </span>
        )
    }
}