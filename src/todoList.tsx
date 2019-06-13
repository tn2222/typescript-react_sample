import * as React from "react";
import { Theme, withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


class TodoList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.top}>
                {this.props.items.map((item, i) => (
                    <div key={item.id} className={classes.row}>
                        <IconButton 
                            aria-label="Delete" 
                            className={classes.margin} 
                            onClick={() => this.handleDelete(i)}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    {item.text}</div>
                ))}
            </div>
        );
    }

    handleDelete(i) {
        this.state.items.splice(i, 1);
        this.setState((prevState) => ({
            items: prevState.items
        }));
    }    
}

const styles = (theme: Theme) => ({
    top: {
        marginTop: '10px'
    },
    row: {
        padding: '10px',
        borderBottom: 'solid',
        borderBottomWidth: 'thin',
        borderBottomColor: 'lightgrey'
    },
});

export default withStyles(styles, { withTheme: true })(TodoList);