import { Sunburst, LabelSeries, makeVisFlexible } from 'react-vis';
import React from 'react';
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../../state/index"

const FlexibleChart = makeVisFlexible(Sunburst);

export const EXTENDED_DISCRETE_COLOR_RANGE = [
  '#19CDD7',
  '#DDB27C',
  '#88572C',
  '#FF991F',
  '#F15C17',
  '#223F9A',
  '#DA70BF',
  '#125C77',
  '#4DC19C',
  '#776E57',
  '#12939A',
  '#17B8BE',
  '#F6D18A',
  '#B7885E',
  '#FFCB99',
  '#F89570',
  '#829AE3',
  '#E79FD5',
  '#1E96BE',
  '#89DAC1',
  '#B3AD9E'
];

const LABEL_STYLE = {
  fontSize: '12px',
  textAnchor: 'middle'
};

function getKeyPath(node) {
  if (!node.parent) {
    return ['root'];
  }

  return [(node.data && node.data.name) || node.name].concat(
    getKeyPath(node.parent)
  );
}


class BarGraph extends React.Component {

  state = {
    pathValue: false,
    // data: decoratedData,
    finalValue: 'Expenses',
    clicked: false
  };

  render() {

    const { clicked, finalValue } = this.state;
    return (
      <div className="w-100 h-100 pt-3 justify-content-center">
        <FlexibleChart
          showLabel="true"
          animation
          className="basic-sunburst-example"
          hideRootNode
          onValueMouseOver={node => {
            if (clicked) {
              return;
            }
            const path = getKeyPath(node).reverse();
            const pathAsMap = path.reduce((res, row) => {
              res[row] = true;
              return res;
            }, {});
            this.props.updateHighlight(pathAsMap);
            this.setState({
              finalValue: path[path.length - 1],
              pathValue: path.join(' > ')
            });
          }}
          onValueMouseOut={() => {
            if (clicked) {
              return;
            }
            this.props.updateHighlight(false);
            this.setState({
              pathValue: false,
              finalValue: false
            });

          }}
          onValueClick={(node) => {
            const path = getKeyPath(node).reverse();
            this.props.updateClicked({
              parent: path[1] || null,
              child: path[2] || null
            });
            this.setState({ clicked: !clicked });
          }}
          style={{
            stroke: '#ddd',
            strokeOpacity: '0.2',
            strokeWidth: '5'
          }}
          colorType="literal"
          getSize={d => d.value}
          getColor={d => d.hex}
          // getLabel={d => d.name}
          data={this.props.monthlyExpense}
          
        >
          {finalValue && (
            <LabelSeries
              data={[{ x: 0, y: 0, label: finalValue, style: LABEL_STYLE }]}
            />
          )}
        </FlexibleChart>

      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    monthlyExpense: state.monthlyExpense
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...actionCreators }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchToProps)(BarGraph)