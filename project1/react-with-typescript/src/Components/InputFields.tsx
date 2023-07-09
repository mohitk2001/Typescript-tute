import React,{useState} from "react";
import {IState as Props} from "../App"

interface IProps{
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
  people:Props['people']
}

const InputFields:React.FC<IProps> = ({setPeople,people}) => {
  const [inputValues,setValues]=useState({
    name:"",
    age:"",
    url:"",
    note:""
  });
  // const [age,setAge]=useState<number>(0);
  // const [url,setURL]=useState<string>("");
  // const [note,setNote]=useState<string>("");
  const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    console.log(e.target.name)
    setValues({
      ...inputValues,
      [e.target.name]:e.target.value
    }
    )
  }
  const handleSubmit=()=>{
    console.log(inputValues)
    setPeople([...people,{
      name:inputValues.name,
      age:parseInt(inputValues.age),
      url:inputValues.url,
      note:inputValues.note
    }]);
    
    setValues(
      {
        name:"",
        age:"",
        url:"",
        note:""
      }
    )
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        style={{ width: "300px", margin: "10px" }}
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
        name="name"
      />
      <input
        style={{ width: "300px", margin: "10px" }}
        type="text"
        placeholder="Enter your age"
        onChange={handleChange}
        name="age"
      />
      <input
        style={{ width: "300px", margin: "10px" }}
        type="url"
        placeholder="Enter your URL"
        onChange={handleChange}
        name="url"
      />
      <textarea
        style={{ width: "300px", margin: "10px" }}
        placeholder="Enter a note"
        onChange={handleChange}
        name="note"
      ></textarea>
      <button onClick={handleSubmit}>Add to List</button>
    </div>
  );
};

export default InputFields;
