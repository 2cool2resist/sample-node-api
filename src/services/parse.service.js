
const postV1Body = function(body){

    var input=body.data;
    const regex=/0{3,4}/;
    const eresult=input.split(regex);   
    const _clientid=eresult[2].match(/.{1,3}/g);

    var result = formatOutput(eresult[0],eresult[1],_clientid[0]+'-'+_clientid[0]);    
    console.log('Printing Result:'+result);
    return result;
}

const postV2Body = function(body){
    var input=body.data;
    const regex1=/(?<=0{4})/;
    const regex2=/(?<=0{3})/;
    const result1=input.split(regex1);   
    const result2=result1[1].split(regex2);   

    var result = formatOutput(result1[0],result2[0],result2[1]);    
    console.log('Printing Result1:'+result1);
    console.log('Printing Result2:'+result2);
    return result;        
}


const formatOutput = function(_firstName,_lastName,_clientId){

    let outputdata = { 
        firstName: _firstName,
        lastName: _lastName, 
        clientId: _clientId       
    };

    let result = { 
        statusCode: 200,
        data:outputdata
    };  
    
    return JSON.stringify(result);
}

module.exports = {   
    postV1Body,
    postV2Body
};