function Home(){
    return(
        <section className="container text-center mt-3">
            <div className="jumbotron">
                <h1 className="display-4">Hello amiguit@!</h1>
                <p className="lead">Esto es una prueba que permite crear clientes, con multiples direcciones</p>
                <hr className="my-4"/>
                <p>Creada por Junior Mena</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg"
                       href="https://github.com/juniormena/client-managment"
                       role="button" target="_blank" rel="noreferrer">
                        Click aqui para ir al repositorio en github
                    </a>
                </p>
            </div>
        </section>

    )
}

export default Home;
