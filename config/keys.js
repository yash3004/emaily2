console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === undefined) {
   // return production set of keys 
   module.exports = require('./dev');
   
}
else{
    //return the dev set of keys 
    module.exports = require('./prod');
}