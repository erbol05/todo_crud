import React, { useEffect, useState } from "react";
import scss from "./Welcome.module.scss";
import axios from "axios";
const Welcome = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [prof, setProf] = useState("");
  const [univer, setUniver] = useState("");
  const [product, setProduct] = useState([]);
  const postFunc = async () => {
    if (
      name.trim() == "" ||
      phone.trim() == "" ||
      prof.trim() == "" ||
      univer.trim() == ""
    ) {
      alert("толук толтур");
    } else {
      const newe = {
        name: name,
        phone: phone,
        prof: prof,
        univer: univer,
      };
      await axios.post(
        "https://api.elchocrud.pro/api/v1/f31efbeba9b7ed8753457db75fed4f48/swa",
        newe
      );
      setName("");
      setPhone("");
      setProf("");
      setUniver("");
    }
  };
  const getProduct = async () => {
    const { data } = await axios.get(
      "https://api.elchocrud.pro/api/v1/f31efbeba9b7ed8753457db75fed4f48/swa"
    );
    setProduct(data);
  };
  console.log(product);

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className={scss.welcome}>
      <div className="container">
        <div className={scss.content}>
          <h1>Салам</h1>
          <div className={scss.text}>
            <input
              type="text"
              placeholder="Атыныз"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              placeholder="Телефон номериниз"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <input
              type="text"
              placeholder="Кесибиниз"
              onChange={(e) => setProf(e.target.value)}
              value={prof}
            />
            <input
              type="text"
              placeholder="Окуп жаткан жериниз"
              onChange={(e) => setUniver(e.target.value)}
              value={univer}
            />
            <button onClick={postFunc}>Кошуу</button>
          </div>
          <div className={scss.product}>
            {product.map((el) => (
              <div className={scss.pro}>
                <h1>аты: {el.name}</h1>
                <h1>
                  номери: <span>{el.phone}</span>
                </h1>
                <h2>
                  кесиби: <span>{el.prof}</span>
                </h2>
                <h3>
                  окуусу: <span>{el.univer}</span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
