import { FunctionComponent } from "react";
import moment from "moment";

const Footer: FunctionComponent = () => {
  return <footer className="footer footer-center p-4 bg-base-300 text-base-content font-sans">
    <div>
      <p>Copyright © {moment().format("YYYY")} - All right reserved by Starlaxmi</p>
    </div>
  </footer>;
};

export default Footer