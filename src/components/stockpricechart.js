

const StockChart = (props) => {

    return(


    <div className="stock-chart">
        <p>
            Stock Chart
            <br></br>
            {props.stock}
        </p>
    </div>
    )
}

export default StockChart