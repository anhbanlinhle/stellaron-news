import KafkaConfig from "../../configs/connectMQ"

let postMsgToKafka = async (req, res) => {
  try {
    const { message } = req.body;
    
    const kafkaConfig = new KafkaConfig();
    const messages = [{ key: "key1", value: message }];
    kafkaConfig.produce("my-topic", messages);

    return res.send({
      msg: "Message successfully send!",
    })
  } 
  catch (err) {
    return res.status(500).send({
      ErrorCode: err.code, 
      ErrorNo: err.errno
    })
  }
}

module.exports = {
  postMsgToKafka
}
