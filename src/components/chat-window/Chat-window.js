import React, {useState, useEffect, useMemo, Fragment} from 'react';
import Ad from '../ad/Ad';
import User from '../user/User';
import Chat from '../chat/Chat';
import CreateSocket from '../../chatRequest';
import RequestButton from '../requestButton/RequestButton';
import './Chat-window.css'
export default function ChatWindow() { 
    const [chatData, setChatData] = useState([]);
    const [inputData, setInputData] = useState('');
    const [socketOpen, setSocketOpen] = useState(false);
    const [error, setSocketError] = useState(false);
    const [socket, setSocket] = useState(null); 
    const [disabled, setDisabled] = useState(false)
    function memoised() { 
        const socketProps = {
            url: 'wss://gi-llm.gromus.io/test_task/websockets',
            setOpen: setSocketOpen,
            setError: setSocketError,
            setData: setDataResponse,
            setSocket,
        }
        return CreateSocket(socketProps)
    } 
    const { createRequestMesage, startSocket } = useMemo(memoised)
    function setDataResponse(data) { 
        if (data !== "<|endoftext|>") { 
            setChatData((prev) => { 
                if (prev.length) {
                    const propsData = [...prev]
                    const updatingProps = propsData[propsData.length - 1];
                    'chatResponse' in updatingProps ?
                        updatingProps.chatResponse = `${updatingProps.chatResponse} ${data}`
                        :
                        updatingProps.chatResponse = data;
                    return propsData
                }
            })
            return
        }
        setDisabled(false)

    }
    function changeInputData(e) { 
        setInputData(e.target.value)
    }
    const submit = (e) => { 
        e.preventDefault();
        if (inputData.length && socketOpen) {
            setDisabled(true)
            setInputData('')
            setChatData(prevData => [...prevData, { userRequest: inputData, startTimeRequest: new Date() }])
            socket.send(createRequestMesage(inputData))
        }
    }
    useEffect(startSocket, [])
    return (
        <div className="chat-window">
            <Ad/>
            <div className="chat-window__dialog">
                <UserChatComponent chatprops={chatData} />
            </div>
            <form
                className="form-request"
                action="submit"
                onSubmit={ submit }>
                <input
                    disabled={disabled}
                    className="form-request__enter"
                    type="text"
                    placeholder="Enter you request...."
                    value={ inputData }
                    onChange={changeInputData}
                />
                <RequestButton disabled={disabled}/>
            </form> 
        </div>
     )
}

function UserChatComponent({ chatprops }) { 

    return chatprops.map(({ userRequest, chatResponse, startTimeRequest }, id) => { 
        const timeDifference = new Date() - startTimeRequest;
        let minutes = Math.round(timeDifference / (1000 * 60));
        let hours = 0;
        if (minutes > 60) { 
            hours = Math.floor(minutes / 60);
            minutes = minutes - (hours * 60);
        }
        const time = {
            hours,
            minutes
        }
        return (
            <Fragment>
                { userRequest ? <User requestProps={ userRequest } time={time} key={id} /> : null}
                { chatResponse ? <Chat responseProps={ chatResponse } time={time} key={id + 1} /> : null}
            </Fragment>
        )
    })
}