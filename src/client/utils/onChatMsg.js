import currentTime from './currentTime';

const onChatMsg = ({ receivedData, msg }) => {
  receivedData({
    msg: `${msg} (${currentTime()})`,
    timestamp: new Date().getTime(),
  });
};

export default onChatMsg;
