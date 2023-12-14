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
  const [stateContact, setStateContact] = useState({
    id: "",
    userName: "",
    phone: "",
    address: "",
    email: "",
    userRequest: "",
  });
  const [stateContactDetail, setStateContactDetail] = useState({
    id: "",
    userName: "",
    phone: "",
    address: "",
    email: "",
    userRequest: "",
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
      name: "Trần Tùng",
      email: "trantung310502@gmail.com",
      phone: "0123456789",
      address: "New York No. 1 Lake Park",
      userRequest: "Request of user"
    },
    {
      key: "2",
      name: "Nguyen Van A",
      email: "a@gmail.com",
      phone: "0123456789",
      address: "New York No. 1 Lake Park",
      userRequest: "Request of user"
    },
    {
      key: "3",
      name: "Nguyen Van B",
      email: "b@gmail.com",
      phone: "0123456789",
      address: "New York No. 1 Lake Park",
      userRequest: "Request of user"
    },
    {
      key: "4",
      name: "Nguyen Van C",
      email: "c@gmail.com",
      phone: "0123456789",
      address: "New York No. 1 Lake Park",
      userRequest: "Request of user"
    },
    {
      key: "5",
      name: "Nguyen Van D",
      email: "d@gmail.com",
      phone: "0123456789",
      address: "New York No. 1 Lake Park",
      userRequest: "Request of user"
    },
  ];

  const handleOnChangeDetail = (e) => {
    setStateContactDetail({
      ...stateContactDetail,
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
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a?.name?.length - b?.name?.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email?.length - b.email?.length,
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Request",
      dataIndex: "userRequest",
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
    setStateContact({
      ...stateContact,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <WrapperHeader>Quản lý liên hệ</WrapperHeader>

      <ModalComponent
        title="Xóa liên hệ"
        open={isOpenModalDelete}
        onCancel={() => setIsOpenModalDelete(false)}
        onOk={() => {}}
      >
        <LoadingComponent isLoading={false}>
          <div
            style={{ marginTop: "12px", fontWeight: 600, height: "50px" }}
          >{`Bạn có chắc chắn muốn xóa liên hệ của user name "${isNameUser}" này không?`}</div>
        </LoadingComponent>
      </ModalComponent>

      <DrawerComponent
        title="Thông tin liên hệ"
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
              label="User name"
              name="userName"
              rules={[
                {
                  required: true,
                  message: "Please input your user name!",
                },
              ]}
            >
              <InputComponent
                value={stateContactDetail.userName}
                onChange={handleOnChangeDetail}
                name="userName"
              />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone!",
                },
              ]}
            >
              <InputComponent
                value={stateContactDetail.phone}
                onChange={handleOnChangeDetail}
                name="phone"
              />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                },
              ]}
            >
              <InputComponent
                value={stateContactDetail.address}
                onChange={handleOnChangeDetail}
                name="address"
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <InputComponent
                value={stateContactDetail.email}
                onChange={handleOnChangeDetail}
                name="email"
              />
            </Form.Item>

            <Form.Item
              label="User Request"
              name="userRequest"
              rules={[
                {
                  required: true,
                  message: "Please input your user request!",
                },
              ]}
            >
              <InputComponent
                value={stateContactDetail.userRequest}
                onChange={handleOnChangeDetail}
                name="userRequest"
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
