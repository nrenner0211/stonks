import { SlGraph } from 'react-icons/sl';
import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import { StockDetailPage } from "./StockDetailPage";
import logo from "../assets/images/stockImage.png";

export const StockOverviewPage = () => {
    return(
        <div>
            <div className="title">
                TradeHub <SlGraph />
            </div>
        <AutoComplete />
            <div className="center">
                <img className="logo img-fluid" alt="logo" src={logo}></img>
            </div>
        <StockList />
        <StockDetailPage/>
        </div>
        
    )
}