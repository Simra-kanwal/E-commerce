
import Card from '../Home/Card';
import './GridView.css';

const GridView = ({productsData}) => {

    return (
        <div className='product-list'>
            {productsData.map((productList) => {
                return (
                    <ul key={productList.id}>
                        <Card Products={productList} />
                    </ul>
                )
            })}
        </div>
    )
}

export default GridView
