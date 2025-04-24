export const simulateWebSocket = (dispatch, action) => {
    setInterval(() => {
      dispatch(action());
    }, 2000); // every 2 seconds
  };
  