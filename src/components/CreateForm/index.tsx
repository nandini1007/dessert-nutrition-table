import React, { useState } from 'react';
import classList from './classList';
import Button from '../Button';
import AppContext from '../../context/AppContext';
import InputRow from '../InputRow';
import './index.css';

interface CreateFormProps {
  onCreate?: any,
}


const CreateForm = ({ onCreate }: CreateFormProps) => {
  const [ name, setName ] = useState('');
  const [ calories, setCalories ] = useState('');
  const [ fat, setFat ] = useState('');
  const [ carb, setCarb ] = useState('');
  const [ protien, setProtien ] = useState('');
  return (
    <div className={classList.createForm}>
      <div className="mt2 ">
        Please fill all Fields
      </div>
      <InputRow
        value={name}
        name="dessert"
        label="Dessert *"
        onChange={setName}
      />
      <InputRow
        value={calories}
        name="calories"
        label="Calories *"
        onChange={setCalories}
      />
      <InputRow
        value={fat}
        name="fat"
        label="Fat *"
        onChange={setFat}
      />
      <InputRow
        value={carb}
        name="carb"
        label="Carbs *"
        onChange={setCarb}
      />
      <InputRow
        value={protien}
        name="protien"
        label="Protien *"
        onChange={setProtien}
      />
      <Button
        className="mt3"
        disabled={
          !name || !calories || !fat || !carb || !protien
        }
        onClick={() => {
          onCreate({
            name,
            calories,
            carb,
            fat,
            protien,
          })
        }}
      >
        Create
      </Button>
    </div>
  )
}

export default (props:any) => (
  <AppContext.Consumer>
    {
      ({ onCreate }) => 
      <CreateForm
        onCreate={onCreate}
        {...props} />
    }
  </AppContext.Consumer>
)
