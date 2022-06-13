import ConsumerTableData from '../TableConsumer/consumer-table'
import Header from "../Header/header"
import LeftMenu from '../left-menu/left-menu'


import './consumer-data.scss'

const ConsumersData = () => {
    return (
        <div className='consumerPage'>
            <LeftMenu />
            <div className='rightContainer'>
                <Header />
                <div className='dataContiner'>
                    <h1>Consumers</h1>
                    <ConsumerTableData />
                </div>
            </div>
        </div>
    )
}

export default ConsumersData