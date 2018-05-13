import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'



export const CategoryOfRun = props => (
	<div>
		<SelectField
			floatingLabelText={'Grounds'}
			value={props.category}
            onChange={props.onSelectChange}
            fullWidth={true}
		>
			<MenuItem value={'city'} primaryText="City" />
			<MenuItem value={'forest'} primaryText="Forest" />
		</SelectField>
	</div>
)


const items = []
for (let i = 2; i <= 20; i++)
	items.push(<MenuItem value={i} key={i} primaryText={i} />)

export class RunnersCount extends React.Component {
	render() {
		return (
			<SelectField
				floatingLabelText={'Number of runers'}
				value={this.props.runners}
				onChange={this.props.onSelectChange}
                maxHeight={100}
                fullWidth={true}
			>
				{items}
			</SelectField>
		)
	}
}
