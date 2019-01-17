import React, { Component } from 'react'
import { connect } from 'react-redux'

import Environment from './Environment'
import { setHome, setBoards} from '../../../actions/actions'
import API from '../../../APIs/API'

class Dashboard extends Component {


    render(){
        return <div>
            <Environment/>
        </div>
    }
}



export default Dashboard