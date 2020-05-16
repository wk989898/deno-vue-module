export type Data={
  [propName:string]:any
}
export type Method={
  [propName:string]:Function
}
export type LifeStyle={
  beforeCreate?:Function,
  created?:Function,
  beforeMount?:Function,
  mounted?:Function,
  beforeUpdate?:Function,
  updated?:Function,
  beforeDestory?:Function,
  destoryed?:Function,
  activated?:Function,
  deactivated?:Function,
  errorCaptured?:Function
}
