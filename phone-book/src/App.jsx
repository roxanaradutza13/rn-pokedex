import { useState } from "react";
import React from "react";
import "./App.css";
import BaseDatos from ".BaseDatoas.json";

function App() {
  const [nombreGuardar, setNombreGuardar] = useState<string>("");
  const [telefonoGuardar,setTelefonoGuardar] = useState<string>("");
  const [baseDatos, setBaseDatos] = useState<Contacto[]>([]);
  
 const guardarContacto = () => {
  if(nombreGuardar && telefonoGuardar){
      const nuevoContacto: Contacto = {nombre: nombreGuardar, telefono: telefonoGuardar};
      setBaseDatos([...baseDatos, nuevoContacto]);
      setNombreGuardar("");
      setTelefonoGuardar("");
}
 };

 const exportarJSON = ()=> {
  const jsonBaseDatos = JSON.stringify(baseDatos);
  const blob = new Blob([jsonBaseDatos], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement("a");
  a.download = "basededados.json";
  a.href = url;
  a.click();
};

return(
  <div>
      <input type="text" id= "nombre" value={nombreGuardar}
      onChange={(e) => setNombreGuardar(e.target.value)}
      placeholder="Nombre"
      />
      <input type="text" id="telefono" value={telefonoGuardar}
      onChange={(e) => setTelefonoGuardar(e.target.value)}
      placeholder="Teléfono"
      />
      <button onClick={guardarContacto}>Guardar Contacto</button>
      <table id="tabla">
      <thead>
          <tr>
              <th>Nombre</th>
              <th>Teléfono</th>
       </tr>
       </thead>
       <tbody>
          {baseDatos.map((contacto, index) => (
              <tr key={index}>
                  <td>{contacto.nombre}</td>
                  <td>{contacto.telefono}</td>
                  </tr>
          ))}
       </tbody>
      </table>
      <button onClick={exportarJSON}>Exportar JSON</button>
  </div>
);
          }
 
          export default App();
