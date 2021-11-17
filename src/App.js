import { Button, Pagination, Row, Table } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import "./App.css";

const data = [];
for (let i = 0; i < 102; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  const columns = [
    {
      title: "No.",
      dataIndex: "index",
      render: (_text, _record, index) => (
        <span>{index + 1 + pageSize * (currentPage - 1)}</span>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const dataSourcePage = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const onChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFirstPageButton = () => {
    setCurrentPage(1);
  };

  const handleLastPageButton = () => {
    setCurrentPage(Math.ceil(data.length / pageSize));
  };

  return (
    <div className="App">
      <Table pagination={false} columns={columns} dataSource={dataSourcePage} />
      <Row justify="end" className="pagination-custom">
        <Button
          className="first-page"
          disabled={currentPage === 1}
          onClick={handleFirstPageButton}
        >
          {"<<"}
        </Button>
        <Pagination
          // defaultCurrent={1}
          current={currentPage}
          total={data.length}
          onChange={onChangePage}
          showSizeChanger={false}
        />
        <Button
          className="last-page"
          disabled={currentPage === Math.ceil(data.length / pageSize)}
          onClick={handleLastPageButton}
        >
          {">>"}
        </Button>
      </Row>
    </div>
  );
}

export default App;
