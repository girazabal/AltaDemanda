import React from "react";

const Contact =()=>{
    return(
        <form>
        <fieldset>
            <legend className="form-group row mx-3 my-3 font-size">Dejanos tu e-mail con la consulta que quieras hacer y nosotros te contactamos</legend>
                <div className="col-sm-10">
                </div>
                <div className="form-group row mx-2">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Ingrese su e-mail</label>
                    <input type="email" className="form-control row mx-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group row mx-2">
                    <label htmlFor="exampleTextarea" className="form-label mt-4">Deja tu consulta</label>
                    <textarea className="form-control row mx-2" id="exampleTextarea" rows={3} defaultValue={""} />
                </div>
                <button type="submit" className="btn btn-primary row mx-3 my-3">Enviar</button>
        </fieldset>
        </form>
    )
}

export default Contact;