
import React from 'react'
import Countdown, { zeroPad } from 'react-countdown';
import {
    Typography,
    CardContent,
    CardHeader,
    Card
} from "@material-ui/core";

export default function Timer(props) {
    console.log(props)
    const Completionist = () => <span>You are good to go!</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return (
                <span className="sign">
                    <Card style={{ backgroundColor: "rgba(0,0,0,0)", color: "white", padding: "0", margin: "0 auto" }}>
                        <CardHeader
                            style={{ textAlign: "center" }}
                            title=" ">

                        </CardHeader>
                        <CardContent>
                            <Typography style={{ textAlign: "center", fontSize: "17px" }}>
                                <h1>
                                    {props.message}&nbsp;&nbsp;{zeroPad(days, 3)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
                                </h1>
                            </Typography>
                        </CardContent>
                    </Card>
                </span>)

        }




    };



    return (
//date={(new Date(props.start)).getTime()}
        <Countdown
        date={props.start}
            intervalDelay={1}
            renderer={renderer}
        />
    )

}