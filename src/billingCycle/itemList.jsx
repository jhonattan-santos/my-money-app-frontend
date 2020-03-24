import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Grid from '../common/layout/grid'
import Input from '../common/form/input'
import IconButton from '../common/layout/iconButton'
import If from '../common/operator/if'


class ItemList extends Component {

    add(index, item = {}) {
        if(!this.props.readOnly) {
            this.props.arrayInsert('billingForm', this.props.field, index, item)
        }
    }

    remove(index) {
        if(!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingForm', this.props.field, index )
        }
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field 
                        name={`${this.props.field}[${index}].name`}
                        component={Input}
                        placeholder='Informe o nome' 
                        readOnly={this.props.readOnly} />
                </td>
                <td>
                    <Field 
                        name={`${this.props.field}[${index}].value`}
                        component={Input}
                        placeholder='Informe valor'
                        readOnly={this.props.readOnly}
                    />                    
                </td>
                <If test={this.props.showStatus}>
                    <td>
                        <Field 
                            name={`${this.props.field}[${index}].status`}
                            component={Input}
                            placeholder='Informe o status'
                            readOnly={this.props.readOnly}
                        />                    
                    </td>
                </If>                
                <td>
                    <IconButton 
                        type='button'
                        color='success' 
                        icon='plus' 
                        onClick={() => this.add(index + 1)} />
                    
                    <IconButton 
                        type='button'
                        color='warning' 
                        icon='copy' 
                        onClick={() => this.add(index + 1, item)}/>
                    
                    <IconButton 
                        type='button'
                        color='danger' 
                        icon='trash-o' 
                        onClick={() => this.remove(index)} />
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.showStatus}>
                                    <th>Status</th>
                                </If>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody> 
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchToProps)(ItemList)