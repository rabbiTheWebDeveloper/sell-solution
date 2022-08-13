import React from "react";
import BulkSMSHeader from "../../components/BulkSmsComponent/BulkSMSHeader/BulkSMSHeader";
import SendSMS from "../../components/BulkSmsComponent/SendSMS/SendSMS";

const BulkSms = () => {
  return (
    <div>
        <BulkSMSHeader></BulkSMSHeader>
        <SendSMS></SendSMS>
    </div>
  );
};

export default BulkSms;
