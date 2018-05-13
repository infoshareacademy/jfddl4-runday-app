import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'


const LinkButton = () => (
    <div> 
        <FloatingActionButton
            style={{margin: '5vh 0 5vh 95%'}}
            className="material-icons"
            onClick={() => window.open('http://www.facebook.com/')}
            mini='true'
        > 
            <ActionThumbUp />
        </FloatingActionButton>
    </div>
)
export default LinkButton;