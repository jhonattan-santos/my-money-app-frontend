import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Tab from '../common/tabs/tabs'
import TabsHeader from '../common/tabs/tabsHeader'
import TabContents from '../common/tabs/tabsContent'
import TabHeader from '../common/tabs/tabHeader'
import TabContent from '../common/tabs/tabContent'
import { create, init, update, remove } from './billingCycleActions'

import BillingCycleList from './billingCycleList'
import Form from './billingCycleForm'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamento' small='Cadastro'/>
                <Content>
                    <Tab>
                        <TabsHeader>
                            <TabHeader icon='bars' label='Listar' target='tabList'/>
                            <TabHeader icon='plus' label='Incluir' target='tabCreate'/>
                            <TabHeader icon='edit' label='Alterar' target='tabUpdate'/>
                            <TabHeader icon='trash-o' label='Excluir' target='tabDelete'/>
                        </TabsHeader>
                        <TabContents>
                            <TabContent id='tabList'>
                                <BillingCycleList />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form 
                                    onSubmit={this.props.create} 
                                    submitClass='primary' 
                                    submitLabel='Criar' />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form 
                                    onSubmit={this.props.update}
                                    submitClass='primary' 
                                    submitLabel='Atualizar' />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form 
                                    onSubmit={this.props.remove} 
                                    readOnly={true}
                                    submitClass='danger' 
                                    submitLabel='Deletar'/>
                            </TabContent>
                        </TabContents>
                    </Tab>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    init,
    create,
    update,
    remove,
}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)