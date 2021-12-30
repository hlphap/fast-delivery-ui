import clsx from "clsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import localStorage from "local-storage";
import { toast } from "react-toastify";

import styles from "./OrderManagement.module.scss";
import { Grid, SelectInput, TextInput, Button } from "../../components";

const OrderManagement = () => {
  const [districts, setDistricts] = useState();
  const [dvMethods, setDVMethods] = useState();
  const [orders, setOrders] = useState([]);
  const [data, setData] = useState({});

  const columns = [
    { field: "id", headerName: "Mã đơn hàng", flex: 1 },
    { field: "orderName", headerName: "Tên đơn hàng", flex: 1 },
    { field: "orderMoney", headerName: "Tiền thu hộ", flex: 1 },
    { field: "receiverName", headerName: "Tên người nhận", flex: 1 },
    { field: "receiverPhone", headerName: "Số điện thoại", flex: 1 },
    { field: "total", headerName: "Tổng phí giao hàng", flex: 1 },
    { field: "status", headerName: "Trạng thái", flex: 1 },
  ];

  //Get data districts + dvMethod
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/districts")
      .then((res) => {
        setDistricts(res.data.districts);
      })
      .catch((err) => {
        throw new Error(err);
      });
    axios
      .get(process.env.REACT_APP_API_URL + `/dvmethods`)
      .then((res) => {
        setDVMethods(res.data.dvMethods);
      })
      .catch((err) => {
        throw new Error(err);
      });
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/stores/${localStorage.get(
          "storeID"
        )}/orders?orderName=${data.orderName}&orderMoney=${
          data.orderMoney
        }&receiverName=${data.receiverName}&receiverPhone=${
          data.receiverPhone
        }&dvMethod=${
          data.dvMethod && JSON.parse(data.dvMethod)._id
        }&districtID=${data.district && JSON.parse(data.district)._id}`
      )
      .then((res) => {
        const orders = res.data.orders.map((order) => {
          return {
            id: order._id,
            orderName: order.orderName,
            orderMoney: order.orderMoney,
            receiverName: order.receiverName,
            receiverPhone: order.receiverPhone,
            total: order.fee.total,
            status: order.tracking[0].status.name,
          };
        });
        setOrders(orders);
      });
  }, []);

  const handleOnChange = (e) => {
    const newData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(newData);
  };

  // Handle click button Search
  const handleSearch = () => {
    toast.promise(
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/stores/${localStorage.get(
            "storeID"
          )}/orders?orderName=${data.orderName}&orderMoney=${
            data.orderMoney
          }&receiverName=${data.receiverName}&receiverPhone=${
            data.receiverPhone
          }&dvMethod=${
            data.dvMethod && JSON.parse(data.dvMethod)._id
          }&districtID=${data.district && JSON.parse(data.district)._id}`
        )
        .then((res) => {
          const orders = res.data.orders.map((order) => {
            return {
              id: order._id,
              orderName: order.orderName,
              orderMoney: order.orderMoney,
              receiverName: order.receiverName,
              receiverPhone: order.receiverPhone,
              total: order.fee.total,
              status: order.tracking[0].status.name,
            };
          });
          setOrders(orders);
          console.log(res.data.orders);
        }),
      {
        pending: "Đang tìm kiếm",
        success: "Tìm kiếm xong",
        error: "Lỗi",
      }
    );
  };

  return (
    <div className={clsx(styles.orderManagement, "container")}>
      <h1>Quản lý đơn hàng</h1>
      <Grid col={3} mdCol={2} smCol={1} gap={10}>
        <div>
          <TextInput
            title="Tên đơn hàng"
            name="orderName"
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Tiền thu hộ"
            name="orderMoney"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <TextInput
            title="Tên người nhận"
            name="receiverName"
            onChange={(e) => handleOnChange(e)}
          />
          <TextInput
            title="Số điện thoại"
            name="receiverPhone"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <SelectInput
            title="Phương thức vận chuyển"
            name="dvMethod"
            options={dvMethods}
            onChange={(e) => handleOnChange(e)}
          />
          <SelectInput
            title="Tỉnh/ Quận"
            name="district"
            options={districts}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
      </Grid>
      <div className={styles.button}>
        <Button size="sm" onClick={handleSearch}>
          Tìm kiếm
        </Button>
      </div>
      {/* Table */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={orders}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          sx={{
            fontSize: "1.25rem",
            boxShadow: 2,
            border: 2,
            borderColor: "primary.light",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
          }}
        />
      </div>
    </div>
  );
};

export default OrderManagement;
