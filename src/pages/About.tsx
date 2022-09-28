import { setDefaultResultOrder } from 'dns';
import { Link, useSearchParams } from 'react-router-dom';

export const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const setOrder = (order: 'asc' | 'desc') => {
        searchParams.set('order', order)
        setSearchParams(searchParams)
    }
    return(
        <div>
            filtro: {searchParams.get('filter')}<br />
            ordem:  {searchParams.get('order')}
            <hr />
            <button onClick={()=>setOrder('asc')}>asc</button>
            <button onClick={()=>setOrder('desc')}>desc</button>
            <hr />
            SOBRE
            <ul>
                <li><Link to="/sobre/alejandro">alejandro</Link></li>
                <li><Link to="/sobre/fudencio">fudencio</Link></li>
            </ul>
        </div>
    )
}