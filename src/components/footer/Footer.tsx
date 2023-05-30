import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="max-w-screen-xl mx-4 flex justify-between w-full xl:mx-auto">
          <div className={styles.subContainer}>
            <div className={styles.title}>LET US HELP YOU</div>
            <div className="text-black text-base">
              <Link href="/pages/real-customer-reviews">
                Real Customer Reviews
              </Link>
            </div>
            <div className="text-black text-base">
              <Link href="/returnExchangePolicy">Exchange Policy</Link>
            </div>
            <div className="text-black text-base">
              <Link href="/shippingDetails ">Shipping Policy</Link>
            </div>
            <div className="text-black text-base">
              <Link href="/solotoInfo ">FAQs</Link>
            </div>
          </div>
          <div className={styles.subContainer}>
            <div className={styles.title}>ABOUT SOLOTO</div>
            <div className="text-black text-base">
              <Link href="/aboutUs">Who we are</Link>
            </div>
            <div className="text-black text-base">
              <Link href="/contactUs">Contact Us</Link>
            </div>
            <div className="text-black text-base">
              <Link href="/privacyPolicy">Privacy Policy</Link>
            </div>
            <div className="text-black text-base">
              <Link href="/termsAndConditions">Terms &amp; Conditions</Link>
            </div>
          </div>
          <div className={styles.subContainer}>
            <div className={styles.title}>STAY CONNECTED</div>
            <div className="text-black text-base">
              <Link href="/pages/sign-up-for-updates">SIGN UP FOR UPDATES</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
