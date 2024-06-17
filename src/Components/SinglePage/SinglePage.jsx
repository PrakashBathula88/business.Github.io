import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdLocalOffer } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import "./SinglePage.css";

const SinglePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="All_page">
      <span>
        <img
          className="img_tag_hovering"
          src={product.image}
          alt={product.title}
        />
      </span>
      <div className="button_container">
        <button>Add To Cart</button>
        <button>Buy Now</button>
      </div>
      <div>
        <div className="PRODUCT">
          <h1>{product.title}</h1>
          <p>27,966 Ratings & 1,778 Reviews</p>
          <p>Extra ₹13901 off</p>
          <div className="price_section">
            ₹ {product.price}
            <p className="old_price">
              <s>₹79,900</s> 19% off
            </p>
          </div>
          <div className="offer_section">
            <h3>Available offers</h3>
            <div>
              <MdLocalOffer style={{ color: "green" }} />
              Bank Offer 5% Cashback on Flipkart Axis Bank Card T&C
            </div>
            <div>
              <MdLocalOffer style={{ color: "green" }} />
              Bank Offer 10% instant discount on SBI Credit Card Transactions,
              up to ₹750 on orders of ₹5,000 and above T&C
            </div>
            <div>
              <MdLocalOffer style={{ color: "green" }} />
              Bank Offer 10% instant discount on SBI Credit Card EMI
              Transactions, up to ₹1,250 on orders of ₹5,000 and above T&C
            </div>
            <div>
              <MdLocalOffer style={{ color: "green" }} />
              Special Price Get extra ₹13901 off (price inclusive of
              cashback/coupon) T&C
            </div>
          </div>
          <div className="warranty_section">
            <p>
              1 Year Warranty for Phone and 6 Months Warranty for In-Box
              Accessories
            </p>
          </div>
          <div className="highlight_section">
            <div>
              <h2>Storage</h2>
              <div className="storage_options">
                <span>128 GB</span>
                <span>256 GB</span>
                <span>512 GB</span>
              </div>
            </div>
            <div>
              <h3>Highlights</h3>
              <ul>
                <li>
                  <LuDot />
                  128 GB ROM
                </li>
                <li>
                  <LuDot />
                  15.49 cm (6.1 inch) Super Retina XDR Display
                </li>
                <li>
                  <LuDot /> 48MP + 12MP | 12MP Front Camera
                </li>
                <li>
                  <LuDot /> A16 Bionic Chip, 6 Core Processor Processor
                </li>
              </ul>
            </div>
          </div>
          <h2>Description</h2>
          <p className="description">{product.description}</p>
          {/* <div className="product_description">
            <h2>Product Description</h2>
            <h2>Dynamic Island</h2>
            <p>
              Dynamic Island bubbles up alerts and Live Activities — so you
              don’t miss them while you’re doing something else. You can track
              your next ride, see who’s calling, check your flight status, and
              so much more.
            </p>
            <img
              src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/2a68bc53a5b740068a62b8140a19770e_18a8cada497_1.jpeg?q=90"
              alt="Dynamic Island"
              style={{ marginLeft: "80px", marginTop: "-100px" }}
            />
            <img
              src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/af0f9e1e23c042ce9d8f27b02bb996d3_18a8cacbaad_HighlyDurable.jpeg?q=90"
              alt="Highly Durable"
              style={{ marginLeft: "80px", marginTop: "-50px" }}
            />
            <p style={{ marginLeft: "200px", marginTop: "-100px" }}>
              Highly Durable The innovative new design features back glass that
              has color infused throughout the material. A custom dual
              ion-exchange process for the glass, and an aerospace-grade
              aluminum enclosure, help make the iPhone 15 incredibly durable.
            </p>
          </div> */}
        </div>
      </div>
      {/* <div className="footer">
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li>Contact us</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Flipkartstories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Group Companies</h3>
          <ul>
            <li>Myntra</li>
            <li>Flipkart Wholesale</li>
            <li>Cleartrip</li>
            <li>Shortify</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Help</h3>
          <ul>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FaQ</li>
            <li>Report Infringement</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Consumer Policy</h3>
          <ul>
            <li>Cancellation & Returns</li>
            <li>Terms of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>EPR Compliance</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Mail Us</h3>
          <ul>
            <li>Flipkart Internet Private Limited,</li>
            <li>Buildings Alyssa, Begonia &</li>
            <li>Clove Embassy Tech Village,</li>
            <li>Outer Ring Road, Devarabeesanahalli Village,</li>
            <li>Bengaluru, 560103,</li>
            <li>Karnataka, India</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default SinglePage;
