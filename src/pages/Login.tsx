// import styled from "@emotion/styled";

function Login() {
    return (
        <>
            <div>
                <form>
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <button>login</button>
                    <p>No tienes cuenta?<a href="#">Crea una cuenta</a></p>
                </form>
            </div>
        </>
    );
}

export default Login;