const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let k = 0.693/HALF_LIFE_PERIOD;
  if( typeof(sampleActivity) !== 'string' ){
    return false;
  } else if(isNaN(parseFloat(sampleActivity))){
    return false;
  } else if(parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) >= 15){
    return false;
  } else {
    return Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/k);
  }
};
