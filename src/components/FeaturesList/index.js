import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listFeatures, removeFeature } from '../../actions'
import Card from '../Card'
import './FeaturesList.css'


class FeaturesList extends Component {
    constructor(props){
        super(props)
        this.removeItem = this.removeItem.bind(this)
    }
    componentDidMount() {
        this.props.dispatchListFeatures()
    }

    removeItem(id) {
        this.props.dispatchRemoveFeature(id)
    }

    render() {
        return (
            <section className="features-list">
                {this.props.features.map(feature => (
                    <Card
                        key={feature.id}
                        image={feature.imageStandardResolution}
                        text={feature.subtitle ? feature.subtitle : 'Sem legenda'}
                        user={feature.person.fullNameInstagram}
                        click={this.removeItem}
                    />
                ))}
            </section>
        )
    }
}

const mapStateToProps = state => ({
    features: state.features.features
})

const mapDispatchToProps = dispatch => ({
    dispatchListFeatures: () => {
        dispatch(listFeatures())
    },
    dispatchRemoveFeature: id => {
        dispatch(removeFeature(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FeaturesList)