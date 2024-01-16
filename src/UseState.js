import React from 'react'

function UseState ({ name }) {
  const SECURYTY_CODE = 'paradigma'
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    console.log('Empezando el efecto')

    if (loading) {
      setTimeout(() => {
        console.log('Haciendo validación')

        if (value === SECURYTY_CODE) {
          setError(false)
        } else {
          setError(true)
        }
        setLoading(false)

        console.log('finalizando validación')
      }, 1000)
    }

    console.log('Finalizando el efecto')
  }, [loading])

  return (
        <div>
            <h2>Eliminar UseState</h2>
            <p>Por favor, escribe el código de seguridad.</p>
            {error && (
                <p>Error: el codigo es incorrecto { name}</p>
            )}
             {loading && (
                <p>cargando...</p>
             )}
            <input value={value}
                   onChange={(event) => (setValue(event.target.value))}

                   type="text" placeholder="Código de seguridad"/>
            <button onClick={() => {
              setLoading(!loading)
              setError(false)
            }}>Comprobar</button>
        </div>
  )
}

export { UseState }
