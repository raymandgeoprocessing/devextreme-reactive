import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import {
  RowDetailState,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableRowDetail,
} from '@devexpress/dx-react-grid-material-ui';

import {
  generateRows,
} from '../../demo-data/generator';

const RowDetail = ({ row }) => (
  <div>Details for {row.name} from {row.city}</div>
);

RowDetail.propTypes = {
  row: PropTypes.any.isRequired,
};

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'sex', title: 'Sex' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
      ],
      rows: generateRows({ length: 7 }),
      expandedRows: [2, 5],
    };

    this.changeExpandedDetails = expandedRows => this.setState({ expandedRows });
  }
  render() {
    const { rows, columns, expandedRows } = this.state;

    return (
      <Paper>
        <Grid
          rows={rows}
          columns={columns}
        >
          <RowDetailState
            expandedRows={expandedRows}
            onExpandedRowsChange={this.changeExpandedDetails}
          />
          <Table />
          <TableHeaderRow />
          <TableRowDetail
            contentComponent={RowDetail}
          />
        </Grid>
      </Paper>
    );
  }
}
