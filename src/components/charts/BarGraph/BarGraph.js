import { Sunburst, LabelSeries } from 'react-vis';
import React from 'react';
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../../state/index"



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

/**
 * Recursively work backwards from highlighted node to find path of valud nodes
 * @param {Object} node - the current node being considered
 * @returns {Array} an array of strings describing the key route to the current node
 */
function getKeyPath(node) {
  if (!node.parent) {
    return ['root'];
  }

  return [(node.data && node.data.name) || node.name].concat(
    getKeyPath(node.parent)
  );
}

/**
 * Recursively modify data depending on whether or not each cell has been selected by the hover/highlight
 * @param {Object} data - the current node being considered
 * @param {Object|Boolean} keyPath - a map of keys that are in the highlight path
 * if this is false then all nodes are marked as selected
 * @returns {Object} Updated tree structure
 */
function updateData(data, keyPath) {
  if (data.children) {
    data.children.map(child => updateData(child, keyPath));
  }
  // add a fill to all the uncolored cells
  if (!data.hex) {
    data.style = {
      fill: EXTENDED_DISCRETE_COLOR_RANGE[5]
    };
  }
  data.style = {
    ...data.style,
    fillOpacity: keyPath && !keyPath[data.name] ? 0.2 : 1
  };

  return data;
}


class BarGraph extends React.Component {

  state = {
    pathValue: false,
    // data: decoratedData,
    finalValue: 'SUNBURST',
    clicked: false
  };

  render() {

    const { clicked, finalValue, pathValue } = this.state;
    return (
      <div className="basic-sunburst-example-wrapper mt-3 d-flex justify-content-center">
        <Sunburst
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
              pathValue: path.join(' > '),
              // data: updateData(decoratedData, pathAsMap)
            });
          }}
          onValueMouseOut={() => {
            if (clicked) {
              return;
            }
            this.props.updateHighlight(false);
            this.setState({
              pathValue: false,
              finalValue: false,
              // data: updateData(decoratedData, false)
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
            strokeOpacity: 0.3,
            strokeWidth: '0.5'
          }}
          colorType="literal"
          getSize={d => d.value}
          getColor={d => d.hex}
          // getLabel={d => d.name}
          data={this.props.monthlyExpense}
          height={500}
          width={500}
        >
          {finalValue && (
            <LabelSeries
              data={[{ x: 0, y: 0, label: finalValue, style: LABEL_STYLE }]}
            />
          )}
        </Sunburst>

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