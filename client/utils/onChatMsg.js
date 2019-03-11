import currentTime from './currentTime';

const onChatMsg = ({ receivedData, firstname, lastname, msg }) => {
  // console.log('received', received);
  receivedData({
    msg: `${firstname} ${lastname}: ${msg} -- ${currentTime()}`,
    timestamp: new Date().getTime()
  });
}

export default onChatMsg;