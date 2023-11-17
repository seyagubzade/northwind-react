import { useEffect, useState } from "react";
import Table from "./components/Table";
import axios from "axios";
import Form from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const BASE_URL = "https://northwind.vercel.app/api/products";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setData([...res.data.reverse()]);
    });
  }, []);

  const deleteItem = (id) => {
    axios.delete(`${BASE_URL}/${id}`).then((res) => {
      setData((prevData) => prevData.filter((item) => item.id !== id));
    });
  };
  const createNewItem = (formData) => {
    axios.post(BASE_URL, formData).then((res) => {
      setData((prevData) => [...prevData, res.data]);
    });
  };

  return (
    <>
      <Header />
      <div className="container-fluid pt-4">
        <Form createNewItem={createNewItem} />
        <Table data={data} deleteItem={deleteItem} />
      </div>
      <Footer />
    </>
  );
}

export default App;
