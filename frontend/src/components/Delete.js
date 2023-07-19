
import axios from 'axios';
// import dateFormat from 'dateformat';
import React from 'react';
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';
// import moment  from 'moment';
// import 'moment-timezone';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';



const deleteOne = async (body) => {

  let api = "http://localhost:4000/delete"


  try {
    if (body.category === 'Experience') {
      alert("Can't Delete Experience User")
      window.location.reload()
    }
    else {
      const response = await axios({
        method: 'delete',
        url: api,
        data: body
      })
      alert(response.data)
    }
  } catch (err) {
    console.log(err)
  }
}


const DeleteData = ({ users }) => {
  const history = useNavigate() 
  const leadingActions = (curUser) => (
    <LeadingActions>
      <SwipeAction onClick={() =>{
        alert(`Are yout sure to update ${curUser.name}`)
        history(`/Update/${curUser._id }`)}}>
        <div style={{ border: "1px  solid  pink", backgroundColor: "green", textAlign: "center", padding: "30px" }}>Update</div>
      </SwipeAction>
    </LeadingActions>
  );
  
  const trailingActions = (curUser) => (
    <TrailingActions >
      <SwipeAction
        destructive={true}
        onClick={() => deleteOne(curUser)}>
        <div style={{ border: "1px  solid  pink", backgroundColor: "red", textAlign: "center", padding: "30px" }}>Delete</div>
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <>
      <div >
        {
          users.map((curUser) => {
            const { name, contact, img, join } = curUser;

            return (
              <SwipeableList>
                <SwipeableListItem leadingActions={leadingActions(curUser)} trailingActions={trailingActions(curUser)}>

                  <tr style={{ display: "flex", padding: "10px", }}>
                    <td ><img src={img} style={{ borderRadius: "50%", height: "65px", width: "65px", backgroundColor: "grey" }}></img></td>
                    <td style={{ marginLeft: "50px", marginBottom: "-20px", padding: "-10px", marginTop: "-12px" }}>  <h4  >{name}</h4>
                      <p style={{ marginTop: "-20px" }}>{contact}  </p>  </td>
                    <td style={{ paddingLeft: "200px", marginTop: "-12px" }} ><h5 >{<Moment format="DD MMM YYYY">{join}</Moment>}</h5></td>
                    <td style={{ paddingLeft: "20px", fontSize: '11px', marginTop: "33 px", fontWeight: "500" }} >Join {<Moment fromNow>{join}</Moment>}</td>
                  </tr>
                </SwipeableListItem>
              </SwipeableList>
            )
          })
        }
      </div>
    </>
  )
}
export default DeleteData