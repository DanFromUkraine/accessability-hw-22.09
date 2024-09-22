import { useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const Chat2 = () => {

  const [state, dispatch] = useReducer(reducer, {
    messagesWithAuthor: [],
    error: null,
    text_inp: "",
    check_inp: false,
    _all_messages: []
  });

  
  const handle_text_inp = ({ target }) => {
    console.log(target.value);
    
    try {
      dispatch({type: "cti", payload: target.value})
    } catch(e) {
      console.log(e)
    }
  } 
  const handle_check_inp = () => dispatch({type: "cci", payload: !state.check_inp});



  console.log(state);

  try {
    useEffect(() => {
      fetch("./chat.json")
        .then((response) => response.json())
        .then((data) =>
          dispatch({
            type: "init",
            payload: data,
          })
        )
        .catch((error) =>
          dispatch({
            type: "error",
            payload: error,
          })
        );
    }, []);
  } catch (err) {
    console.log(err);
  }

  return (
    <div>
      <h1>Chat2</h1>

      <div>
        <p>sort by author</p>
        <input type="text" value={state.text_inp} onChange={handle_text_inp} />
        <p>
          {" "}
          Sort by date{" "}
          <input
            type="checkbox"
            name=""
            checked={state.check_inp}
            onChange={handle_check_inp}
            id=""
          />
        </p>
      </div>

      {state.messagesWithAuthor.map((e) => (
        <article key={e.messageId}>
          <p>{`${e.author} at ${e.timestamp} --->${e.messageText}`}</p>
        </article>
      ))}
    </div>
  );
};

export default Chat2;
