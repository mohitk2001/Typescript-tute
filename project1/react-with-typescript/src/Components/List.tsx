import React from 'react'
interface IProps{
    people:{
      name:string
      url:string,
      age:number,
      note?:string
    }[]
}
export const List:React.FC<IProps> = ({people}) => {

    const renderList=():JSX.Element[]=>{
        return (
            people.map((person,index)=>{
                return (
                    <div style={{border:"1px solid red"}} key={index}>
                    <p>Name: {person.name}</p>
                    <p>Age: {person.age}</p>
                    <img style={{width:"200px",height:"300"}} src={person.url}/>
                    <p>Note: {person.note}</p>
                    </div>
                )
            })
        )
    }
  return (
    <div>{
    renderList()
    }</div>
  )
}
