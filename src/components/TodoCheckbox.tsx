import React from "react";
import styled from 'styled-components';

interface TodoCheckboxProps {
  checked: boolean,
  onToggle: () => void;
}

export const TodoCheckbox: React.FC<TodoCheckboxProps> = ({
  checked,
  onToggle
}) => {
    return <Wrapper>
      <label className="box">
        <input type="checkbox" checked={checked} onChange={onToggle} />
        <span className="mark"></span>
      </label>
    </Wrapper>
};

const Wrapper = styled.div`
  width: 50px; 
  margin-top: 20px;
  text-align: left;
  .box {
    display: block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    font-size: 32px;
  }
  input[type=checkbox] {
    visibility: hidden;
  }
  .mark {
    position: absolute;
    top: 0;
    left: 0;
    height: 32px;
    width: 32px;
    background-color: #f1f1f1 !important;
    border-radius: 5px;
  }
  .box:hover input + .mark {
    background-color: #e3e3e3!importan !important;
  }
  .box input:checked + .mark {
    background-color: #8ebf42 !important;
  }
  .mark:after {
    content: "";
    position: absolute;
    display: none;
  }
  .box input:checked + .mark:after {
    display: block;
  }
  .box .mark:after {
    left: 9px;
    bottom: 7px;
    width: 14px;
    height: 26px;
    border: solid #fff; /*#eee;*/
    border-width: 0 4px 4px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

export default TodoCheckbox;
