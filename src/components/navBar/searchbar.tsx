import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../../styles/searchNav.module.scss";
import { BiSearch } from "react-icons/bi";
import { Badge } from "@nextui-org/react";
import {useSelector} from 'react-redux'
import { RootState } from "@/store/store";

const SearchBar = ({
  textColor,
  title,
  fontSize,
  searchText,
  setSearch,
  search,
}: any) => {
  const [totalCard, setTotalCard] = useState<any>([]);
  const count = useSelector((state: RootState) => state);

  useEffect(() => {
    setTotalCard(count?.cart?.items);
  }, [count]);

  return (
    <>
      <div>
        <nav className={styles.navbar}>
          <div className={styles.icons}>
            <div
              className={styles.favoriteHeading}
              style={{ color: textColor }}
            >
              Your Favorite Shoe Marketplace 👞 👠 👟
            </div>
          </div>
          <div
            className={styles.contact}
            style={{ color: textColor, fontSize: fontSize }}
          >
            <Link
              href="/"
              className={styles.logo}
              style={{ color: textColor, fontSize: fontSize }}
            >
              <p className="font-bold text-3xl">{title} Shoe Market</p>
            </Link>
          </div>
          <div className={styles.auth}>
            <div className={styles.search_container}>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder={
                  searchText || "Search for products, brands and more"
                }
                name="search"
                className={styles.search}
              />
              <div className={styles.shoppingCart}>
                <BiSearch className={styles.search_icon} />
                <Link href={`/checkout/${3}`} className={styles.shoopingCart}>
                  <FaShoppingCart size={30} />
                </Link>
              </div>

              <Badge
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "black",
                  position: "absolute",
                  left: "-9px",
                  top: "-26px",
                }}
                size="sm"
              >
                {totalCard?.length}
              </Badge>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SearchBar;
