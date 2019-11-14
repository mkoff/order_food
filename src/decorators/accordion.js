import React, {Component}  from 'react';

const accordion = (OriginalComponent) => class WrappedComponent extends Component{
    state = {
        openItemId : null,
        closeItem : true
    }
    render() {
        return <OriginalComponent
            {...this.props}
            openItemId={this.state.openItemId}
            toggleOpen={this.toggleOpen}
            closeItem={this.state.closeItem}
        />;
    }
    toggleOpen = (id) => this.setState({
        openItemId: id,
        closeItem: !this.state.closeItem
    })
 }

 export {accordion}