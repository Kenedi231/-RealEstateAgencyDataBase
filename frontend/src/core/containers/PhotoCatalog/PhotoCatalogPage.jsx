import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router";
import LinearProgress from "@material-ui/core/LinearProgress";
import TableComponent from "../../components/Table/TableComponent";
import getColumns from "../../utils/Converter/getColumns";
import COLUMN_TYPE from "../../../constants/columnType";
import getPhotosCatalogAction from "../../../actions/photoCatalog/getPhotosCatalogAction";
import deletePhotoCatalogAction from "../../../actions/photoCatalog/deletePhotoCatalogAction";
import createPhotoCatalogAction from "../../../actions/photoCatalog/createPhotoCatalogAction";
import updatePhotoCatalogAction from "../../../actions/photoCatalog/updatePhotoCatalogAction";

const mapStateToProps = state => ({
    photoCatalogs: state.photoCatalog.photoCatalogs,
});

const mapDispatchToProps = dispatch => ({
    getPhotosCatalogAction: () => dispatch(getPhotosCatalogAction()),
    createPhotoCatalogAction: (data) => dispatch(createPhotoCatalogAction(data)),
    deletePhotoCatalogAction: (id) => dispatch(deletePhotoCatalogAction(id)),
    updatePhotoCatalogAction: (data, id) => dispatch(updatePhotoCatalogAction(data, id)),
});

class PhotoCatalogPage extends React.Component {

    state = {
        loading: true,
    };

    componentDidMount() {
        this.props.getPhotosCatalogAction().then(() => {
            this.setState({
                loading: false,
            })
        });
    }

    getData = () => {
        this.props.getPhotosCatalogAction().then(() => {
            this.loadingOff();
        }).catch(() => {
            this.loadingOff();
        });
    };

    createRow = (data) => {
        this.loadingOn();
        this.props.createPhotoCatalogAction(data).then(this.getData).catch(this.loadingOff);
    };

    updateRow = (data) => {
        this.loadingOn();
        this.props.updatePhotoCatalogAction(data, data.id).then(this.getData).catch(this.loadingOff);
    };

    deleteRow = (id) => {
        this.loadingOn();
        this.props.deletePhotoCatalogAction(id).then(this.getData).catch(this.loadingOff);
    };

    loadingOn = () => {
        this.setState({
            loading: true,
        });
    };

    loadingOff = () => {
        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 1000);
    };

    render() {
        const {photoCatalogs} = this.props;
        const {loading} = this.state;
        const columns = getColumns(COLUMN_TYPE.DEFAULT_PHOTO_CATALOG_COLUMNS);

        return (
            <div>
                <Link to='/' onlyActiveOnIndex>Back</Link>
                {
                    loading && <LinearProgress/>
                }
                <TableComponent
                    title='Photo catalog'
                    columns={columns}
                    data={photoCatalogs}
                    loading={loading}
                    createNewRow={this.createRow}
                    deleteRow={this.deleteRow}
                    updateRow={this.updateRow}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PhotoCatalogPage);