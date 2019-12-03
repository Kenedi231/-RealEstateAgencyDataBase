import React from 'react';
import MaterialTable from 'material-table';

export default class TableComponent extends React.Component {

    state = {
        columns: [
            {title: 'Name', field: 'name'},
            {title: 'Surname', field: 'surname'},
            {title: 'Birth Year', field: 'birthYear', type: 'numeric'},
            {
                title: 'Birth Place',
                field: 'birthCity',
                lookup: {true: 'İstanbul', false: 'Şanlıurfa'},
            },
        ],
        data: [
            {name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: false},
            {
                name: 'Zerya Betül',
                surname: 'Baran',
                birthYear: 2017,
                birthCity: true,
            },
        ],
    };

    addNewRow = newData => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
                this.setState(prevState => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return {...prevState, data};
                });
            }, 600);
        })
    };

    onRowUpdate = (newData, oldData) =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve();
                if (oldData) {
                    this.setState(prevState => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return {...prevState, data};
                    });
                }
            }, 600);
        });

    onRowDelete = oldData =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve();
                this.setState(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return {...prevState, data};
                });
            }, 600);
        });

    render() {
        const {title, columns, data} = this.props;
        return (
            <MaterialTable
                title={title}
                columns={columns}
                data={data}
                editable={{
                    onRowAdd: this.addNewRow,
                    onRowUpdate: this.onRowUpdate,
                    onRowDelete: this.onRowDelete
                }}
            />
        );
    }
}
