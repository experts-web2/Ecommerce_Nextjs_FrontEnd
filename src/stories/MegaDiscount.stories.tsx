import React from "react";
import MegaDiscount from "../components/home/megaDiscount/MegaDiscount";
import { MegaDiscountDela } from "../constants/staticData";
import Card from "@/components/home/cards/card";
export default {
  title: "MegaDiscount",
  component: MegaDiscount,
};



export const withDataSlides = () => (
   <MegaDiscount MegaDiscountDela={MegaDiscountDela} />
  );

  export const withOneDataSlides = () => (
    <MegaDiscount MegaDiscountDela={MegaDiscountDela.slice(0,1)} />
   );
  
   export const withoutDataSlides = () => (
    <MegaDiscount MegaDiscountDela={[]} />
   );

const Template = (args:any) => <MegaDiscount {...args} />;

// export const Default :any= Template.bind({});
// Default.args= {
//   MegaDiscountDela: MegaDiscountDela,
// };

// export const TwoRecords:any = Template.bind({});
// TwoRecords.args = {
//   MegaDiscountDela: MegaDiscountDela
// }
