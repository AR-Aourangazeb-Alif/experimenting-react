import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const Navbar = ({menuIcon, setMenuIcon}) => {


    return (
        <div className="bg-violet-300 p-6 flex justify-around items-center">

            <div className={`text-2xl p-7 absolute transition-all duration-700 top-0 left-0 text-${menuIcon ? "white" : "grey-500"} cursor-pointer`} onClick={() => setMenuIcon(!menuIcon)}>
                {
                    !menuIcon ? <FiMenu></FiMenu> : <RxCross1></RxCross1>
                }
            </div>

            <h1 className="text-2xl">Hello World</h1>

            <input type="text" className="rounded-full w-[250px] outline-none px-6 py-1" />

            <button>Login</button>

        </div>
    );
};

export default Navbar;