import { useParams, useNavigate } from 'react-router-dom'

export const AboutItem = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    }
    const handleHomeButton = () => {
        navigate('/sobre');
    }

    return(
        <div>
            SOBRE <strong>{params.slug}</strong>
            <hr />
            <button onClick={handleBackButton}>volta</button>
            <button onClick={handleHomeButton}>sobre</button>
        </div>
    )
}