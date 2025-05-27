import { CirclePlay } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
  return (
    <form action="" className="form">
      <div className="formRow">
        <DefaultInput
          labelText="Tarefa"
          id='inputDefault'
          type='text'
          placeholder='Ex: estudar para a prova'
        />
      </div>

      <div className="formRow">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<CirclePlay />} color='green' />
      </div>
    </form>
  )
}