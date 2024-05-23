import React, { Fragment } from "react"
import User from "../user/User";
import Chat from "../chat/Chat";
import calculateTime from "../chat-window/CalculateTime";
export default function UserChatComponent({ chatprops }) { 

    return chatprops.map(({ userRequest, chatResponse, startTimeRequest }, id) => { 
        const time = calculateTime(startTimeRequest)
        return (
            <Fragment>
                { userRequest ? <User requestProps={ userRequest } time={time} key={id} /> : null}
                { chatResponse ? <Chat responseProps={ chatResponse } time={time} key={id + 1} /> : null}
            </Fragment>
        )
    })
}