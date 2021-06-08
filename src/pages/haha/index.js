import React, { Component } from 'react'
import { Table ,Checkbox} from 'antd';
import { Card } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];

export default class index extends Component {
  super(){
    this.state({
      rowSelection:''
    })
  }
 
  handleRowSelectChange = selectedRowKeys => {
    // 这里每次打印都会带有上次删除的行数据，selectedRowKeys打印出来是上次+本次数据
    console.log('selectedRowKeys: ', selectedRowKeys)
    
};
    render() {
      const rowSelection = {
        // selectedRow,
        onChange: this.handleRowSelectChange,
      };
        return (
            <div>
        <Table
          columns={columns}
          dataSource={data}
          onChange={this.handleTableChange}
          rowSelection={rowSelection}
      />     
            </div>
        )
    }
}



