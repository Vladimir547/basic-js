module.exports = function getSeason(date) {
  let winter = 'winter';
  let spring = 'spring';
  let summer = 'summer';
  let autumn = 'autumn';
  let result = '';
  if(!date){
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== "[object Date]"){
    throw new Error;
  }
  if(date.getMonth() === 0 || date.getMonth() === 1 || date.getMonth() === 11){
    return winter;
  } else if (date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4){
    return spring;
  } else if (date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7){
    return summer;
  } else {
    return autumn;
  }
};
