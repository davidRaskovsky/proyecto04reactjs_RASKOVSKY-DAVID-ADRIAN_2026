import { useState } from "react";
import { Form, Button } from "react-bootstrap"

const Formulario = ({ funcion, comidas, opciones }) => {
    //const nombre = "";
    const [nombre, setNombre] = useState("A");
    const [comida, setComida] = useState("");

    // agregado
    const [subOpcion, setSubOpcion] = useState("");

    const subOpciones = comida ? opciones[comida] : []
    //console.log("paso por aquí y comida tiene "+comida);

    const manejarCambios = (e) => {
        const value = e.target.value;
        setComida(value);
        setSubOpcion("");
    }
    // hasta aquí los cambios

    const procesarDatos = (e) => {
        e.preventDefault();
        const seleccion = {
            nombre: nombre.trim(),
            comida: comida.trim()
        };
        funcion(seleccion);
        setNombre("");
        setComida("");
    };

    return (
        <div>
            <Form onSubmit={procesarDatos}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ingresar Nombre</Form.Label>
                    <Form.Control type="text" placeholder="ingresar un nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                </Form.Group>
                <Form.Select value={comida} onChange={manejarCambios}>
                    <option>Elegir una comida favorita</option>
                    {comidas.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </Form.Select>

                {comida && (
                    <Form.Select id="subOption"
                        value={subOpcion}
                        onChange={(e) => setSubOpcion(e.target.value)}>
                        <option>Selecciona una opción</option>
                        {subOpciones.map((i) => (
                            <option key={i} value={i}>
                                {i}
                            </option>))}
                    </Form.Select>
                )}

                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
        </div>
    )
}

export default Formulario;