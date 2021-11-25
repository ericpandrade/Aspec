import styles from "./style.module.scss";
import WorldMap from "../../assets/Map.png";
import FormImage from "../../assets/Form.jpeg";

const Product = () => {
  return (
    <div className={styles.ProductContainer} id="ProductPage">
      <div className={styles.IntroductionProduct}>
        <div>
          <h1>
            We Have Branches All <br />
            Over The World
          </h1>

          <p>
            The gradual accumulation of information about atomic and <br />
            small-scale behaviour during the first quarter of the 20th <br />
            century, which gave some indications about how small things <br />
            do behave, produced an increasing confusion which was <br />
            Heisenberg, and Born.
          </p>
        </div>
        <img src={WorldMap} alt="World Map" />
      </div>

      <div className={styles.Form}>
        <img src={FormImage} alt="People hugging" />
        <div>
          <h1>Book Appointment</h1>
          <div>
            <div>
              <input type="text" placeholder="Full Name *" required />
            </div>
            <div>
              <input type="email" placeholder="example@gmail.com" required />
            </div>
            <div>
              <select disabled>
                <option>Please Select</option>
              </select>
            </div>
            <div>
              <select disabled>
                <option>4:00 Avaiable</option>
              </select>
            </div>
          </div>
          <button>Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
