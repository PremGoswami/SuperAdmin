import LeftMenu from "../left-menu/left-menu";
import Header from "../Header/header";

const RightSection = () => {
    return(
        <div style={{display : 'flex'}}>
            <LeftMenu/>
            <Header/>
        </div>
    )
}

export default RightSection