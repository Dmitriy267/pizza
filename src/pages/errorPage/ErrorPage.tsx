import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import './ErrorPage.css';
export function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {isRouteErrorResponse(error)
                    ? `${error.status} ${error.statusText}`
                    : `Unknown Error`}
            </p>
        </div>
    );
}
