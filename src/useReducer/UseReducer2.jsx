import React, { useState, useReducer } from 'react';
import Student from './Student';

const ACTION_TYPES = {
  add: 'add',
  delete: 'delete',
  isHere: 'isHere',
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case ACTION_TYPES.add:
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        idHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case ACTION_TYPES.delete:
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };
    case ACTION_TYPES.isHere:
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 1,
  students: [
    {
      id: Date.now(),
      name: 'Kae',
      isHere: false,
    },
  ],
};

const UseReducer2 = () => {
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentsInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력해주세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: ACTION_TYPES.add, payload: { name } })}
      >
        추가
      </button>
      {studentsInfo.students.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          dispatch={dispatch}
          id={student.id}
          ACTION_TYPES={ACTION_TYPES}
          isHere={student.isHere}
        />
      ))}
    </div>
  );
};

export default UseReducer2;
