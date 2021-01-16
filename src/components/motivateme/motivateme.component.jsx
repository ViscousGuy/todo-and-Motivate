import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Spin } from "antd";
import "./motivateme.styles.scss";

const MotivateMeCard = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl =
      "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    async function fetchQuote() {
      const response = await axios.get(proxyUrl + apiUrl);
      setQuote(response.data);
      setLoading(false);
    }
    fetchQuote();
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinner">
          <Spin />
        </div>
      ) : (
        <>
          <Card
            bordered={false}
            style={{ width: 300, margin: "auto", marginTop: "10%" }}
            loading={loading}
          >
            <p>{quote.quoteText}</p>
            <p>
              {quote.quoteAuthor ? <span>--- {quote.quoteAuthor}</span> : ""}
            </p>
          </Card>
        </>
      )}
    </>
  );
};

export default MotivateMeCard;
