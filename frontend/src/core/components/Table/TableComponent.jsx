import React from 'react';
import MaterialTable from 'material-table';

export default class TableComponent extends React.Component {

    addNewRow = newData => {
        this.props.createNewRow(newData);
        return new Promise(resolve => {
            resolve();
        })
    };

    onRowUpdate = (newData, oldData) =>{
        this.props.updateRow(newData);
        return new Promise(resolve => {
            resolve();
        })
    };

    onRowDelete = oldData => {
        this.props.deleteRow(oldData.id);
        return new Promise(resolve => {
            resolve();
        })
    };

    render() {
        const {title, columns, data, loading} = this.props;
        return (
            <MaterialTable
                title={title}
                columns={columns}
                data={data}
                options={{
                    draggable: false,
                }}
                isLoading={loading}
                editable={{
                    onRowAdd: this.addNewRow,
                    onRowUpdate: this.onRowUpdate,
                    onRowDelete: this.onRowDelete
                }}
            />
        );
    }
}
