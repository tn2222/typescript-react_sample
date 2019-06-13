import * as React from "react";
import { Theme, withStyles, FormControl, InputLabel, Input, InputAdornment, Button, Icon } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TodoList from './todoList';

 class TodoApp extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.state = {items: [], text: ''};
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.container}>
                <Paper className={classes.paper}>

                    <h3>TODO</h3>
                    <FormControl onSubmit={this.handleSubmit}>
                        <Input onChange={this.handleChange} value={this.state.text} className={classes.input}/>
                    </FormControl>
                    <Button
                        onClick={this.handleSubmit}
                        variant="contained"
                        color="primary"
                        className={classes.button}>
                        Add
                    </Button>
                    <Button 
                        onClick={this.handleClear}
                        variant="contained"
                        className={classes.button}>
                        Cancel
                    </Button>
                    <TodoList items={this.state.items} />
                 </Paper>
            </div>
        );
    }

    handleClear(e: any) {
        this.setState( { text: '' } );
    }

    handleChange(e: any) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e: any) {
        e.preventDefault();
        if (this.state.text == '') {
            alert('テキストボックスが空です。');
            return;
        }
        let newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }

}


const styles = (theme: Theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    paper: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: 30,
        width: '40%',
        // display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
    }),
    input: {
        paddingTop: 16,
        width: '350px',      
    },
    button: {
        margin: theme.spacing(1),
        width:'80px'
    },    
});

export default withStyles(styles, { withTheme: true })(TodoApp);