import React from 'react';
import MaterialTable from 'material-table';

export class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { title: 'Name', field: 'firstname' },
        { title: 'Sap Id', field: 'sapid' },
        { title: 'CGPA', field: 'cgpa' },
        {
          title: 'Mobile No',
          field: 'mobile',
        },
      ],
    };

  }

  // componentDidMount() {
  //   this.setState(() => {
  //     return {
  //       data: this.props.studata,
  //     };
  //   });
  // }

  // handleClicked(id) {
  //   // e.preventDefault();
  //   // var id = this.props.optionText.id;
  //   const error = this.props.handleClicked(id);
  // }

  render() {
    return (
      <div>
        <MaterialTable
          title={this.props.title}
          columns={this.props.columns}
          data={this.props.data}
          //   editable={{
          //     onRowAdd: newData =>
          //       new Promise(resolve => {
          //         setTimeout(() => {
          //           resolve();
          //           setState(prevState => {
          //             const data = [...prevState.data];
          //             data.push(newData);
          //             return { ...prevState, data };
          //           });
          //         }, 600);
          //       }),
          //     onRowUpdate: (newData, oldData) =>
          //       new Promise(resolve => {
          //         setTimeout(() => {
          //           resolve();
          //           if (oldData) {
          //             setState(prevState => {
          //               const data = [...prevState.data];
          //               data[data.indexOf(oldData)] = newData;
          //               return { ...prevState, data };
          //             });
          //           }
          //         }, 600);
          //       }),
          //     onRowDelete: oldData =>
          //       new Promise(resolve => {
          //         setTimeout(() => {
          //           resolve();
          //           setState(prevState => {
          //             const data = [...prevState.data];
          //             data.splice(data.indexOf(oldData), 1);
          //             return { ...prevState, data };
          //           });
          //         }, 600);
          //       }),
          //   }}
          localization={{
            pagination: {
              labelRowsPerPage: '10'
            },
          }}
        />
      </div>
    );
  }
}