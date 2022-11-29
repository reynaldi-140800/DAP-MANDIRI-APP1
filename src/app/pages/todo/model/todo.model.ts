export interface Todo{
    id:number,
    name:string,
    isCompleted:boolean
  }

  export const TODO = 'todo'

  export enum TodoField{
    ID='id',
    NAME='name',
    IS_COMPLETED='isCompleted'
  }