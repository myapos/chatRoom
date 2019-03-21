import currentTime from './currentTime';

const onChatMsg = ({ receivedData, msg }) => {
  // console.log('received', received);
  debugger;
  receivedData({
    msg: `${msg} (${currentTime()})`,
    timestamp: new Date().getTime(),
  });
};

export default onChatMsg;
