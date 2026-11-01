
function notifyUser(notificationFn){
    notificationFn()
}

const emailNotification = () => console.log('Email Sent')
const smsNotification = () => console.log('SMS Sent')

notifyUser(emailNotification)
notifyUser(smsNotification)