const getType = (value : any) : string => Object.prototype.toString.call(value)

const getLowercaseType =  (value : any) : string => getType(value).slice(8,-1).toLowerCase()

export {getType,getLowercaseType}