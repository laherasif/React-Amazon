import './login.css'

export default function Login() {
    return (
        <>
            <div className="loginWrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 "></div>
                        <div className="col-md-4 mt-5">
                            <div className="logo"></div>
                            <div className="singIn_form">
                                <h2>Sign-In</h2>
                                <div className="mb-3">
                                    <label className="form-label">Email or mobile phone number </label>
                                    <input type="email" className="form-control" />
                                </div>
                                <button className="btn_singIn" >SignIn</button>
                            </div>
                            <div className="new_account">
                               <div className="new_account_desc">
                               <h5>New to Amazon</h5>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 "></div>

                </div>
            </div>
        </>
    )
}
