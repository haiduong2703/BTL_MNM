import { WrapperButton, WrapperHeader, WrapperUpload } from "./styles";
import TableComponent from "../TableComponent/TableComponent";
import { Button, Form, Space } from "antd";
import { useEffect, useRef, useState } from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import InputComponent from "../InputComponent/InputComponent";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { useSelector } from "react-redux";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const AdminProduct = () => {
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [stateOrder, setStateOrder] = useState({
    codeOrder: "",
    dateBook: "",
    dateDelivery: "",
    totalPrice: "",
    status: "",
    code: "",
  });
  const [stateOrderDetail, setStateOrderDetail] = useState({
    codeOrder: "",
    dateBook: "",
    dateDelivery: "",
    totalPrice: "",
    status: "",
    code: "",
  });
  const [isRowSelected, setIsRowSelected] = useState("");
  const [isNameUser, setIsNameUser] = useState("");

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const user = useSelector((state) => state.user);

  const [form] = Form.useForm();

  const data = [
    {
      key: "1",
      codeOrder: "1",
      dateBook: "1/1/2020",
      dateDelivery: "3/1/2020",
      totalPrice: "200000",
    },
    {
      key: "2",
      codeOrder: "2",
      dateBook: "1/1/2020",
      dateDelivery: "3/1/2020",
      totalPrice: "200000",
    },
    {
      key: "3",
      codeOrder: "3",
      dateBook: "1/1/2020",
      dateDelivery: "3/1/2020",
      totalPrice: "200000",
    },
    {
      key: "4",
      codeOrder: "4",
      dateBook: "1/1/2020",
      dateDelivery: "3/1/2020",
      totalPrice: "200000",
    },
    {
      key: "5",
      codeOrder: "5",
      dateBook: "1/1/2020",
      dateDelivery: "3/1/2020",
      totalPrice: "200000",
    }
  ];

  const handleOnChangeDetail = (e) => {
    setStateOrderDetail({
      ...stateOrderDetail,
      [e.target.name]: e.target.value,
    });
  };

  const handleGetDetailProduct = () => {
    setIsOpenModalEdit(true);
  };

  const renderIcons = () => {
    return (
      <div>
        <DeleteOutlined
          style={{
            fontSize: "26px",
            color: "red",
            cursor: "pointer",
            marginRight: "10px",
          }}
          onClick={() => setIsOpenModalDelete(true)}
        />
        <EditOutlined
          style={{ fontSize: "26px", color: "orange", cursor: "pointer" }}
          onClick={handleGetDetailProduct}
        />
      </div>
    );
  };

  const columns = [
    {
      title: "Code Order",
      dataIndex: "codeOrder",
    },
    {
      title: "Date Book",
      dataIndex: "dateBook",
    },
    {
      title: "Date Delivery",
      dataIndex: "dateDelivery",
    },
    {
      title: "Price",
      dataIndex: "totalPrice",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: renderIcons,
    },
  ];

  const showModal = () => {
    setIsOpenModalCreate(true);
  };

  const handleCancel = () => {
    setIsOpenModalCreate(false);
  };

  const onFinish = () => {};

  const handleOnChange = (e) => {
    setStateOrder({
      ...stateOrder,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <WrapperHeader>Quản lý đơn hàng</WrapperHeader>

      <ModalComponent
        title="Xóa đơn hàng"
        open={isOpenModalDelete}
        onCancel={() => setIsOpenModalDelete(false)}
        onOk={() => {}}
      >
        <LoadingComponent isLoading={false}>
          <div
            style={{ marginTop: "12px", fontWeight: 600, height: "50px" }}
          >{`Bạn có chắc chắn muốn xóa đơn hàng có name "${isNameUser}" này không?`}</div>
        </LoadingComponent>
      </ModalComponent>

      <DrawerComponent
        title="Thông tin đơn hàng"
        open={isOpenModalEdit}
        onClose={() => setIsOpenModalEdit(false)}
        width="50%"
      >
        <LoadingComponent isLoading={false}>
          <Form
            name="basic"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 20,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={() => {}}
            autoComplete="off"
            form={form}
          >
            <Form.Item
              label="Date book"
              name="dateBook"
              rules={[
                {
                  required: true,
                  message: "Please input date book!",
                },
              ]}
            >
              <InputComponent
                value={stateOrderDetail.dateBook}
                onChange={handleOnChangeDetail}
                name="dateBook"
              />
            </Form.Item>

            <Form.Item
              label="Date Delivery"
              name="dateDelivery"
              rules={[
                {
                  required: true,
                  message: "Please input dateDelivery!",
                },
              ]}
            >
              <InputComponent
                value={stateOrderDetail.dateDelivery}
                onChange={handleOnChangeDetail}
                name="dateDelivery"
              />
            </Form.Item>

            <Form.Item
              label="Price"
              name="totalPrice"
              rules={[
                {
                  required: true,
                  message: "Please input total price!",
                },
              ]}
            >
              <InputComponent
                value={stateOrderDetail.totalPrice}
                onChange={handleOnChangeDetail}
                name="totalPrice"
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 21,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        </LoadingComponent>
      </DrawerComponent>

      <div style={{ marginTop: "20px" }}>
        <TableComponent
          isLoading={false}
          columns={columns}
          data={data}
          handleDelete={() => {}}
          onRow={(record) => {
            return {
              onClick: (event) => {
                setIsRowSelected(record._id);
                setIsNameUser(record.name);
              },
            };
          }}
        />
      </div>
    </div>
  );
};

export default AdminProduct;
