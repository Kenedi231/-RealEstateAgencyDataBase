import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router";
import LinearProgress from "@material-ui/core/LinearProgress";
import TableComponent from "../../components/Table/TableComponent";
import getColumns from "../../utils/Converter/getColumns";
import COLUMN_TYPE from "../../../constants/columnType";
import getPhotosAction from "../../../actions/photo/getPhotosAction";
import createPhotoAction from "../../../actions/photo/createPhotoAction";
import updatePhotoAction from "../../../actions/photo/updatePhotoAction";
import deletePhotoAction from "../../../actions/photo/deletePhotoAction";
import {withSnackbar} from "notistack";

const mapStateToProps = state => ({
    photos: state.photo.photos,
});

const mapDispatchToProps = dispatch => ({
    getPhotosAction: () => dispatch(getPhotosAction()),
    createPhotoAction: (data) => dispatch(createPhotoAction(data)),
    deletePhotoAction: (id) => dispatch(deletePhotoAction(id)),
    updatePhotoAction: (data, id) => dispatch(updatePhotoAction(data, id)),
});

class PhotoPage extends React.Component {

    state = {
        loading: true,
    };

    componentDidMount() {
        this.props.getPhotosAction().then(() => {
            this.setState({
                loading: false,
            })
        });
    }

    getData = () => {
        this.props.getPhotosAction().then(() => {
            this.loadingOff();
        }).catch(() => {
            this.loadingOff();
        });
    };

    showMessage = () => {
        this.props.enqueueSnackbar('Data successfully updated!', {
            variant: 'success',
        });
    };

    createRow = (data) => {
        this.loadingOn();
        this.props.createPhotoAction(data).then(this.getData).then(this.showMessage).catch(this.loadingOff);
    };

    updateRow = (data) => {
        this.loadingOn();
        this.props.updatePhotoAction(data, data.id).then(this.getData).then(this.showMessage).catch(this.loadingOff);
    };

    deleteRow = (id) => {
        this.loadingOn();
        this.props.deletePhotoAction(id).then(this.getData).then(this.showMessage).catch(this.loadingOff);
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
        const {photos} = this.props;
        const {loading} = this.state;
        const columns = getColumns(COLUMN_TYPE.DEFAULT_PHOTO_COLUMNS);

        return (
            <div>
                <Link to='/' onlyActiveOnIndex>Back</Link>
                {
                    loading && <LinearProgress/>
                }
                <TableComponent
                    title='Photos'
                    columns={columns}
                    data={photos}
                    loading={loading}
                    createNewRow={this.createRow}
                    deleteRow={this.deleteRow}
                    updateRow={this.updateRow}
                />
            </div>
        );
    }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProps) (PhotoPage));