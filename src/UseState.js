import React from 'react'

function UseState ({ name }) {
  const SECURYTY_CODE = 'paradigma'
  const [state, setState] = React.useState({ error: false, loading: false, value: '' })

  React.useEffect(() => {
    console.log('Empezando el efecto')

    if (state.loading) {
      setTimeout(() => {
        console.log('Haciendo validación')

        if (state.value === SECURYTY_CODE) {
          setState({
            ...state,
            error: false,
            loading: false
          })
        } else {
          setState({
            ...state,
            error: true,
            loading: false
          })
        }

        console.log('finalizando validación')
      }, 1000)
    }

    console.log('Finalizando el efecto')
  }, [state.loading])

  return (
        <div>
            <h2>Eliminar UseState</h2>
            <p>Por favor, escribe el código de seguridad.</p>
            {state.error && (
                <p>Error: el codigo es incorrecto { name}</p>
            )}
             {state.loading && (
                <p>cargando...</p>
             )}
            <input value={state.value}
                   onChange={(event) => (setState({ ...state, value: event.target.value }))}

                   type="text" placeholder="Código de seguridad"/>
            <button onClick={() => {
              setState({ ...state, loading: true, error: false })
            }}>Comprobar</button>
        </div>
  )
}

export { UseState }
