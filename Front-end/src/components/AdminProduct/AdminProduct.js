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
  const [stateProduct, setStateProduct] = useState({
    id: "",
    title: "",
    price: "",
    categorySlug: "",
    color: "",
    slug: "",
    size: "",
    description: "",
  });
  const [stateProductDetail, setStateProductDetail] = useState({
    id: "",
    title: "",
    price: "",
    categorySlug: "",
    color: "",
    slug: "",
    size: "",
    description: "",
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
      price: "189000",
      title: "Áo thun Dinosaur 01",
      categorySlug: "ao-thun",
      color: "white, red, black",
      slug: "ao-thun-dinosaur-01",
      size: "s, m, l, xl",
      description: "Áo khoắc Bomber"
    },
    {
      key: "2",
      price: "189000",
      title: "Áo thun Dinosaur 02",
      categorySlug: "ao-thun",
      color: "white, red, black",
      slug: "ao-thun-dinosaur-01",
      size: "s, m, l, xl",
      description: "Áo khoắc Bomber"
    },
    {
      key: "3",
      price: "189000",
      title: "Áo thun Dinosaur 03",
      categorySlug: "ao-thun",
      color: "white, red, black",
      slug: "ao-thun-dinosaur-01",
      size: "s, m, l, xl",
      description: "Áo khoắc Bomber"
    },
    {
      key: "4",
      price: "189000",
      title: "Áo thun Dinosaur 04",
      categorySlug: "ao-thun",
      color: "white, red, black",
      slug: "ao-thun-dinosaur-01",
      size: "s, m, l, xl",
      description: "Áo khoắc Bomber"
    },
    {
      key: "5",
      price: "189000",
      title: "Áo thun Dinosaur 05",
      categorySlug: "ao-thun",
      color: "white, red, black",
      slug: "ao-thun-dinosaur-01",
      size: "s, m, l, xl",
      description: "Áo khoắc Bomber"
    }
  ];

  const handleOnChangeDetail = (e) => {
    setStateProductDetail({
      ...stateProductDetail,
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
      title: "Title Product",
      dataIndex: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Category Slug",
      dataIndex: "categorySlug",
    },
    {
      title: "Color",
      dataIndex: "color",
    },
    {
      title: "Slug",
      dataIndex: "slug",
    },
    {
      title: "Size",
      dataIndex: "size",
    },
    {
      title: "Description",
      dataIndex: "description",
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
    setStateProduct({
      ...stateProduct,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <WrapperHeader>Quản lý sản phẩm</WrapperHeader>

      <WrapperButton type="dashed" onClick={showModal}>
        Thêm <PlusOutlined />
      </WrapperButton>

      <ModalComponent
        title="Tạo sản phẩm mới"
        open={isOpenModalCreate}
        onCancel={handleCancel}
        footer={null}
      >
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
          onFinish={onFinish}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="Title Product"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input title product!",
              },
            ]}
          >
            <InputComponent
              value={stateProduct.title}
              onChange={handleOnChange}
              name="title"
            />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input price product!",
              },
            ]}
          >
            <InputComponent
              value={stateProduct.price}
              onChange={handleOnChange}
              name="price"
            />
          </Form.Item>

          <Form.Item
            label="Category Slug"
            name="categorySlug"
            rules={[
              {
                required: true,
                message: "Please input category slug!",
              },
            ]}
          >
            <InputComponent
              value={stateProduct.categorySlug}
              onChange={handleOnChange}
              name="categorySlug"
            />
          </Form.Item>

          <Form.Item
            label="Color"
            name="color"
            rules={[
              {
                required: true,
                message: "Please input color product!",
              },
            ]}
          >
            <InputComponent
              value={stateProduct.color}
              onChange={handleOnChange}
              name="color"
            />
          </Form.Item>

          <Form.Item
            label="Slug"
            name="slug"
            rules={[
              {
                required: true,
                message: "Please input slug!",
              },
            ]}
          >
            <InputComponent
              value={stateProduct.slug}
              onChange={handleOnChange}
              name="slug"
            />
          </Form.Item>

          <Form.Item
            label="Size"
            name="size"
            rules={[
              {
                required: true,
                message: "Please input size product!",
              },
            ]}
          >
            <InputComponent
              value={stateProduct.size}
              onChange={handleOnChange}
              name="size"
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description product!",
              },
            ]}
          >
            <InputComponent
              value={stateProduct.description}
              onChange={handleOnChange}
              name="description"
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 20,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </ModalComponent>

      <ModalComponent
        title="Xóa sản phẩm"
        open={isOpenModalDelete}
        onCancel={() => setIsOpenModalDelete(false)}
        onOk={() => {}}
      >
        <LoadingComponent isLoading={false}>
          <div
            style={{ marginTop: "12px", fontWeight: 600, height: "50px" }}
          >{`Bạn có chắc chắn muốn xóa sản phẩm có name "${isNameUser}" này không?`}</div>
        </LoadingComponent>
      </ModalComponent>

      <DrawerComponent
        title="Thông tin sản phẩm"
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
              label="Title Product"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input title product!",
                },
              ]}
            >
              <InputComponent
                value={stateProductDetail.title}
                onChange={handleOnChange}
                name="title"
              />
            </Form.Item>

            <Form.Item
              label="Price"
              name="price"
              rules={[
                {
                  required: true,
                  message: "Please input price product!",
                },
              ]}
            >
              <InputComponent
                value={stateProductDetail.price}
                onChange={handleOnChange}
                name="price"
              />
            </Form.Item>

            <Form.Item
              label="Category Slug"
              name="categorySlug"
              rules={[
                {
                  required: true,
                  message: "Please input category slug!",
                },
              ]}
            >
              <InputComponent
                value={stateProductDetail.categorySlug}
                onChange={handleOnChange}
                name="categorySlug"
              />
            </Form.Item>

            <Form.Item
              label="Color"
              name="color"
              rules={[
                {
                  required: true,
                  message: "Please input color product!",
                },
              ]}
            >
              <InputComponent
                value={stateProductDetail.color}
                onChange={handleOnChange}
                name="color"
              />
            </Form.Item>

            <Form.Item
              label="Slug"
              name="slug"
              rules={[
                {
                  required: true,
                  message: "Please input slug!",
                },
              ]}
            >
              <InputComponent
                value={stateProductDetail.slug}
                onChange={handleOnChange}
                name="slug"
              />
            </Form.Item>

            <Form.Item
              label="Size"
              name="size"
              rules={[
                {
                  required: true,
                  message: "Please input size product!",
                },
              ]}
            >
              <InputComponent
                value={stateProductDetail.size}
                onChange={handleOnChange}
                name="size"
              />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input description product!",
                },
              ]}
            >
              <InputComponent
                value={stateProductDetail.description}
                onChange={handleOnChange}
                name="description"
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
