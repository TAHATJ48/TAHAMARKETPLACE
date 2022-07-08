import React from "react";
import UserName from "./User";

export default class Orders extends React.Component {
  state = {
    loading: true,
    orders: []
  };
  async componentDidMount() {
    const response = await fetch(`https://api.edu.etherial.dev/api/ecommerce/users/me/orders`, {
      method: "GET",
      headers : {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
  })
    const json = await response.json();
    
    this.setState({ orders: json.data, loading: false });
  }

  
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.orders) {
      return <div>No orders</div>;
    }
    return (
      <>
        <UserName/>
      <table id="customers">
        <br/>
        <tr>
          <th>Id</th>
          <th>Ordered At</th>
          <th>Delivery Date</th>
        </tr>
        {this.state.orders.map(order => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.createdAt}</td>
            <td>{order.delivery_date}</td>
          </tr>
        ))}
      </table>
      </>
    );
  }
}