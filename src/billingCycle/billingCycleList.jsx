import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './billingCycleActions'
import IconButton from '../common/layout/iconButton'

class BillingCycleList extends Component {
    
    componentWillMount() {
        this.props.getList()    
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <IconButton color='warning' icon='pencil' onClick={() => this.props.showUpdate(bc)}/>
                    <IconButton color='danger' icon='trash-o' onClick={() => this.props.showDelete(bc)}/>
                </td>
            </tr>
        ))
    }
    
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch) 
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)