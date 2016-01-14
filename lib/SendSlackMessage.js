
let agent = require('superagent')

function buildPayload(message, target){
    let payload = {
        text : message
    }
    if (target){
        payload.channel = target
    }
    return JSON.stringify(payload)
}

let Api = class Api{
    constructor(serviceUrl){
        this.serviceUrl = serviceUrl
    }
    
    //Sends a message to the default channel or to the optionally specified target
    sendMessage(message, target){
        agent
        .post(this.serviceUrl)
        .send(buildPayload(message, target))
        .set('Content-Type', 'text/plain')
        .end(function(err, res){
            if(err)
                console.log('error', err)
            if(res)
                console.log('response', res)
        })
    }
}

module.exports = function(serviceUrl){
    return new Api(serviceUrl)
}