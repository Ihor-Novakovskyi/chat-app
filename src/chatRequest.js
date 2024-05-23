
export default function CreateSocket({ url, setOpen, setError, setData, setSocket }) { 
  const createRequestMesage = (
    user_prompt = "https://www.tiktok.com/@im_mmxvii",
    tiktok_authorized = true,
  ) => { 
    return JSON.stringify(
      {
        "conversation_id": "0e015560-43d0-43b5-a736-956912398f2d",
        "is_user_authorized_through_tiktok": tiktok_authorized,
        "user_id": "2e0e2cdd-1953-4902-bbd3-6da785505961",
        "user_prompt": user_prompt,
        "user_region": "uk-UA",
        "authorization": ""
      }
    )
  }
  function startSocket() { 
    const socket = new WebSocket(url);
    const getOpenSocket = (e) => { 
      setOpen(true)
      setError(false)
      setSocket(socket)
    }
    const getError = (e) => {
      setSocket(null);
      setOpen(false);
      setError(true);
      socket.removeEventListener('open', getOpenSocket)
      socket.removeEventListener('message', getSocketMessage);
      socket.removeEventListener('close', closedSocket);
      console.log('Соединение закрыто \n','error: ',e);
    }
    const getSocketMessage = (e) => { 
      const message = e.data;
      setData(JSON.parse(message)["Text"])
    }
    const closedSocket = () => { 
      setSocket(null);
      setOpen(false);
      setError(false);
      socket.removeEventListener('open', getOpenSocket)
      socket.removeEventListener('message', getSocketMessage);
      socket.removeEventListener('error', getError);
  
    }
    socket.addEventListener('open',getOpenSocket);
    socket.addEventListener('message', getSocketMessage);
    
    socket.addEventListener('close',closedSocket);
    
    socket.addEventListener('error', getError);
  }  
  return {
    createRequestMesage,
    startSocket
  }
}
