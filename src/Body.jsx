import Navbar from "./Navbar";

const Body = ({menuIcon, setMenuIcon}) => {
    return (
        <div className="flex-1">
            
            <Navbar setMenuIcon={setMenuIcon} menuIcon={menuIcon}></Navbar>
            
        </div>
    );
};

export default Body;