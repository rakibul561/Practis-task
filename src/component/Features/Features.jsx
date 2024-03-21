/* eslint-disable react/prop-types */
import { AiFillCheckCircle } from "react-icons/ai";


const Features = ({ feature }) => {
    return (
        <div>

            <p className="flex items-center "> <AiFillCheckCircle className="text-green-500 mr-2"> </AiFillCheckCircle> {feature}</p>

        </div>
    );
};

export default Features;