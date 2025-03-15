import React from "react";
import MyForm1 from "./components/MyForm1";

const App = () => {
  const handleFormSubmit = (data) => {
    console.log("Dữ liệu form:", data);
    // Xử lý dữ liệu form (gửi API, v.v.)
  };

  return (
    <div className="App">
      <h1>Form Đăng Ký</h1>
      <MyForm1 onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
