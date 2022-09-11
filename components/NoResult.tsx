import React from "react";
import { Video } from "../types";

interface IProps {
  text: string;
}

const NoResult = ({ text }: IProps) => {
  return <div>NoResult</div>;
};

export default NoResult;
