import './InOutStock.scss';


function InOutStock ({status}) {

    function isInStock () {
        if (status === "In Stock") {
            return true
        }
        return false
    }

    return(
        <p 
            className={`item__item${isInStock() ? "--instock" : "--outstock"}`}>{status?.toUpperCase()}
        </p>
    )
}

export default InOutStock;
