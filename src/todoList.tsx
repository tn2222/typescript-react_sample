import * as React from "react";
import { Theme, withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
import Done from '@material-ui/icons/Done';



class TodoList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = props.items
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.top}>
                {this.props.items.map((item, i) => (
                    <div key={item.id} className={classes.row}>
                        <IconButton 
                            aria-label="Done" 
                            className={classes.margin} 
                            onClick={() => this.handleDelete(i)}>
                            <Done fontSize="small" />
                        </IconButton>
                    {item.text}</div>
                ))}
            </div>
        );
    }

    handleDelete(i) {
        this.props.items.splice(i, 1);
        this.setState((props) => ({
            items: props.items
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