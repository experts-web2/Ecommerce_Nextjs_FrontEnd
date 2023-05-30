import React, { FC, useState, useMemo } from "react";
import MainNavBar from "../MainNavBar";
import Footer from "../footer/footer";
import Search from "../../components/search/Search";
import SearchBar from "../navBar/searchbar";
import MainBar from './../navBar/MainBar';
interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  return (
    <div>
      <div className="max-w-screen-xl mx-4  xl:mx-auto">
      <MainBar />
      </div>
      <div className="max-w-screen-xl mx-4  xl:mx-auto">
      <SearchBar search={search} setSearch={setSearch} />
      </div>
      <MainNavBar />
      {search ? <Search key={search} search={search} /> : <>{children}</>}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
