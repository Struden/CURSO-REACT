const Loader = ({titulo = 'Cargando...'}) => {
    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary me-3" role="status" aria-hidden="true"></div>
                <span>{titulo}</span>
            </div>
        </div>
    )
}
export { Loader }