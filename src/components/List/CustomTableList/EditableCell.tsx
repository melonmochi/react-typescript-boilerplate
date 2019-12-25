import React, { FC, useContext } from "react";
import { InputType } from "typings";
import { EditableContext } from "@/components/List/CustomTableList";
import { Form, InputNumber, Input } from "antd";

export interface EditableCellProps {
  inputType: InputType;
  editing: boolean;
  dataIndex: string;
  title: string;
  record: any;
  index: any;
}

export const EditableCell: FC<EditableCellProps> = props => {
  const { getFieldDecorator } = useContext(EditableContext);
  const getInput = () => {
    if (props.inputType === "number") {
      return <InputNumber />;
    }
    return <Input />;
  };

  const {
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  } = props;

  const renderCell = (
    <td {...restProps}>
      {editing ? (
        <Form.Item style={{ margin: 0 }}>
          {getFieldDecorator(dataIndex, {
            rules: [
              {
                required: true,
                message: `Please Input ${title}!`
              }
            ],
            initialValue: record[dataIndex]
          })(getInput())}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );

  return <>{renderCell}</>;
};
