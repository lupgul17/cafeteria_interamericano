function AlumnoInfo({ alumno }) {
    if (!alumno) return null;

    return (
        <div className="alumno-info">
            <h3>Información del Alumno</h3>
            <p>👤 Nombre: {alumno.nombre} {alumno.apellido}</p>
            <p>📚 Grado: {alumno.grado}</p>
        </div>
    );
}

export default AlumnoInfo;
