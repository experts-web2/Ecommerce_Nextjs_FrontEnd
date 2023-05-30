import React from "react";
import { MdClose } from "react-icons/md";
import { Dialog, IconButton } from "@mui/material";
import { FaPlus, FaMinus } from "react-icons/fa";
const SizeChart = ({ handleClose }: any) => {
  return (
    <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Size Chart</h2>
        <button onClick={handleClose} className="absolute top-2 right-2">
          <MdClose size={24} />
        </button>
      </div>
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Men's Clothing Size Chart</h1>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">UK</th>
              <th className="px-4 py-2">EUR</th>
              <th className="px-4 py-2">USA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">XS</td>
              <td className="border px-4 py-2">44</td>
              <td className="border px-4 py-2">34</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">S</td>
              <td className="border px-4 py-2">46</td>
              <td className="border px-4 py-2">36</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">M</td>
              <td className="border px-4 py-2">48</td>
              <td className="border px-4 py-2">38</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">L</td>
              <td className="border px-4 py-2">50</td>
              <td className="border px-4 py-2">40</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">XL</td>
              <td className="border px-4 py-2">52</td>
              <td className="border px-4 py-2">42</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">XXL</td>
              <td className="border px-4 py-2">54</td>
              <td className="border px-4 py-2">44</td>
            </tr>
          </tbody>
        </table>
      </div>{" "}
      <table className="table-auto w-full"></table>
    </div>
  );
};

export default SizeChart;

// Awaqas123@n
