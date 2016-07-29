function average(...args) {
    return args.reduce((res,current)=>{
        return res+current;
    },0)/args.length;
};

module.exports = average;