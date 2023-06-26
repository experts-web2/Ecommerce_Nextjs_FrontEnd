import React, { useState } from "react";
import styles from "../../../styles/Home.module.scss";
import Link from "next/link";
interface Props {
  item: any;
}

const Card = ({ item }: Props) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${item.image})` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-testid="card"
      >
        {item.spotlight ? null : (
          <Link href={`/collection/${item.url}`}>
            <div
              className={`${styles.cardContent} ${
                hovered ? styles.active : ""
              }`}
            >
              <h2 className={styles.cardBnenrHeading}>{item.title}</h2>
            </div>
          </Link>
        )}
        <div>
          {item?.spotlight ? (
            <div
              className={`${styles.cardContent} ${
                hovered ? styles.active : ""
              }`}
            >
              <div className={styles.cardBnenrHeading}>
                <p className="font-bold">{item.category}</p>
                <p className="font-bold">{item.titleBottom}</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
