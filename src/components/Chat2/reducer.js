export function reducer(state, { type, payload }) {
  if (type === "init") {
    return init(state, payload)
  }
  if (type === "cti") { //change text input
    return {
      ...state,
      messagesWithAuthor: state._all_messages.filter(({ author }) => author.includes(payload)),
      text_inp: payload
    }
  }
  if (type === "cci") { //change checkbox input
    return {
      ...state,
      messagesWithAuthor: state.messagesWithAuthor.toSorted((a, b) => payload ? (a.time_ms - b.time_ms) : (b.time_ms - a.time_ms)),
      check_inp: payload
    }
  }
  if (type === "error") {
    return {
      ...state,
      error: payload,
    }
  }
  return new Error("no such action.type + ", type)

}

function init(state, payload) {
  const { users, messages } = payload;
  const usersMap = new Map();
  users.forEach(user => usersMap.set(user.id, user));
  const _all_messages = messages.map(({ body, authorId, id, timestamp, time_ms }) => (
    {
      messageText: body,
      author: usersMap.get(authorId).name,
      messageId: id,
      timestamp: timestamp,
      time_ms
    }
  ));
  return {
    ...state,
    _all_messages,
    messagesWithAuthor: _all_messages
  }
}