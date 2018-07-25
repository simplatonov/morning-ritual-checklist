import React,{Component} from "react";
import {Container, ListGroup, ListGroupItem, Button} from "reactstrap";
import {CSSTransition,TransitionGroup} from "react-transition-group";
import {connect} from "react-redux";
import {getItems, deleteItem} from "../actions/itemActions";
import PropTypes from "prop-types";


class CheckList extends Component{
  state={
    dragSrcEl: null
  }


  componentDidMount(){
    this.props.getItems();

  }
  onDeleteClick = (id) =>{
      this.props.deleteItem(id);
  }


  render(){
    const {items} = this.props.item;
    return(
      <Container>

          <ListGroup>
            <TransitionGroup className="check-list">
              {items.map(({_id,name})=>(

                  <CSSTransition key={_id} timeout={500} classNames="fade">

                    <ListGroupItem >
                      <Button onClick={this.onDeleteClick.bind(this,_id)} size="sm" color="danger" className="remove-btn">&times;</Button>
                      {name}
                    </ListGroupItem>
                  </CSSTransition>


              ))}
            </TransitionGroup>
          </ListGroup>

      </Container>
    );
  }
}

CheckList.propTypes = {
  getItems : PropTypes.func.isRequired,
  item : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, {getItems,deleteItem})(CheckList);
