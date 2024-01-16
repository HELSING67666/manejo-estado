import React from 'react'
import { Loading } from './Loading'

const SECURYTY_CODE = 'paradigma'

class ClassState extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: false,
      loading: false,
      value: ''
    }
  }

  /* componentWillnmount () {
    console.log('componentWillnmount')
  }// Se ejecuta cuando se monta el componente */

  /* componentDidMount () {
    console.log('componentDidMount')
  }// Se ejecuta cuando se montó el componente */

  componentDidUpdate () {
    console.log('Empezando el efecto')

    if (this.state.loading) {
      setTimeout(() => {
        console.log('Haciendo validación')
        if (this.state.value === SECURYTY_CODE) {
          this.setState({ error: false })
        } else {
          this.setState({ error: true })
        }
        this.setState({ loading: false })

        console.log('finalizando validación')
      }, 1000)
    }

    console.log('Finalizando el efecto')
  }// Se ejecuta cuando se actualiza el componente

  render () {
    return (
        <div>
            <h2>Eliminar ClassState</h2>
            <p>Por favor, escribe el código de seguridad.</p>
            {this.state.error && (
                <p>Error: el codigo es incorrecto {this.props.name}</p>
            )
            }
            {this.state.loading &&
                <Loading/>

            }
            <input value={this.state.value} onChange={(event) => {
              this.setState({ value: event.target.value })
            }} type="text" placeholder="Código de seguridad"/>
            <button onClick={() => this.setState({ loading: true, error: false })}>Comprobar</button>
        </div>
    )
  }
}

export { ClassState }
